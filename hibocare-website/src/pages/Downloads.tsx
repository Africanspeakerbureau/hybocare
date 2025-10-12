import React from "react";
import { Link } from "react-router-dom";
import { docLink } from "@/lib/docLink";
import { useInfoRequest } from "@/features/info-request/InfoRequestContext";

const slug = (s: string) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

type Item = {
  title: string;
  blurb?: string;
  href?: string;
  requestInfo?: boolean;
};

type Section = {
  heading: string;
  items: Item[];
};

const sections: Section[] = [
  {
    heading: "Industry Brochures",
    items: [
      {
        title: "Data Centers – Brochure",
        blurb:
          "Cleaner coils, lower pressure drop, and up to 30% cooling savings for fan-wall installs.",
        href: docLink(
          "data-centers-brochure",
          "Data Centers — Brochure",
          "https://drive.google.com/file/d/1D5ligiRnYy_jVDY6DSUU9Txja1iVaQrn/view?usp=sharing"
        ),
      },
      {
        title: "Greenhouses & Grow Facilities – Brochure",
        blurb:
          "Captures spores and dust while preserving airflow—supporting yield and worker comfort.",
        href: docLink(
          "greenhouses-brochure",
          "Greenhouses & Grow Facilities — Brochure",
          "https://drive.google.com/file/d/13F_CG4D6Go7lxRFuMOtf_tkGDiSi8swj/view?usp=sharing"
        ),
      },
      {
        title: "Hospitals – Brochure",
        blurb: "Pathogen control for patient safety and clinical performance.",
        href: docLink(
          "hospitals-brochure",
          "Hospitals — Brochure",
          "https://drive.google.com/file/d/1V32IdzwDA9uEyxpqGe72TSfzTWnNkBpj/view?usp=sharing"
        ),
      },
      {
        title: "Commercial Buildings – Brochure",
        blurb: "ESG compliance and energy efficiency for modern portfolios.",
        requestInfo: true,
      },
    ],
  },
  {
    heading: "Technical Specifications",
    items: [
      { title: "HiboScreen – Data Centers: Technical Specs", requestInfo: true },
      { title: "HiboScreen – Greenhouses: Technical Specs", requestInfo: true },
      { title: "HiboScreen – Hospitals: Technical Specs", requestInfo: true },
      { title: "HiboScreen – Commercial Buildings: Technical Specs", requestInfo: true },
    ],
  },
  {
    heading: "Installation & Integration",
    items: [
      { title: "Retrofit Guide (Fan Walls & AHUs)", requestInfo: true },
      { title: "Sizing & Selection Notes", requestInfo: true },
    ],
  },
  {
    heading: "Certifications & Compliance",
    items: [
      { title: "CE, FCC, UKCA Certificates (bundle)", requestInfo: true },
      { title: "Material Safety & RoHS", requestInfo: true },
    ],
  },
  {
    heading: "Case Studies & Results",
    items: [
      { title: "Call Center Health & Absenteeism", requestInfo: true },
      { title: "Data Center Cooling Costs", requestInfo: true },
      { title: "Greenhouse Disease Pressure", requestInfo: true },
    ],
  },
  {
    heading: "Maintenance & Warranty",
    items: [
      { title: "Maintenance Intervals & Cleaning", requestInfo: true },
      { title: "Warranty Statement", requestInfo: true },
    ],
  },
];

export default function DownloadsPage() {
  const { openModal } = useInfoRequest();
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      {/* Page hero */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight">Downloads</h1>
        <p className="mt-3 text-lg text-muted-foreground">
          Specs, brochures, and reference docs for HiboScreen. Choose a resource below.
          Linked brochures open inside our on-site viewer with a download option; other items can be requested below.
        </p>
      </header>

      {/* Sections */}
      <div className="space-y-10">
        {sections.map((section) => {
          const isTechSpecs = section.heading === "Technical Specifications";
          const headingId = isTechSpecs ? "specs" : slug(section.heading);

          return (
            <section key={section.heading}>
              <h2
                id={headingId}
                className={`mb-4 text-2xl font-semibold${isTechSpecs ? " scroll-mt-28" : ""}`}
              >
                {section.heading}
              </h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {section.items.map((item, idx) => {
                  const linkLabel = item.title.toLowerCase().includes("brochure")
                    ? "Open brochure"
                    : "View document";

                  return (
                    <article
                      key={`${section.heading}-${idx}`}
                      className="rounded-2xl border bg-background p-5 shadow-sm transition hover:shadow"
                    >
                      <h3 className="text-base font-semibold">{item.title}</h3>
                      {item.blurb && (
                        <p className="mt-2 text-sm text-muted-foreground">{item.blurb}</p>
                      )}

                      <div className="mt-4">
                        {item.href ? (
                          <Link
                            to={item.href}
                            className={[
                              "inline-flex items-center rounded-lg bg-primary px-3 py-2 text-sm text-primary-foreground",
                              "hover:opacity-90",
                            ].join(" ")}
                          >
                            {linkLabel}
                          </Link>
                        ) : item.requestInfo ? (
                          <button
                            type="button"
                            onClick={openModal}
                            className="inline-flex items-center rounded-lg bg-primary px-3 py-2 text-sm text-primary-foreground hover:opacity-90"
                          >
                            Request More Info
                          </button>
                        ) : (
                          <button
                            disabled
                            title="Coming soon"
                            className="inline-flex cursor-not-allowed items-center rounded-lg bg-muted px-3 py-2 text-sm text-muted-foreground"
                          >
                            Coming soon
                          </button>
                        )}
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>
    </main>
  );
}
