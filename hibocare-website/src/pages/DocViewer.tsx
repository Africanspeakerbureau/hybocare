import { Link, useSearchParams } from "react-router-dom";

function toPreview(raw: string) {
  try {
    const u = new URL(raw);
    // Google Doc
    if (u.hostname.includes("docs.google.com") && u.pathname.includes("/document/")) {
      const id = u.pathname.split("/d/")[1]?.split("/")[0];
      return id ? `https://docs.google.com/document/d/${id}/preview` : raw;
    }
    // Drive file link (/file/d/<id>/view|preview)
    if (u.hostname.includes("drive.google.com") && u.pathname.includes("/file/")) {
      const id = u.pathname.split("/d/")[1]?.split("/")[0];
      return id ? `https://drive.google.com/file/d/${id}/preview` : raw;
    }
    // uc?export=download&id=<id>
    if (u.hostname.includes("drive.google.com") && u.searchParams.get("id")) {
      const id = u.searchParams.get("id")!;
      return `https://drive.google.com/file/d/${id}/preview`;
    }
  } catch {}
  return raw;
}

function toDownload(raw: string) {
  try {
    const u = new URL(raw);
    if (u.hostname.includes("docs.google.com") && u.pathname.includes("/document/")) {
      const id = u.pathname.split("/d/")[1]?.split("/")[0];
      return id ? `https://docs.google.com/document/d/${id}/export?format=pdf` : raw;
    }
    if (u.hostname.includes("drive.google.com") && u.pathname.includes("/file/")) {
      const id = u.pathname.split("/d/")[1]?.split("/")[0];
      return id ? `https://drive.google.com/uc?export=download&id=${id}` : raw;
    }
    if (u.hostname.includes("drive.google.com") && u.searchParams.get("id")) {
      const id = u.searchParams.get("id")!;
      return `https://drive.google.com/uc?export=download&id=${id}`;
    }
  } catch {}
  return raw;
}

function safeDecode(value: string | null): string {
  if (!value) return "";
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
}

export default function DocViewerPage() {
  const [params] = useSearchParams();
  const rawUrl = safeDecode(params.get("u"));
  const title = safeDecode(params.get("title")) || "Document";

  if (!rawUrl) {
    return <div className="mx-auto max-w-5xl p-6">Missing document link.</div>;
  }

  const previewUrl = toPreview(rawUrl);
  const downloadUrl = toDownload(rawUrl);

  return (
    <div className="mx-auto max-w-6xl p-6">
      <h1 className="text-2xl font-semibold">{title}</h1>
      <div className="my-4 flex gap-3">
        <a href={downloadUrl} className="rounded bg-blue-600 px-4 py-2 text-white">
          Download PDF
        </a>
        <Link to="/downloads" className="rounded border px-4 py-2">
          Back
        </Link>
      </div>
      <iframe
        src={previewUrl}
        className="w-full"
        style={{ height: "85vh", border: 0 }}
        allow="fullscreen"
        title={title}
      />
    </div>
  );
}
