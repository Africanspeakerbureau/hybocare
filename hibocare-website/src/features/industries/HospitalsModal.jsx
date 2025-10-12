import React from 'react';
import IndustryModal from './IndustryModal';
import { Heart, Shield, Volume2, Building2, CheckCircle } from 'lucide-react';
import { docLink } from '@/lib/docLink';

export default function HospitalsModal(props) {
  return (
    <IndustryModal
      icon={Heart}
      title="Hospitals"
      subtitle="Superior Pathogen Control for Patient Safety"
      overview="Healthcare facilities require low-resistance, high-efficiency filtration to reduce airborne transmission while preserving airflow and room pressurization. HiboScreen upgrades existing HVAC to remove pathogens across wards, OR support spaces, and clinics—quietly and efficiently."
      keyBenefits={[
        'Reduces airborne transmission in patient care spaces',
        'Low pressure drop preserves airflow & pressurization',
        'Improves indoor air quality for clinical performance',
        'Quiet operation enhances patient & staff comfort',
        'Supports infection prevention and ESG goals'
      ]}
      technicalSpecs={[
        { label: 'Pathogen Reduction', value: '> 99%', icon: Shield },
        { label: 'Noise Level', value: '< 35 dB', icon: Volume2 },
        { label: 'Coverage Area', value: 'Up to 1000 m²', icon: Building2 },
        { label: 'Maintenance', value: 'Every 2–3 months', icon: CheckCircle }
      ]}
      caseStudy="A regional hospital recorded 22% fewer respiratory-related staff sick days after installing HiboScreen in ward corridors and waiting areas."
      applications={[
        'Patient rooms & wards',
        'Emergency & triage areas',
        'Outpatient clinics',
        'Pharmacies & support areas',
        'Waiting areas and lobbies'
      ]}
      downloadLink={docLink(
        'hospitals-brochure',
        'Hospitals — Brochure',
        'https://drive.google.com/file/d/1V32IdzwDA9uEyxpqGe72TSfzTWnNkBpj/view?usp=sharing'
      )}
      downloadTitle="Hospitals — Brochure"
      {...props}
    />
  );
}

