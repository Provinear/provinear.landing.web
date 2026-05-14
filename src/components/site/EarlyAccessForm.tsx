import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  getEarlyAccessWebhookUrl,
  submitEarlyAccess,
  type EarlyAccessIntent,
} from "@/lib/early-access";

const earlyAccessSchema = z.object({
  email: z.string().trim().email("Enter a valid email address."),
  intent: z.enum(["discover", "sell"], {
    message: "Choose how you want to join.",
  }),
});

type EarlyAccessFormValues = z.infer<typeof earlyAccessSchema>;

const intentOptions: Array<{
  value: EarlyAccessIntent;
  title: string;
  description: string;
}> = [
  {
    value: "discover",
    title: "Find things nearby",
    description: "Let me know when customers can start using Provinear.",
  },
  {
    value: "sell",
    title: "Provide on Provinear",
    description: "Let me know when providers can join first.",
  },
];

export function EarlyAccessForm() {
  const [submitState, setSubmitState] = useState<{
    kind: "idle" | "success" | "error";
    message?: string;
  }>({ kind: "idle" });

  const form = useForm<EarlyAccessFormValues>({
    resolver: zodResolver(earlyAccessSchema),
    defaultValues: {
      email: "",
      intent: "discover",
    },
  });

  const onSubmit = form.handleSubmit(async (values) => {
    setSubmitState({ kind: "idle" });

    try {
      await submitEarlyAccess({
        webhookUrl: getEarlyAccessWebhookUrl(import.meta.env),
        email: values.email,
        intent: values.intent,
      });

      form.reset({
        email: "",
        intent: values.intent,
      });
      setSubmitState({
        kind: "success",
        message:
          values.intent === "sell"
            ? "You're on the provider list. We'll let you know before provider access opens."
            : "You're on the list. We'll let you know when early access opens.",
      });
    } catch (error) {
      setSubmitState({
        kind: "error",
        message:
          error instanceof Error
            ? error.message
            : "We couldn't save your spot. Please try again.",
      });
    }
  });

  return (
    <Form {...form}>
      <form onSubmit={onSubmit} className="space-y-5">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel className="text-sm font-semibold text-ink">
                Email
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="email"
                  placeholder="you@example.com"
                  className="h-14 rounded-2xl border-border/70 bg-white px-4 text-base shadow-none"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="intent"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel className="text-sm font-semibold text-ink">
                I want to
              </FormLabel>
              <FormControl>
                <RadioGroup
                  value={field.value}
                  onValueChange={field.onChange}
                  className="grid gap-3 md:grid-cols-2"
                >
                  {intentOptions.map((option) => (
                    <label
                      key={option.value}
                      className={`flex cursor-pointer items-start gap-3 rounded-[1.5rem] border p-4 transition-all ${
                        field.value === option.value
                          ? "border-primary bg-primary/5 shadow-soft"
                          : "border-border/70 bg-white hover:border-primary/40"
                      }`}
                    >
                      <RadioGroupItem
                        value={option.value}
                        className="mt-1 h-5 w-5"
                      />
                      <span className="block">
                        <span className="block text-base font-semibold text-ink">
                          {option.title}
                        </span>
                        <span className="mt-1 block text-sm leading-relaxed text-muted-foreground">
                          {option.description}
                        </span>
                      </span>
                    </label>
                  ))}
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <button
          type="submit"
          disabled={form.formState.isSubmitting}
          className="flex h-14 w-full items-center justify-center rounded-full bg-primary px-6 text-base font-bold text-primary-foreground shadow-lg transition-all hover:bg-ink disabled:cursor-not-allowed disabled:opacity-70"
        >
          {form.formState.isSubmitting ? "Saving..." : "Join early access"}
        </button>

        {submitState.message ? (
          <p
            className={`text-sm leading-relaxed ${
              submitState.kind === "success"
                ? "text-emerald-700"
                : "text-destructive"
            }`}
          >
            {submitState.message}
          </p>
        ) : null}
      </form>
    </Form>
  );
}
