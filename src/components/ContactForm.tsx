"use client";

import { useSearchParams } from "next/navigation";
import { FormEvent, useId, useMemo, useState } from "react";
import { inquiryOptions, type InquiryAbout } from "@/lib/catalog";
import { mailtoInquiry, site } from "@/lib/site";

function isInquiryAbout(value: string): value is InquiryAbout {
  return inquiryOptions.some((option) => option.id === value);
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type FieldErrors = {
  name?: string;
  email?: string;
  message?: string;
};

type Notice = {
  tone: "error" | "success";
  text: string;
};

function validateInquiry(input: {
  name: string;
  from: string;
  message: string;
}): FieldErrors {
  const errors: FieldErrors = {};

  if (!input.name.trim()) {
    errors.name = "Please add your name.";
  }

  if (!input.from.trim()) {
    errors.email = "Please add your email.";
  } else if (!emailPattern.test(input.from.trim())) {
    errors.email = "Please add a valid email.";
  }

  if (!input.message.trim()) {
    errors.message = "Please add a message.";
  }

  return errors;
}

export function ContactForm() {
  const searchParams = useSearchParams();
  const requested = searchParams.get("about") ?? "";
  const initialAbout = isInquiryAbout(requested) ? requested : "";
  const ids = useId();

  const [about, setAbout] = useState(initialAbout);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [notice, setNotice] = useState<Notice | null>(null);

  const emailReady = Boolean(site.contactEmail);

  const helper = useMemo(() => {
    if (emailReady) {
      return "Your note opens in your mail application. Nothing is stored on this page.";
    }
    return "A correspondence address has not been published yet. The form will not pretend to send.";
  }, [emailReady]);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "");
    const from = String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");
    const selected = String(data.get("about") ?? "");

    const nextErrors = validateInquiry({ name, from, message });
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setNotice({
        tone: "error",
        text: "Please correct the fields above. Your note has not been sent.",
      });
      return;
    }

    const href = mailtoInquiry({
      name,
      from,
      message,
      about: selected || undefined,
    });

    if (!href) {
      setNotice({
        tone: "error",
        text: "An address for the house is not published yet. Your note has not been sent.",
      });
      return;
    }

    setNotice({
      tone: "success",
      text: "Your mail application should open with the note.",
    });
    window.location.href = href;
  }

  return (
    <form
      noValidate
      onSubmit={onSubmit}
      className="mx-auto mt-12 grid w-full max-w-lg gap-6 text-left"
    >
      <label className="grid gap-2">
        <span className="text-[0.68rem] uppercase tracking-[0.2em] text-mute">
          Name
        </span>
        <input
          required
          name="name"
          autoComplete="name"
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? `${ids}-name-error` : undefined}
          className="min-h-12 border border-copper/40 bg-card/70 px-4 text-sm text-ink outline-none focus:border-copper"
        />
        {errors.name ? (
          <p id={`${ids}-name-error`} className="text-xs leading-relaxed text-forest">
            {errors.name}
          </p>
        ) : null}
      </label>

      <label className="grid gap-2">
        <span className="text-[0.68rem] uppercase tracking-[0.2em] text-mute">
          Email
        </span>
        <input
          required
          type="email"
          name="email"
          autoComplete="email"
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? `${ids}-email-error` : undefined}
          className="min-h-12 border border-copper/40 bg-card/70 px-4 text-sm text-ink outline-none focus:border-copper"
        />
        {errors.email ? (
          <p id={`${ids}-email-error`} className="text-xs leading-relaxed text-forest">
            {errors.email}
          </p>
        ) : null}
      </label>

      <label className="grid gap-2">
        <span className="text-[0.68rem] uppercase tracking-[0.2em] text-mute">
          I’m inquiring about
          <span className="normal-case tracking-normal text-mute/80">
            {" "}
            (optional)
          </span>
        </span>
        <select
          name="about"
          value={about}
          onChange={(event) => setAbout(event.target.value)}
          className="min-h-12 border border-copper/40 bg-card/70 px-3 text-sm text-ink outline-none focus:border-copper"
        >
          <option value="">A general note</option>
          {inquiryOptions.map((option) => (
            <option key={option.id} value={option.id}>
              {option.label}
            </option>
          ))}
        </select>
      </label>

      <label className="grid gap-2">
        <span className="text-[0.68rem] uppercase tracking-[0.2em] text-mute">
          Message
        </span>
        <textarea
          required
          name="message"
          rows={6}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? `${ids}-message-error` : undefined}
          className="border border-copper/40 bg-card/70 px-4 py-3 text-sm leading-relaxed text-ink outline-none focus:border-copper"
        />
        {errors.message ? (
          <p
            id={`${ids}-message-error`}
            className="text-xs leading-relaxed text-forest"
          >
            {errors.message}
          </p>
        ) : null}
      </label>

      <p className="text-xs leading-relaxed text-mute">{helper}</p>

      <button
        type="submit"
        className="min-h-12 border border-forest bg-forest px-6 text-[0.72rem] uppercase tracking-[0.22em] text-parchment hover:bg-forest/90"
      >
        Send a note
      </button>

      {notice ? (
        <p
          role={notice.tone === "error" ? "alert" : "status"}
          className="text-sm leading-relaxed text-forest"
        >
          {notice.text}
        </p>
      ) : null}
    </form>
  );
}
