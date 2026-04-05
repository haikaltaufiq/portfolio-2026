export type ContactPayload = {
  email: string;
  message: string;
};

export const CONTACT_EMAIL_MAX_LENGTH = 160;
export const CONTACT_MESSAGE_MAX_LENGTH = 2000;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

export function sanitizeContactPayload(value: unknown): ContactPayload {
  if (!isRecord(value)) {
    return {
      email: "",
      message: "",
    };
  }

  return {
    email: typeof value.email === "string" ? value.email.trim() : "",
    message: typeof value.message === "string" ? value.message.trim() : "",
  };
}

export function validateContactPayload(payload: ContactPayload): string | null {
  
 if (!payload.email) {
return "Email is required.";
}

if (!EMAIL_REGEX.test(payload.email)) {
return "Invalid email format.";
}

if (payload.email.length > CONTACT_EMAIL_MAX_LENGTH) {
return "Email is too long.";
}

if (!payload.message) {
return "Message is required.";
}

if (payload.message.length > CONTACT_MESSAGE_MAX_LENGTH) {
return "Message is too long.";
}

  return null;
}
