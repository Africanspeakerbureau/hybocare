import React from "react";
import { Link } from "react-router-dom";

const slug = (s: string) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

type Item = {
  title: string;
  blurb?: string;
  href?: string; // open if present, else show "Coming soon"
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
        href: "https://drive.google.com/file/d/1Vpb7o5ujuCzPezfRWICpel5YV2a53cO2/view?usp=drivesdk",
      },
      {
        title: "Greenhouses & Grow Facilities – Brochure",
        blurb:
          "Captures spores and dust while preserving airflow—supporting yield and worker comfort.",
        href: "https://drive.google.com/file/d/1L6Z5SYMTqh-w-vUJ0pjwXJeOfEI4dqbB/view?usp=share_link",
      },
      {
        title: "Hospitals – Brochure",
        blurb: "Pathogen control for patient safety and clinical performance.",
      },
      {
        title: "Commercial Buildings – Brochure",
        blurb: "ESG compliance and energy efficiency for modern portfolios.",
      },
    ],
  },
  {
    heading: "Technical Specifications",
    items: [
      { title: "HiboScreen – Data Centers: Technical Specs – Coming soon" },
      { title: "HiboScreen – Greenhouses: Technical Specs – Coming soon" },
      { title: "HiboScreen – Hospitals: Technical Specs – Coming soon" },
      { title: "HiboScreen – Commercial Buildings: Technical Specs – Coming soon" },
    ],
  },
  {
    heading: "Installation & Integration",
    items: [
      { title: "Retrofit Guide (Fan Walls & AHUs) – Coming soon" },
      { title: "Sizing & Selection Notes – Coming soon" },
    ],
  },
  {
    heading: "Certifications & Compliance",
    items: [
      { title: "CE, FCC, UKCA Certificates (bundle) – Coming soon" },
      { title: "Material Safety & RoHS – Coming soon" },
    ],
  },
  {
    heading: "Case Studies & Results",
    items: [
      { title: "Call Center Health & Absenteeism – Coming soon" },
      { title: "Data Center Cooling Costs – Coming soon" },
      { title: "Greenhouse Disease Pressure – Coming soon" },
    ],
  },
  {
    heading: "Maintenance & Warranty",
    items: [
      { title: "Maintenance Intervals & Cleaning – Coming soon" },
      { title: "Warranty Statement – Coming soon" },
    ],
  },
];

export default function DownloadsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      {/* Page hero */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight">Downloads</h1>
        <p className="mt-3 text-lg text-muted-foreground">
          Specs, brochures, and reference docs for HiboScreen. Choose a resource below.
          Brochures with links open in a new tab; other items are coming soon.
        </p>
      </header>

      {/* Sections */}
      <div className="space-y-10">
        {sections.map((section) => {
          const id =
            section.heading.toLowerCase() === "technical specifications"
              ? "technical-specifications"
              : slug(section.heading);

          return (
            <section key={section.heading} id={id}>
              <h2 className="mb-4 text-2xl font-semibold">{section.heading}</h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {section.items.map((item, idx) => (
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
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center rounded-lg bg-primary px-3 py-2 text-sm text-primary-foreground hover:opacity-90"
                        >
                          Download PDF
                        </a>
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
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </main>
  );
}

