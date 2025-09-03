import React, { useState } from "react";
import { useInfoRequest } from "./InfoRequestContext";

const sectors = ["Data Centers","Greenhouses & Grow Facilities","Hospitals","Commercial Buildings","Other"];

export default function InfoRequestModal() {
  const { open, closeModal } = useInfoRequest();
  const [form, setForm] = useState({
    sector: sectors[0],
    firstName: "", lastName: "", email: "", phone: "", note: ""
  });
  const endpoint = import.meta.env.VITE_INFO_FORM_ENDPOINT || "";

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!endpoint) {
      console.warn("VITE_INFO_FORM_ENDPOINT not set; skipping submit");
      closeModal();
      return;
    }
    await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type":"application/json", Accept:"application/json" },
      body: JSON.stringify({...form, source: "hibocare.info-request"})
    }).catch(()=>{});
    closeModal();
  };

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="w-full max-w-xl rounded-2xl bg-white p-6 shadow-xl">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-xl font-semibold">Request More Info</h3>
          <button onClick={closeModal} aria-label="Close">✕</button>
        </div>
        <form onSubmit={onSubmit} className="grid gap-4">
          <label className="grid gap-1">
            <span>Area of interest</span>
            <select value={form.sector} onChange={e=>setForm({...form, sector:e.target.value})} className="rounded border p-2">
              {sectors.map(s=> <option key={s}>{s}</option>)}
            </select>
          </label>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-1">
              <span>First name</span>
              <input required value={form.firstName} onChange={e=>setForm({...form, firstName:e.target.value})} className="rounded border p-2"/>
            </label>
            <label className="grid gap-1">
              <span>Last name</span>
              <input required value={form.lastName} onChange={e=>setForm({...form, lastName:e.target.value})} className="rounded border p-2"/>
            </label>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-1">
              <span>Email</span>
              <input required type="email" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} className="rounded border p-2"/>
            </label>
            <label className="grid gap-1">
              <span>Phone</span>
              <input value={form.phone} onChange={e=>setForm({...form, phone:e.target.value})} className="rounded border p-2"/>
            </label>
          </div>
          <label className="grid gap-1">
            <span>Notes (optional)</span>
            <textarea rows={4} value={form.note} onChange={e=>setForm({...form, note:e.target.value})} className="rounded border p-2"/>
          </label>
          <div className="mt-2 flex justify-end gap-2">
            <button type="button" onClick={closeModal} className="rounded border px-4 py-2">Cancel</button>
            <button type="submit" className="rounded bg-primary px-4 py-2 text-white">Send</button>
          </div>
        </form>
      </div>
    </div>
  );
}
