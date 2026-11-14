"use client";

import { useState, type FormEvent } from "react";

type FieldName = "name" | "email" | "question";
type Errors = Partial<Record<FieldName, string>>;

const fields: { name: FieldName; label: string; placeholder: string; type: string; autoComplete: string }[] =
  [
    { name: "name", label: "Full name", placeholder: "Your name", type: "text", autoComplete: "name" },
    {
      name: "email",
      label: "Email",
      placeholder: "youremail@example.com",
      type: "email",
      autoComplete: "email",
    },
  ];

export function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const question = String(data.get("question") ?? "").trim();
    const next: Errors = {};

    if (name.length < 2) next.name = "Enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Enter a valid email address.";
    if (question.length < 10) next.question = "Tell us a little more, at least a short sentence.";

    setErrors(next);
    if (Object.keys(next).length > 0) {
      const firstInvalid = (Object.keys(next)[0] ?? "name") as FieldName;
      const field = form.elements.namedItem(firstInvalid);
      if (field instanceof HTMLElement) field.focus();
      return;
    }

    form.reset();
    setSent(true);
  }

  if (sent) {
    return (
      <div role="status" className="rounded-2xl border border-line bg-paper p-6">
        <h3 className="font-display text-xl font-bold">Message ready</h3>
        <p className="mt-2 text-sm leading-6 text-muted">
          Thanks. This demo keeps the message in the browser and does not send it to a server. On
          the live product it would reach the Luma team.
        </p>
        <button
          type="button"
          className="mt-5 inline-flex h-11 items-center rounded-xl bg-blue px-4 text-sm font-semibold text-white hover:bg-blue-dark"
          onClick={() => setSent(false)}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form className="grid gap-4" onSubmit={onSubmit} noValidate>
      {fields.map((field) => (
        <Field
          key={field.name}
          {...field}
          error={errors[field.name]}
        />
      ))}
      <div>
        <label htmlFor="question" className="text-sm font-semibold">
          Your question
        </label>
        <textarea
          id="question"
          name="question"
          rows={4}
          placeholder="Tell us how we can help..."
          aria-invalid={errors.question ? true : undefined}
          aria-describedby={errors.question ? "question-error" : undefined}
          className="mt-2 w-full resize-y rounded-xl border border-transparent bg-paper px-4 py-3 text-sm outline-none placeholder:text-muted/70 focus:border-blue focus:bg-white"
        />
        {errors.question ? (
          <p id="question-error" className="mt-1 text-sm text-[#9f1239]">
            {errors.question}
          </p>
        ) : null}
      </div>
      <button
        type="submit"
        className="mt-2 inline-flex h-12 items-center justify-center rounded-xl bg-blue text-sm font-semibold text-white hover:bg-blue-dark"
      >
        Send message
      </button>
    </form>
  );
}

function Field({
  name,
  label,
  placeholder,
  type,
  autoComplete,
  error,
}: {
  name: FieldName;
  label: string;
  placeholder: string;
  type: string;
  autoComplete: string;
  error?: string;
}) {
  const errorId = `${name}-error`;

  return (
    <div>
      <label htmlFor={name} className="text-sm font-semibold">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        autoComplete={autoComplete}
        placeholder={placeholder}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        className="mt-2 h-12 w-full rounded-xl border border-transparent bg-paper px-4 text-sm outline-none placeholder:text-muted/70 focus:border-blue focus:bg-white"
      />
      {error ? (
        <p id={errorId} className="mt-1 text-sm text-[#9f1239]">
          {error}
        </p>
      ) : null}
    </div>
  );
}
