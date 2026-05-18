import { createServerFn } from "@tanstack/react-start";
import { supabase } from "@/lib/supabase";

export type EarlyAccessIntent = "discover" | "sell";

export type EarlyAccessPayload = {
  email: string;
  intent: EarlyAccessIntent;
  source: "homepage-prelaunch";
};

export function createEarlyAccessPayload(args: {
  email: string;
  intent: EarlyAccessIntent;
}): EarlyAccessPayload {
  return {
    email: args.email.trim().toLowerCase(),
    intent: args.intent,
    source: "homepage-prelaunch",
  };
}

export const submitEarlyAccess = createServerFn({ method: "POST" })
  .inputValidator(
    (data: {
      email: string;
      intent: EarlyAccessIntent;
      captchaToken: string;
    }) => data,
  )
  .handler(async ({ data }) => {
    // 1. Verify Cloudflare Turnstile token
    const siteverifyUrl =
      "https://challenges.cloudflare.com/turnstile/v0/siteverify";

    const secretKey =
      (process.env.TURNSTILE_SECRET_KEY as string) ||
      (import.meta.env.TURNSTILE_SECRET_KEY as string) ||
      "1x0000000000000000000000000000000AA";

    const response = await fetch(siteverifyUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `secret=${encodeURIComponent(secretKey)}&response=${encodeURIComponent(data.captchaToken)}`,
    });

    const verification = (await response.json()) as {
      success: boolean;
      "error-codes"?: string[];
    };

    if (!verification.success) {
      throw new Error("CAPTCHA verification failed. Please try again.");
    }

    // 2. Insert record into Supabase waitlist
    const payload = createEarlyAccessPayload({
      email: data.email,
      intent: data.intent,
    });
    const { error } = await supabase.from("waitlist").insert(payload);

    if (error) {
      if (error.code === "23505") {
        throw new Error("You're already on the list with that email.");
      }
      throw new Error("We couldn't save your spot. Please try again.");
    }
  });

