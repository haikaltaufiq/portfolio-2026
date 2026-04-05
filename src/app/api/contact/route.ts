import { NextResponse } from "next/server";
import {
  sanitizeContactPayload,
  validateContactPayload,
} from "@/src/lib/contact";

const BREVO_API_URL = "https://api.brevo.com/v3/smtp/email";
const IS_PRODUCTION = process.env.NODE_ENV === "production";

function getRequiredEnv(name: string) {
  const value = process.env[name]?.trim();
  return value ? value : null;
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const payload = sanitizeContactPayload(body);
  const validationError = validateContactPayload(payload);

  if (validationError) {
    return NextResponse.json({ error: validationError }, { status: 400 });
  }

  const apiKey = getRequiredEnv("BREVO_API_KEY");
  const senderEmail = getRequiredEnv("BREVO_SENDER_EMAIL");
  const toEmail = getRequiredEnv("BREVO_TO_EMAIL");

  if (!apiKey || !senderEmail || !toEmail) {
    console.error("Brevo env is incomplete.");

    return NextResponse.json(
      {
        error: "Email service is not configured yet.",
      },
      { status: 500 }
    );
  }

  const senderName = process.env.BREVO_SENDER_NAME?.trim() || "Portfolio";
  const toName = process.env.BREVO_TO_NAME?.trim() || undefined;

  try {
    const brevoResponse = await fetch(BREVO_API_URL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify({
        sender: {
          email: senderEmail,
          name: senderName,
        },
        to: [
          {
            email: toEmail,
            ...(toName ? { name: toName } : {}),
          },
        ],
        replyTo: {
          email: payload.email,
        },
        subject: `Portfolio contact from ${payload.email}`,
        textContent: [
          "New contact form submission",
          "",
          `From: ${payload.email}`,
          "",
          "Message:",
          payload.message,
        ].join("\n"),
      }),
    });

    if (!brevoResponse.ok) {
      const errorText = await brevoResponse.text();
      console.error("Brevo send failed:", errorText);

      return NextResponse.json(
        {
          error: "Failed to send message. Please try again later.",
          ...(IS_PRODUCTION
            ? {}
            : {
                details: errorText || "Brevo returned a non-OK response.",
              }),
        },
        { status: 502 }
      );
    }
  } catch (error) {
    console.error("Brevo request crashed:", error);

    return NextResponse.json(
      {
        error: "Failed to send message. Please try again later.",
        ...(IS_PRODUCTION
          ? {}
          : {
              details:
                error instanceof Error
                  ? error.message
                  : "Unknown error while calling Brevo.",
            }),
      },
      { status: 502 }
    );
  }

  return NextResponse.json({
    message: "Message sent. I'll get back to you soon.",
  });
}
