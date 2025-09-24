import { useEffect, useMemo } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";

type NormalizedLinks = {
  previewUrl: string;
  downloadUrl: string;
};

type GoogleDocType = "document" | "spreadsheets" | "presentation";

const DOC_PREVIEW_SEGMENTS: Record<GoogleDocType, string> = {
  document: "document",
  spreadsheets: "spreadsheets",
  presentation: "presentation",
};

function safeDecode(value: string | null | undefined): string | null {
  if (!value) return null;
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
}

function sanitizeGoogleId(candidate: string | null | undefined): string | null {
  if (!candidate) return null;
  const trimmed = candidate.trim();
  return trimmed ? trimmed.replace(/[^a-zA-Z0-9_-]/g, "") : null;
}

function isHttpUrl(candidate: string | null): candidate is string {
  if (!candidate) return false;
  try {
    const url = new URL(candidate);
    return url.protocol === "https:" || url.protocol === "http:";
  } catch {
    return false;
  }
}

function buildDocsUrls(id: string, type: GoogleDocType): NormalizedLinks {
  const encodedId = encodeURIComponent(id);
  const base = `https://docs.google.com/${DOC_PREVIEW_SEGMENTS[type]}/d/${encodedId}`;
  const previewUrl = `${base}/preview`;
  const downloadUrl =
    type === "presentation"
      ? `${base}/export/pdf`
      : `${base}/export?format=pdf`;

  return { previewUrl, downloadUrl };
}

function buildDriveUrls(id: string): NormalizedLinks {
  const encodedId = encodeURIComponent(id);
  return {
    previewUrl: `https://drive.google.com/file/d/${encodedId}/preview`,
    downloadUrl: `https://drive.google.com/uc?export=download&id=${encodedId}`,
  };
}

function matchGoogleLinks(url: URL): NormalizedLinks | null {
  const { host, pathname, searchParams } = url;
  const fromPath = sanitizeGoogleId(pathname.match(/\/d\/([^/]+)/)?.[1]);
  const fromQuery = sanitizeGoogleId(searchParams.get("id") ?? searchParams.get("file"));
  const resourceId = fromPath ?? fromQuery;

  if (!resourceId) {
    return null;
  }

  if (host.includes("docs.google.com")) {
    if (pathname.includes("/document/")) {
      return buildDocsUrls(resourceId, "document");
    }
    if (pathname.includes("/spreadsheets/")) {
      return buildDocsUrls(resourceId, "spreadsheets");
    }
    if (pathname.includes("/presentation/")) {
      return buildDocsUrls(resourceId, "presentation");
    }
    if (pathname.startsWith("/uc")) {
      return buildDriveUrls(resourceId);
    }
  }

  if (host.includes("drive.google.com")) {
    return buildDriveUrls(resourceId);
  }

  return null;
}

function normalizeLinks(rawUrl: string): NormalizedLinks | null {
  try {
    const parsed = new URL(rawUrl);
    return matchGoogleLinks(parsed);
  } catch {
    return null;
  }
}

function formatTitleFromSlug(slug?: string | null): string | null {
  if (!slug) return null;
  return slug
    .split("-")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

export default function DocViewerPage() {
  const { slug } = useParams<{ slug?: string }>();
  const [searchParams] = useSearchParams();
  const rawParam = searchParams.get("u");
  const decodedUrl = safeDecode(rawParam);

  if (!decodedUrl) {
    return <div className="mx-auto max-w-5xl p-6">Missing document URL.</div>;
  }

  if (!isHttpUrl(decodedUrl)) {
    return (
      <div className="mx-auto max-w-5xl p-6">
        Unsupported document URL. Please provide a valid https link.
      </div>
    );
  }

  const providedTitle = safeDecode(searchParams.get("title"));
  const derivedTitle = providedTitle ?? formatTitleFromSlug(slug) ?? "Document";

  const normalizedLinks = useMemo(() => normalizeLinks(decodedUrl), [decodedUrl]);
  const previewUrl = normalizedLinks?.previewUrl ?? decodedUrl;
  const downloadUrl = normalizedLinks?.downloadUrl ?? decodedUrl;
  const isNormalized = Boolean(normalizedLinks);

  useEffect(() => {
    const originalTitle = document.title;
    document.title = `${derivedTitle} | HiboCare`;
    return () => {
      document.title = originalTitle;
    };
  }, [derivedTitle]);

  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-semibold">{derivedTitle}</h1>
      <div className="my-4 flex flex-wrap gap-3">
        <a
          href={downloadUrl}
          className="inline-flex items-center rounded bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
        >
          Download PDF
        </a>
        <Link to="/downloads" className="inline-flex items-center rounded border px-4 py-2">
          Back
        </Link>
        {!isNormalized && (
          <span className="inline-flex items-center text-sm text-muted-foreground">
            This file opens directly from the original link.
          </span>
        )}
      </div>
      <div className="overflow-hidden rounded-lg border bg-background">
        <iframe
          src={previewUrl}
          title={derivedTitle}
          className="h-[85vh] w-full"
          loading="lazy"
          allowFullScreen
        />
      </div>
    </main>
  );
}
