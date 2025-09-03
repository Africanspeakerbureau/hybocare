import React from 'react';
import IndustryModal from './IndustryModal';
import { Building2, Zap, DollarSign, Shield, Thermometer } from 'lucide-react';

export default function DataCentersModal(props) {
  return (
    <IndustryModal
      icon={Building2}
      title="Data Centers"
      subtitle="Mission-Critical Air Quality for IT Infrastructure"
      overview="Data centers require precise environmental control to maintain optimal performance and prevent equipment failure. HiboScreen provides superior air purification while maintaining the low pressure drop essential for fan wall installations."
      keyBenefits={[
        'Minimal pressure drop (<10 Pa) ideal for fan wall systems',
        'Prevents dust accumulation on sensitive equipment',
        'Reduces cooling load through improved heat exchange efficiency',
        'Eliminates biological contaminants that can cause corrosion',
        'Energy savings up to 30% through cleaner HVAC coils'
      ]}
      technicalSpecs={[
        { label: 'Pressure Drop', value: '<10 Pa', icon: Zap },
        { label: 'Power Consumption', value: '3W per unit', icon: DollarSign },
        { label: 'Filtration Efficiency', value: 'MERV8 to MERV16', icon: Shield },
        { label: 'Operating Temperature', value: '-10°C to +60°C', icon: Thermometer }
      ]}
      caseStudy="A major cloud provider reduced their cooling costs by 25% after installing HiboScreen in their primary data center, while achieving 99.9% uptime."
      applications={[
        'Server rooms and data halls',
        'Network operation centers',
        'Telecommunications facilities',
        'Cloud computing centers',
        'Edge computing locations'
      ]}
      downloadLink="https://drive.google.com/file/d/1Vpb7o5ujuCzPezfRWICpel5YV2a53cO2/view?usp=sharing"
      {...props}
    />
  );
}

