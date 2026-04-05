"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import {
  ContactPayload,
  sanitizeContactPayload,
  validateContactPayload,
} from "@/src/lib/contact";

type ContactFormStatus = "idle" | "submitting" | "success" | "error";

const INITIAL_FORM: ContactPayload = {
  email: "",
  message: "",
};

export function useContactForm() {
  const [form, setForm] = useState<ContactPayload>(INITIAL_FORM);
  const [status, setStatus] = useState<ContactFormStatus>("idle");
  const [feedback, setFeedback] = useState("");

  function onFieldChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));

    if (status !== "idle") {
      setStatus("idle");
      setFeedback("");
    }
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const payload = sanitizeContactPayload(form);
    const validationError = validateContactPayload(payload);

    setForm(payload);

    if (validationError) {
      setStatus("error");
      setFeedback(validationError);
      return;
    }

    try {
      setStatus("submitting");
      setFeedback("Sending message...");

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = (await response.json().catch(() => null)) as
        | { error?: string; message?: string }
        | null;

      if (!response.ok) {
        throw new Error(
          typeof data?.error === "string"
            ? data.error
            : "Message failed to send. Please try again."
        );
      }

      setForm(INITIAL_FORM);
      setStatus("success");
      setFeedback(
        typeof data?.message === "string"
          ? data.message
          : "Message sent successfully."
      );
    } catch (error) {
      setStatus("error");
      setFeedback(
        error instanceof Error
          ? error.message
          : "Something went wrong while sending your message."
      );
    }
  }

  return {
    form,
    status,
    feedback,
    isSubmitting: status === "submitting",
    onFieldChange,
    onSubmit,
  };
}
