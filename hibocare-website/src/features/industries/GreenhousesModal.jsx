import React from 'react';
import IndustryModal from './IndustryModal';
import { Cannabis, Zap, DollarSign, Building2, CheckCircle } from 'lucide-react';

export default function GreenhousesModal(props) {
  return (
    <IndustryModal
      icon={Cannabis}
      title="Grow Facilities & Greenhouses"
      subtitle="Clean Air for Higher Yields and Healthier Crops"
      overview="Grow environments demand high air turnover and strict biosecurity. HiboScreen captures airborne spores, pollen, mold and dust while keeping pressure low so fans maintain airflow and climate set-points. The result: reduced disease pressure, improved worker comfort, and more consistent yields."
      keyBenefits={[
        'Captures mold spores, pollen & bioaerosols that threaten crop health',
        'Low pressure drop preserves airflow and temperature/humidity control',
        'Reduces cross-contamination between zones',
        'Minimizes dust buildup on coils and equipment',
        'Quiet operation that supports worker comfort and sanitation schedules'
      ]}
      technicalSpecs={[
        { label: 'Pressure Drop', value: '< 10 Pa', icon: Zap },
        { label: 'Power Consumption', value: '3 W per unit', icon: DollarSign },
        { label: 'Coverage Area', value: 'Up to 1000 m²', icon: Building2 },
        { label: 'Maintenance', value: 'Every 2–3 months', icon: CheckCircle }
      ]}
      caseStudy="A 20,000-m² greenhouse lowered powdery mildew incidence by 28% and cut HVAC cleaning hours by 40% after deploying HiboScreen."
      applications={[
        'Vegetable & fruit greenhouses',
        'Cannabis grow rooms',
        'Propagation & cloning areas',
        'Post-harvest processing/packing',
        'Research growth chambers'
      ]}
      downloadLink="https://drive.google.com/file/d/1L6Z5SYMTqh-w-vUJ0pjwXJeOfEI4dqbB/view?usp=sharing"
      downloadTitle="Greenhouses & Grow Facilities – Brochure"
      {...props}
    />
  );
}

