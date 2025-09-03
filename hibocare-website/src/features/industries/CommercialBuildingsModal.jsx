import React from 'react';
import IndustryModal from './IndustryModal';
import { Building2, DollarSign, CheckCircle, Zap, Shield } from 'lucide-react';

export default function CommercialBuildingsModal(props) {
  return (
    <IndustryModal
      icon={Building2}
      title="Commercial Buildings"
      subtitle="ESG Compliance and Energy Efficiency"
      overview="Modern commercial buildings need to balance occupant health, energy efficiency, and environmental responsibility. HiboScreen helps achieve ESG goals while reducing operational costs."
      keyBenefits={[
        'Supports LEED and BREEAM certification',
        'Reduces carbon footprint through energy savings',
        'Improves tenant satisfaction and retention',
        'Enhances building value and marketability',
        'Meets corporate sustainability targets'
      ]}
      technicalSpecs={[
        { label: 'Energy Savings', value: 'Up to 30%', icon: DollarSign },
        { label: 'Lifespan', value: '2 years', icon: CheckCircle },
        { label: 'Installation', value: 'Retrofit compatible', icon: Zap },
        { label: 'Certifications', value: 'CE, FCC, UKCA', icon: Shield }
      ]}
      caseStudy="A 50-story office tower achieved LEED Platinum certification and reduced annual energy costs by $180,000 through HiboScreen implementation."
      applications={[
        'Office towers and complexes',
        'Retail and shopping centers',
        'Hotels and hospitality',
        'Educational institutions',
        'Mixed-use developments'
      ]}
      {...props}
    />
  );
}

