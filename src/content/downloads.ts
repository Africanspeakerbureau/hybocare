export type DownloadItem = {
  id: string;
  title: string;
  description: string;
  industry: 'data-centers' | 'hospitals' | 'greenhouses' | 'commercial' | 'all';
  type: 'brochure' | 'specs' | 'installation' | 'certifications' | 'case-study' | 'maintenance';
  href?: string;          // if missing → “Coming soon”
  updated?: string;       // e.g., '2025-08-01'
  size?: string;          // e.g., 'PDF • 2.1 MB'
};
export const downloads: DownloadItem[] = [
  {
    id: 'brochure-dc',
    title: 'Data Centers – Brochure',
    description: 'Cleaner coils, lower pressure drop, and up to 30% cooling savings for fan-wall installs.',
    industry: 'data-centers',
    type: 'brochure',
    href: 'https://drive.google.com/file/d/1Vpb7o5ujuCzPezfRWICpel5YV2a53cO2/view?usp=drivesdk',
    updated: '2025-08-01',
    size: 'PDF'
  },
  {
    id: 'brochure-greenhouses',
    title: 'Greenhouses & Grow Facilities – Brochure',
    description: 'Captures spores and dust while preserving airflow—supporting yield and worker comfort.',
    industry: 'greenhouses',
    type: 'brochure',
    href: 'https://drive.google.com/file/d/1L6Z5SYMTqh-w-vUJ0pjwXJeOfEI4dqbB/view?usp=share_link',
    updated: '2025-08-01',
    size: 'PDF'
  },
  { id: 'brochure-hospitals', title: 'Hospitals – Brochure', description: 'Pathogen control for patient safety and clinical performance.', industry: 'hospitals', type: 'brochure' },
  { id: 'brochure-commercial', title: 'Commercial Buildings – Brochure', description: 'ESG compliance and energy efficiency for modern portfolios.', industry: 'commercial', type: 'brochure' },

  // specs
  { id: 'specs-dc', title: 'HiboScreen – Data Centers: Technical Specs', description: 'Pressure drop, power, coverage, service intervals.', industry: 'data-centers', type: 'specs' },
  { id: 'specs-greenhouses', title: 'HiboScreen – Greenhouses: Technical Specs', description: 'Parameters for controlled grow environments.', industry: 'greenhouses', type: 'specs' },
  { id: 'specs-hospitals', title: 'HiboScreen – Hospitals: Technical Specs', description: 'For clinical/ward spaces.', industry: 'hospitals', type: 'specs' },
  { id: 'specs-commercial', title: 'HiboScreen – Commercial Buildings: Technical Specs', description: 'Portfolio-wide deployment details.', industry: 'commercial', type: 'specs' },

  // installation
  { id: 'install-retrofit', title: 'Retrofit Guide (Fan Walls & AHUs)', description: 'Step-by-step retrofit guidance.', industry: 'all', type: 'installation' },
  { id: 'install-sizing', title: 'Sizing & Selection Notes', description: 'Selection notes for mechanical teams.', industry: 'all', type: 'installation' },

  // certifications
  { id: 'cert-bundle', title: 'CE, FCC, UKCA Certificates (bundle)', description: 'Compliance documentation for approvals and audits.', industry: 'all', type: 'certifications' },
  { id: 'cert-rohs', title: 'Material Safety & RoHS', description: 'Material and restriction compliance.', industry: 'all', type: 'certifications' },

  // case studies
  { id: 'cs-callcenter', title: 'Call Center Health & Absenteeism', description: 'Reduced sick days and improved staff satisfaction.', industry: 'commercial', type: 'case-study' },
  { id: 'cs-dc-cooling', title: 'Data Center Cooling Costs', description: 'Lowered cooling costs and improved uptime.', industry: 'data-centers', type: 'case-study' },
  { id: 'cs-greenhouse', title: 'Greenhouse Disease Pressure', description: 'Lower mildew incidence and cleaning hours.', industry: 'greenhouses', type: 'case-study' },

  // maintenance
  { id: 'maint-intervals', title: 'Maintenance Intervals & Cleaning', description: 'Recommended service intervals and procedures.', industry: 'all', type: 'maintenance' },
  { id: 'warranty', title: 'Warranty Statement', description: 'Coverage terms and conditions.', industry: 'all', type: 'maintenance' }
];
