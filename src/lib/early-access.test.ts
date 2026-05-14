import test from "node:test";
import assert from "node:assert/strict";

import {
  createEarlyAccessPayload,
  getEarlyAccessWebhookUrl,
  submitEarlyAccess,
  type EarlyAccessIntent,
} from "./early-access.ts";

test("createEarlyAccessPayload trims email and preserves intent/source", () => {
  const payload = createEarlyAccessPayload({
    email: "  person@example.com  ",
    intent: "discover",
  });

  assert.deepEqual(payload, {
    email: "person@example.com",
    intent: "discover",
    source: "homepage-prelaunch",
  });
});

test("getEarlyAccessWebhookUrl returns null for blank or missing values", () => {
  assert.equal(getEarlyAccessWebhookUrl({}), null);
  assert.equal(
    getEarlyAccessWebhookUrl({ VITE_EARLY_ACCESS_WEBHOOK_URL: "   " }),
    null,
  );
});

test("getEarlyAccessWebhookUrl trims configured webhook values", () => {
  assert.equal(
    getEarlyAccessWebhookUrl({
      VITE_EARLY_ACCESS_WEBHOOK_URL: " https://example.com/hook ",
    }),
    "https://example.com/hook",
  );
});

test("submitEarlyAccess throws a helpful error when the webhook is missing", async () => {
  await assert.rejects(
    submitEarlyAccess({
      webhookUrl: null,
      email: "person@example.com",
      intent: "sell",
      fetcher: async () => new Response(),
    }),
    /not available at the moment/i,
  );
});

test("submitEarlyAccess posts JSON payload to the webhook", async () => {
  let requestUrl = "";
  let requestMethod = "";
  let requestBody = "";
  let requestHeaders: HeadersInit | undefined;

  await submitEarlyAccess({
    webhookUrl: "https://example.com/hook",
    email: "person@example.com",
    intent: "discover",
    fetcher: async (input, init) => {
      requestUrl = String(input);
      requestMethod = init?.method ?? "";
      requestHeaders = init?.headers;
      requestBody = String(init?.body ?? "");
      return new Response(null, { status: 202 });
    },
  });

  assert.equal(requestUrl, "https://example.com/hook");
  assert.equal(requestMethod, "POST");
  assert.deepEqual(requestHeaders, { "content-type": "application/json" });
  assert.deepEqual(JSON.parse(requestBody), {
    email: "person@example.com",
    intent: "discover" satisfies EarlyAccessIntent,
    source: "homepage-prelaunch",
  });
});

test("submitEarlyAccess throws when the webhook responds with an error", async () => {
  await assert.rejects(
    submitEarlyAccess({
      webhookUrl: "https://example.com/hook",
      email: "person@example.com",
      intent: "sell",
      fetcher: async () => new Response("nope", { status: 500 }),
    }),
    /couldn't save your spot/i,
  );
});
