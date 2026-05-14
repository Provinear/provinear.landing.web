export type EarlyAccessIntent = "discover" | "sell";

export type EarlyAccessPayload = {
  email: string;
  intent: EarlyAccessIntent;
  source: "homepage-prelaunch";
};

type EarlyAccessEnv = {
  VITE_EARLY_ACCESS_WEBHOOK_URL?: string;
};

type SubmitEarlyAccessArgs = {
  webhookUrl: string | null;
  email: string;
  intent: EarlyAccessIntent;
  fetcher?: typeof fetch;
};

export function createEarlyAccessPayload(args: {
  email: string;
  intent: EarlyAccessIntent;
}): EarlyAccessPayload {
  return {
    email: args.email.trim(),
    intent: args.intent,
    source: "homepage-prelaunch",
  };
}

export function getEarlyAccessWebhookUrl(env: EarlyAccessEnv): string | null {
  const value = env.VITE_EARLY_ACCESS_WEBHOOK_URL?.trim();
  return value ? value : null;
}

export async function submitEarlyAccess({
  webhookUrl,
  email,
  intent,
  fetcher = fetch,
}: SubmitEarlyAccessArgs): Promise<void> {
  if (!webhookUrl) {
    throw new Error("This is not available at the moment.");
  }

  const response = await fetcher(webhookUrl, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(createEarlyAccessPayload({ email, intent })),
  });

  if (!response.ok) {
    throw new Error("We couldn't save your spot. Please try again.");
  }
}
