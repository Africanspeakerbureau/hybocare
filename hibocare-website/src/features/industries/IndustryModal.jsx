import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { useInfoRequest } from '../info-request/InfoRequestContext';

export default function IndustryModal(props) {
  const {
    icon,
    title,
    subtitle,
    overview,
    keyBenefits,
    technicalSpecs,
    caseStudy,
    applications,
    onClose,
    downloadLink,
    downloadTitle,
  } = props;
  const IconComponent = icon;
  const viewerLink = downloadLink ?? null;
  const { openModal } = useInfoRequest();
  const linkLabel = downloadTitle?.toLowerCase().includes('brochure')
    ? 'Open brochure'
    : 'Download Technical Specs';
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          aria-label="Close"
        >
          ✕
        </button>
        <div className="p-6">
          <div className="flex items-start justify-between gap-4 flex-col sm:flex-row mb-6">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                <IconComponent className="h-8 w-8 text-primary" />
              </div>
              <div className="space-y-1">
                <h2 className="text-2xl font-bold">{title}</h2>
                <p className="text-muted-foreground">{subtitle}</p>
              </div>
            </div>
            <div className="inline-flex gap-2">
              <Button className="bg-primary hover:bg-primary/90" asChild>
                <a href="#contact">
                  Request Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              {viewerLink ? (
                <Button variant="outline" asChild>
                  <Link to={viewerLink}>
                    {linkLabel}
                  </Link>
                </Button>
              ) : (
                <Button variant="outline" onClick={openModal} type="button">
                  Request More Info
                </Button>
              )}
            </div>
          </div>

          <div className="mb-8">
            <p className="text-lg text-muted-foreground leading-relaxed">{overview}</p>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Key Benefits</h3>
            <div className="grid gap-3">
              {keyBenefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Technical Specifications</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {technicalSpecs.map((spec, index) => {
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

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Success Story</h3>
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-6">
                <p className="text-muted-foreground italic">"{caseStudy}"</p>
              </CardContent>
            </Card>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Typical Applications</h3>
            <div className="grid md:grid-cols-2 gap-2">
              {applications.map((application, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">{application}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
