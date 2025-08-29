import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { 
  Building2, 
  Heart, 
  Users, 
  Server,
  CheckCircle,
  ArrowRight,
  Thermometer,
  Shield,
  Zap,
  DollarSign
} from 'lucide-react';

const applicationData = {
  'data-centers': {
    icon: Server,
    title: 'Data Centers',
    subtitle: 'Mission-Critical Air Quality for IT Infrastructure',
    description: 'Data centers require precise environmental control to maintain optimal performance and prevent equipment failure. HiboScreen provides superior air purification while maintaining the low pressure drop essential for fan wall installations.',
    keyBenefits: [
      'Minimal pressure drop (<10 Pa) ideal for fan wall systems',
      'Prevents dust accumulation on sensitive equipment',
      'Reduces cooling load through improved heat exchange efficiency',
      'Eliminates biological contaminants that can cause corrosion',
      'Energy savings up to 30% through cleaner HVAC coils'
    ],
    technicalSpecs: [
      { label: 'Pressure Drop', value: '<10 Pa', icon: Zap },
      { label: 'Power Consumption', value: '3W per unit', icon: DollarSign },
      { label: 'Filtration Efficiency', value: 'MERV8 to MERV16', icon: Shield },
      { label: 'Operating Temperature', value: '-10°C to +60°C', icon: Thermometer }
    ],
    caseStudy: 'A major cloud provider reduced their cooling costs by 25% after installing HiboScreen in their primary data center, while achieving 99.9% uptime.',
    applications: [
      'Server rooms and data halls',
      'Network operation centers',
      'Telecommunications facilities',
      'Cloud computing centers',
      'Edge computing locations'
    ]
  },
  'hospitals': {
    icon: Heart,
    title: 'Hospitals & Healthcare',
    subtitle: 'Advanced Infection Control for Patient Safety',
    description: 'Healthcare facilities demand the highest standards of air quality to protect patients, staff, and visitors. HiboScreen provides hospital-grade pathogen elimination while supporting energy efficiency goals.',
    keyBenefits: [
      'Eliminates 99.92% of viral pathogens including H1N1',
      'Destroys 99.57% of bacteria including MTB',
      'Reduces 90.5% of fungi and mould spores',
      'Zero ozone production - safe for continuous operation',
      'Supports infection prevention protocols'
    ],
    technicalSpecs: [
      { label: 'Viral Elimination', value: '99.92%', icon: Shield },
      { label: 'Bacterial Reduction', value: '99.57%', icon: Shield },
      { label: 'Fungi/Mould', value: '90.5%', icon: Shield },
      { label: 'Ozone Production', value: '0 ppm', icon: CheckCircle }
    ],
    caseStudy: "A hospital observed an average 5x boost in air filtration performance across all particle sizes (PM10, PM2.5, PM1.0) and eliminated musty smells after HiboScreen installation, even with an old HVAC system.",
    longTermFindings: [
      "Average 5x boost in air filtration performance across particles of all sizes (PM10, PM2.5, PM1.0)",
      "3x improvement in average PM10 inside the ER (4.9x extrapolated for both AHUs)",
      "3.1x improvement in average PM2.5 inside the ER (5.3x extrapolated for both AHUs)",
      "3x improvement in average PM1.0 inside the ER (5.0x extrapolated for both AHUs)",
      ">90% air filtration performance against all particle sizes on days with high pollution (e.g., wildfires)",
      "Elimination of musty smells and immediate perceived improvement in air quality"
    ],
    downloadLink: 
      { label: "Download Full Case Study (PPTX)", url: "/assets/HospitalERIAQ-LongTermFindings15Feb2025.pptx" }
  },
  'call-centers': {
    icon: Users,
    title: 'Call Centers & Offices',
    subtitle: 'Healthier Workspaces for Enhanced Productivity',
    description: 'Call centers and office environments with high occupancy density require effective air quality management to maintain employee health, reduce absenteeism, and boost productivity.',
    keyBenefits: [
      'Reduces airborne transmission of illnesses',
      'Improves indoor air quality for better cognitive function',
      'Decreases sick leave and absenteeism',
      'Creates a more comfortable work environment',
      'Supports corporate wellness initiatives'
    ],
    technicalSpecs: [
      { label: 'Pathogen Reduction', value: '>99%', icon: Shield },
      { label: 'Noise Level', value: '<35 dB', icon: Users },
      { label: 'Coverage Area', value: 'Up to 1000 m²', icon: Building2 },
      { label: 'Maintenance', value: 'Every 2-3 months', icon: CheckCircle }
    ],
    caseStudy: 'A 1,200-seat call center reported 35% reduction in sick days and 15% improvement in employee satisfaction scores after implementing HiboScreen.',
    applications: [
      'Open office environments',
      'Call center floors',
      'Meeting and conference rooms',
      'Reception and waiting areas',
      'Training facilities'
    ]
  },
  'commercial-buildings': {
    icon: Building2,
    title: 'Commercial Buildings',
    subtitle: 'ESG Compliance and Energy Efficiency',
    description: 'Modern commercial buildings need to balance occupant health, energy efficiency, and environmental responsibility. HiboScreen helps achieve ESG goals while reducing operational costs.',
    keyBenefits: [
      'Supports LEED and BREEAM certification',
      'Reduces carbon footprint through energy savings',
      'Improves tenant satisfaction and retention',
      'Enhances building value and marketability',
      'Meets corporate sustainability targets'
    ],
    technicalSpecs: [
      { label: 'Energy Savings', value: 'Up to 30%', icon: DollarSign },
      { label: 'Lifespan', value: '2 years', icon: CheckCircle },
      { label: 'Installation', value: 'Retrofit compatible', icon: Zap },
      { label: 'Certifications', value: 'CE, FCC, UKCA', icon: Shield }
    ],
    caseStudy: 'A 50-story office tower achieved LEED Platinum certification and reduced annual energy costs by $180,000 through HiboScreen implementation.',
    applications: [
      'Office towers and complexes',
      'Retail and shopping centers',
      'Hotels and hospitality',
      'Educational institutions',
      'Mixed-use developments'
    ]
  }
};

export default function ApplicationDetails({ applicationKey, onClose }) {
  const data = applicationData[applicationKey];
  
  if (!data) return null;

  const IconComponent = data.icon;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                <IconComponent className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">{data.title}</h2>
                <p className="text-muted-foreground">{data.subtitle}</p>
              </div>
            </div>
            <Button variant="ghost" onClick={onClose} className="text-gray-500 hover:text-gray-700">
              ✕
            </Button>
          </div>

          {/* Description */}
          <div className="mb-8">
            <p className="text-lg text-muted-foreground leading-relaxed">
              {data.description}
            </p>
          </div>

          {/* Key Benefits */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Key Benefits</h3>
            <div className="grid gap-3">
              {data.keyBenefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Specifications */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Technical Specifications</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {data.technicalSpecs.map((spec, index) => {
                const SpecIcon = spec.icon;
                return (
                  <Card key={index}>
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-3">
                        <SpecIcon className="h-5 w-5 text-primary" />
                        <div>
                          <div className="font-medium">{spec.label}</div>
                          <div className="text-sm text-muted-foreground">{spec.value}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Case Study */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Success Story</h3>
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-6">
                <p className="text-muted-foreground italic">"{data.caseStudy}"</p>
              </CardContent>
            </Card>
          </div>

          {data.longTermFindings && (
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Long-Term Findings</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                {data.longTermFindings.map((finding, index) => (
                  <li key={index}>{finding}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Applications */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Typical Applications</h3>
            <div className="grid md:grid-cols-2 gap-2">
              {data.applications.map((application, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">{application}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-primary hover:bg-primary/90">
              Request Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline">
              Download Technical Specs
            </Button>
            {data.downloadLink && (
              <Button variant="outline" asChild>
                <a href={data.downloadLink.url} target="_blank" rel="noopener noreferrer">
                  {data.downloadLink.label}
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

