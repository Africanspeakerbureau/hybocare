import { useState } from "react";

export default function LandingGate({ onSuccess }) {
  const [name, setName] = useState(localStorage.getItem("gate_name") || "");
  const [email, setEmail] = useState(localStorage.getItem("gate_email") || "");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const endpoint = import.meta.env.VITE_FORM_ENDPOINT || '';

  async function onSubmit(e) {
    e.preventDefault();
    setError("");
    if (!email) { setError("Please enter a valid email."); return; }
    setBusy(true);
    try {
      // 1) Send to Formspree if configured
      if (endpoint) {
        const res = await fetch(endpoint, {
          method: "POST",
          headers: { "Accept": "application/json", "Content-Type": "application/json" },
          body: JSON.stringify({
            name,
            email,
            page: location.href,
            ts: new Date().toISOString(),
          }),
        });
        // Accept 200/201/202
        if (!res.ok && !(res.status >= 200 && res.status < 300)) {
          throw new Error("Submit failed with status " + res.status);
        }
      }
      // 2) Unlock on this device
      localStorage.setItem("gate_name", name);
      localStorage.setItem("gate_email", email);
      localStorage.setItem("gate_ok", "1");
      onSuccess?.();
      location.reload();
    } catch (err) {
      console.error(err);
      setError("Could not submit. Please try again.");
    } finally {
      setBusy(false);
    }
  }

  const wrap = { minHeight:"100vh", display:"flex", alignItems:"center", justifyContent:"center", background:"#f6f7fb", padding:"24px" };
  const card = { width:"100%", maxWidth:420, background:"#fff", borderRadius:16, padding:24, boxShadow:"0 10px 25px rgba(0,0,0,.06)" };
  const input = { width:"100%", padding:"12px 14px", borderRadius:10, border:"1px solid #e5e7eb", marginTop:8, marginBottom:14 };
  const btn = { width:"100%", padding:"12px 14px", borderRadius:10, background:"#111827", color:"#fff", border:"none", cursor:"pointer", opacity: busy ? .7 : 1 };

  return (
    <div style={wrap}>
      <form onSubmit={onSubmit} style={card}>
        <h1 style={{margin:0, fontSize:22}}>Enter to continue</h1>
        <p style={{color:"#6b7280", marginTop:6}}>Please provide your name and email to access the site.</p>
        <label>Name</label>
        <input style={input} value={name} onChange={e=>setName(e.target.value)} placeholder="Your name" />
        <label>Email</label>
        <input style={input} type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="you@example.com" required />
        {error && <p style={{color:"#ef4444"}}>{error}</p>}
        <button style={btn} type="submit" disabled={busy}>{busy ? "Submitting…" : "Continue"}</button>
        <p style={{color:"#9ca3af", fontSize:12, marginTop:10}}>
          We’ll remember this on this device only. By continuing, you agree to our brief privacy notice.
        </p>
      </form>
    </div>
  );
}
