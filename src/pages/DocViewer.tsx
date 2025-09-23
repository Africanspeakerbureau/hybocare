import { Link, useSearchParams } from "react-router-dom";

function safeDecode(value: string): string {
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
}

function normalizePreview(raw: string): string {
  try {
    const u = new URL(raw);
    const host = u.host;
    const path = u.pathname;

    if (host.includes("docs.google.com") && path.includes("/document/")) {
      const idMatch = path.match(/\/d\/([^/]+)/);
      const id = idMatch?.[1];
      return id ? `https://docs.google.com/document/d/${id}/preview` : raw;
    }

    if (host.includes("drive.google.com") && path.includes("/file/")) {
      const idMatch = path.match(/\/d\/([^/]+)/);
      const id = idMatch?.[1];
      return id ? `https://drive.google.com/file/d/${id}/preview` : raw;
    }

    if (host.includes("drive.google.com") && u.searchParams.get("id")) {
      const id = u.searchParams.get("id")!;
      return `https://drive.google.com/file/d/${id}/preview`;
    }

    return raw;
  } catch {
    return raw;
  }
}

function makeDownload(raw: string): string {
  try {
    const u = new URL(raw);
    const host = u.host;
    const path = u.pathname;

    if (host.includes("docs.google.com") && path.includes("/document/")) {
      const idMatch = path.match(/\/d\/([^/]+)/);
      const id = idMatch?.[1];
      return id ? `https://docs.google.com/document/d/${id}/export?format=pdf` : raw;
    }

    if (host.includes("drive.google.com") && path.includes("/file/")) {
      const idMatch = path.match(/\/d\/([^/]+)/);
      const id = idMatch?.[1];
      return id ? `https://drive.google.com/uc?export=download&id=${id}` : raw;
    }

    if (host.includes("drive.google.com") && u.searchParams.get("id")) {
      const id = u.searchParams.get("id")!;
      return `https://drive.google.com/uc?export=download&id=${id}`;
    }

    return raw;
  } catch {
    return raw;
  }
}

export default function DocViewerPage() {
  const [searchParams] = useSearchParams();
  const rawParam = searchParams.get("u");

  if (!rawParam) {
    return <div className="mx-auto max-w-5xl p-6">Missing document URL.</div>;
  }

  const raw = safeDecode(rawParam);
  const titleParam = searchParams.get("title");
  const title = titleParam ? safeDecode(titleParam) : "Document";
  const preview = normalizePreview(raw);
  const downloadUrl = makeDownload(raw);

  return (
    <main className="mx-auto max-w-6xl p-6">
      <h1 className="text-2xl font-semibold">{title}</h1>
      <div className="my-4 flex gap-3">
        <a
          href={downloadUrl}
          className="rounded bg-blue-600 px-4 py-2 text-white"
          target="_blank"
          rel="noreferrer"
        >
          Download PDF
        </a>
        <Link to="/downloads" className="rounded border px-4 py-2">
          Back
        </Link>
      </div>
      <iframe
        src={preview}
        title={title}
        className="w-full"
        style={{ height: "85vh", border: 0 }}
        allow="fullscreen"
      />
    </main>
  );
}
