import { useEffect, useState } from "react";
import LandingGate from "./LandingGate";

export default function Gate({ children }) {
  const [ok, setOk] = useState(false);

  useEffect(() => {
    const bypass = import.meta.env.VITE_GATE_BYPASS === "true";
    const allowed = localStorage.getItem("gate_ok") === "1";
    setOk(bypass || allowed);
  }, []);

  if (!ok) return <LandingGate onSuccess={() => {}} />;
  return children;
}
