import { useState } from "react";
import { useInfoRequest } from "./InfoRequestContext";

const AREAS = [
  "Data Centers",
  "Greenhouses & Grow Facilities",
  "Hospitals",
  "Commercial Buildings",
];

type State = "idle" | "sending" | "ok" | "error";

export default function InfoRequestModal() {
  const { isOpen, close } = useInfoRequest();
  const endpoint =
    import.meta.env.VITE_INFO_FORM_ENDPOINT || import.meta.env.VITE_FORM_ENDPOINT || "";

  const [state, setState] = useState<State>("idle");
  const [form, setForm] = useState({
    area: AREAS[0],
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    notes: "",
    company: "",
    botField: "", // honeypot
  });
  const canSubmit = endpoint && state !== "sending";

  const onChange =
    (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!endpoint) {
      setState("error");
      return;
    }
    if (form.botField) return; // ignore bots

    setState("sending");
    try {
      const payload = {
        area: form.area,
        firstName: form.firstName,
        lastName: form.lastName,
        email: form.email,
        phone: form.phone,
        notes: form.notes,
        company: form.company,
        source_url: typeof window !== "undefined" ? window.location.href : "",
      };

      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setState("ok");
      } else {
        setState("error");
      }
    } catch {
      setState("error");
    }
  }

  if (!isOpen) return null;

  return (
    <div
      aria-modal="true"
      role="dialog"
      className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/50 px-4"
      onClick={close}
    >
      <div
        className="w-full max-w-xl rounded-2xl bg-white p-6 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <h2 className="text-xl font-semibold">Request More Info</h2>
          <button
            onClick={close}
            aria-label="Close"
            className="rounded-full p-2 text-slate-500 hover:bg-slate-100"
          >
            ✕
          </button>
        </div>

        {state === "ok" ? (
          <div className="mt-4 rounded-lg bg-green-50 p-4 text-green-700">
            Thank you! We’ve received your request and will get back to you shortly.
          </div>
        ) : state === "error" ? (
          <div className="mt-4 rounded-lg bg-red-50 p-4 text-red-700">
            Sorry, something went wrong. Please try again later.
          </div>
        ) : null}

        <form onSubmit={onSubmit} className="mt-4 space-y-4">
          {/* honeypot */}
          <input
            type="text"
            name="botField"
            autoComplete="off"
            tabIndex={-1}
            className="hidden"
            value={form.botField}
            onChange={onChange("botField")}
          />

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label className="mb-1 block text-sm font-medium">Area of interest</label>
              <select
                className="w-full rounded-lg border px-3 py-2"
                value={form.area}
                onChange={onChange("area")}
                required
              >
                {AREAS.map((a) => (
                  <option key={a} value={a}>
                    {a}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium">First name</label>
              <input
                className="w-full rounded-lg border px-3 py-2"
                value={form.firstName}
                onChange={onChange("firstName")}
                required
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">Last name</label>
              <input
                className="w-full rounded-lg border px-3 py-2"
                value={form.lastName}
                onChange={onChange("lastName")}
                required
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium">Email</label>
              <input
                type="email"
                className="w-full rounded-lg border px-3 py-2"
                value={form.email}
                onChange={onChange("email")}
                required
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">Phone</label>
              <input
                type="tel"
                className="w-full rounded-lg border px-3 py-2"
                value={form.phone}
                onChange={onChange("phone")}
              />
            </div>

            <div className="sm:col-span-2">
              <label className="mb-1 block text-sm font-medium">
                Notes (project details, questions, timing)
              </label>
              <textarea
                rows={4}
                className="w-full rounded-lg border px-3 py-2"
                value={form.notes}
                onChange={onChange("notes")}
              />
            </div>
          </div>

          <div className="mt-2 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={close}
              className="rounded-lg border px-4 py-2 text-slate-700 hover:bg-slate-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={!canSubmit}
              className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 disabled:opacity-50"
            >
              {state === "sending" ? "Sending…" : "Submit"}
            </button>
          </div>

          {!endpoint && (
            <p className="mt-2 text-xs text-slate-500">
              (Admin note: set <code>VITE_INFO_FORM_ENDPOINT</code> in env, or we’ll fall
              back to <code>VITE_FORM_ENDPOINT</code>.)
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
