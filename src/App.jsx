import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import ScrollHandler from "@/components/ScrollHandler";
import './App.css';
import { Button } from './components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { Badge } from './components/ui/badge';
import Features from './components/Features';
import Benefits from './components/Benefits';
import Technology from './components/Technology';
import DownloadsPage from './pages/Downloads';
import DocViewerPage from './pages/DocViewer';
import DataCentersModal from './features/industries/DataCentersModal';
import HospitalsModal from './features/industries/HospitalsModal';
import GreenhousesModal from './features/industries/GreenhousesModal';
import CommercialBuildingsModal from './features/industries/CommercialBuildingsModal';
import { InfoRequestProvider, useInfoRequest } from "./features/info-request/InfoRequestContext";
import InfoRequestModal from "./features/info-request/InfoRequestModal";
import Logo from "./components/Logo";
import {
  Wind,
  DollarSign,
  Shield,
  Zap,
  Building2,
  Heart,
  Leaf,
  CheckCircle,
  ArrowRight,
  Star,
  Cannabis,
  TrendingDown,
  Award,
  Phone,
  Mail,
  MapPin,
  User,
  Linkedin,
  Youtube,
  Globe,
  Menu,
  X
} from 'lucide-react';
import filterImage from './assets/hibocare_filter_creative.png';
import productImage from './assets/productshotH600.png';

function HeroCTA() {
  const { openModal } = useInfoRequest();
  return (
    <Button size="lg" className="bg-primary hover:bg-primary/90" onClick={openModal}>
      Request More Info
      <ArrowRight className="ml-2 h-4 w-4" />
    </Button>
  );
}

function HomePage() {
  const [selectedApplication, setSelectedApplication] = useState(null);
  const contacts = [
    {
      name: 'Leslie Smiedt',
      email: 'les@hiboair.com',
      phone: '+1 (805) 300 0966',
      tel: '+18053000966'
    },
    {
      name: 'Andy Herbst',
      email: 'andy@hiboair.com',
      phone: '+1 (209) 222-1122',
      tel: '+12092221122'
    },
    {
      name: 'Christian Herbst',
      email: 'christian@hiboair.com',
      phone: '+1 (209) 262-0289',
      tel: '+12092620289'
    },
    {
      name: 'Sean Herbst',
      email: 'sean@hiboair.com',
      phone: '+1 (442) 822-5125',
      tel: '+14428225125'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-green-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-accent text-accent-foreground">Revolutionary Air Purification</Badge>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-none">
                  <div className="relative">
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800 mb-2 transform hover:scale-105 transition-transform duration-300">
                      CLEANS AIR
                    </span>
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-700 mb-2 transform hover:scale-105 transition-transform duration-300">
                      SAVES MONEY
                    </span>
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-violet-700 transform hover:scale-105 transition-transform duration-300">
                      PROTECTS HEALTH
                    </span>
                  </div>
                </h1>
                <p className="text-xl text-muted-foreground max-w-lg">
                  HiboScreen transforms your HVAC system into a powerful air purification solution. 
                  Eliminate 99.92% of airborne pathogens while reducing energy costs by up to 30%.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <HeroCTA />
                <Button asChild variant="secondary" size="lg">
                  <Link to="/downloads#specs">View Technical Specifications</Link>
                </Button>
              </div>
              <div className="flex items-center space-x-8 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>CE Certified</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Zero Ozone</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>2-Year Warranty</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-100/50 to-green-100/50 rounded-3xl blur-3xl"></div>
              <div className="relative floating-animation">
                <img
                  src={filterImage}
                  alt="HiboScreen Filter with Airflow Transformation"
                  className="w-full max-w-lg mx-auto drop-shadow-2xl rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section id="benefits" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Why Choose HiboScreen?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The only air purification solution that delivers superior air quality while reducing operational costs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Clean Air */}
            <Card className="feature-card border-2 border-blue-200 bg-blue-50/50">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <Wind className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-blue-900">Cleans Air</CardTitle>
                <CardDescription>Superior pathogen elimination and particle filtration</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Viral Pathogens</span>
                    <Badge variant="secondary">99.92%</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Bacteria</span>
                    <Badge variant="secondary">99.57%</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Fungi/Mould</span>
                    <Badge variant="secondary">90.5%</Badge>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Boosts MERV8 filters to MERV16 performance without pressure drop
                </p>
              </CardContent>
            </Card>

            {/* Save Money */}
            <Card className="feature-card border-2 border-green-200 bg-green-50/50">
              <CardHeader>
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                  <DollarSign className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-green-900">Saves Money</CardTitle>
                <CardDescription>Significant energy and maintenance cost reductions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Energy Reduction</span>
                    <Badge variant="secondary" className="bg-green-100 text-green-800">Up to 30%</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Power Consumption</span>
                    <Badge variant="secondary" className="bg-green-100 text-green-800">Only 3W</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Pressure Drop</span>
                    <Badge variant="secondary" className="bg-green-100 text-green-800">&lt;10 Pa</Badge>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Prevents coil fouling, extending HVAC equipment lifespan
                </p>
              </CardContent>
            </Card>

            {/* Easy Installation */}
            <Card className="feature-card border-2 border-purple-200 bg-purple-50/50">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-purple-900">Easy Installation</CardTitle>
                <CardDescription>Simple retrofit into existing HVAC systems</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Fits like standard filter</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Custom sizes available</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Minimal maintenance</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  2-year lifespan with simple vacuum cleaning every 2-3 months
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Target Applications */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">The Essential Upgrade for Your Building's HVAC</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Trusted by facilities managers and engineers in mission-critical environments
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Building2, title: "Data Centers", desc: "Optimal for fan wall installations with minimal pressure drop", key: "data-centers" },
              { icon: Heart, title: "Hospitals", desc: "Superior pathogen control for patient safety", key: "hospitals" },
              { icon: Cannabis, title: "Grow Facilities & Greenhouses", desc: "Cleaner air for higher yields and healthier crops", key: "greenhouses" },
              { icon: Building2, title: "Commercial Buildings", desc: "ESG compliance and energy efficiency", key: "commercial-buildings" }
            ].map((item, index) => (
              <Card
                key={index}
                className="feature-card text-center hover:shadow-lg transition-all duration-300"
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                  <div className="mt-4">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setSelectedApplication(item.key)}
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-3 w-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <Badge className="bg-accent text-accent-foreground">Patented Technology</Badge>
                <h2 className="text-3xl md:text-4xl font-bold">How HiboScreen Works</h2>
                <p className="text-lg text-muted-foreground">
                  Our electrostatic technology creates a 4-6kV static charge that neutralizes pathogens 
                  and charges particles for enhanced filtration efficiency.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Electrostatic Charging</h3>
                    <p className="text-sm text-muted-foreground">
                      Micronized graphite coating creates uniform electric field
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Pathogen Neutralization</h3>
                    <p className="text-sm text-muted-foreground">
                      Corona discharge deactivates viruses, bacteria, and fungi
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Enhanced Filtration</h3>
                    <p className="text-sm text-muted-foreground">
                      Charged particles clump together for better capture by existing filters
                    </p>
                  </div>
                </div>
              </div>
              
              <Link to="/downloads#specs">
                <Button className="bg-primary hover:bg-primary/90">
                  View Technical Specifications
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            
            <div className="relative">
              <img 
                src={productImage} 
                alt="HiboScreen Product" 
                className="w-full max-w-lg mx-auto drop-shadow-xl rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Validation & Certifications */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Proven Performance</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Extensively tested and certified for safety and efficacy
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { icon: Award, title: "CE Certified", desc: "European safety compliance" },
              { icon: Shield, title: "FCC Approved", desc: "US electromagnetic compatibility" },
              { icon: Leaf, title: "Zero Ozone", desc: "Environmentally safe operation" },
              { icon: Star, title: "ISO Validated", desc: "Laboratory performance verified" }
            ].map((item, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">99.92%</div>
                <div className="text-sm text-muted-foreground">Viral pathogen elimination</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">30%</div>
                <div className="text-sm text-muted-foreground">Energy cost reduction</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">2 Years</div>
                <div className="text-sm text-muted-foreground">Product lifespan</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Transform Your Air Quality?
            </h2>
            <p className="text-xl opacity-90">
              Join leading organizations worldwide who trust HiboScreen for cleaner air and lower costs. Get in touch—speak with our technical experts about your specific requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="sr-only">Get in Touch</h2>
          <p className="sr-only">Speak with our technical experts about your specific requirements</p>
          <div className="mt-8 grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
            {contacts.map((contact) => (
              <Card key={contact.email} className="text-center">
                <CardHeader className="space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                    <User className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{contact.name}</CardTitle>
                  <CardDescription className="flex flex-col gap-2 text-muted-foreground">
                    <a
                      href={`mailto:${contact.email}`}
                      className="flex items-center justify-center gap-2 hover:text-primary transition-colors"
                    >
                      <Mail className="h-4 w-4" />
                      <span>{contact.email}</span>
                    </a>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <a
                    href={`tel:${contact.tel}`}
                    className="flex items-center justify-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Phone className="h-4 w-4" />
                    <span>{contact.phone}</span>
                  </a>
                </CardContent>
              </Card>
            ))}

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Office</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Global Headquarters</p>
                <p className="text-sm text-muted-foreground mt-2">Multiple locations worldwide</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Application Details Modal */}
      {selectedApplication === 'data-centers' && (
        <DataCentersModal onClose={() => setSelectedApplication(null)} />
      )}
      {selectedApplication === 'hospitals' && (
        <HospitalsModal onClose={() => setSelectedApplication(null)} />
      )}
      {selectedApplication === 'greenhouses' && (
        <GreenhousesModal onClose={() => setSelectedApplication(null)} />
      )}
      {selectedApplication === 'commercial-buildings' && (
        <CommercialBuildingsModal onClose={() => setSelectedApplication(null)} />
      )}
    </>
  );
}

function Header() {
  const location = useLocation();
  const { openModal } = useInfoRequest();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { to: '/features', label: 'Features' },
    { to: '/benefits', label: 'Benefits' },
    { to: '/technology', label: 'Technology' },
    { to: '/downloads', label: 'Downloads' },
  ];

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === path;
    }

    return location.pathname.startsWith(path);
  };

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-50 shadow-sm">
      <div className="bg-gradient-to-r from-sky-900 via-blue-800 to-blue-600 text-blue-100">
        <div className="container flex flex-col gap-2 py-2 text-[0.7rem] sm:flex-row sm:items-center sm:justify-between sm:text-xs">
          <p className="flex items-center gap-2 font-semibold uppercase tracking-[0.2em] text-white">
            <Wind className="h-3.5 w-3.5 text-blue-100" />
            Indoor Air Innovation
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
            <a
              href="tel:+18053000966"
              className="flex items-center gap-1.5 text-white/80 transition-colors hover:text-white"
            >
              <Phone className="h-3.5 w-3.5" />
              +1 (805) 300-0966
            </a>
            <span className="hidden h-3 w-px bg-white/30 sm:block" aria-hidden="true" />
            <a
              href="mailto:info@hiboair.com"
              className="flex items-center gap-1.5 text-white/80 transition-colors hover:text-white"
            >
              <Mail className="h-3.5 w-3.5" />
              info@hiboair.com
            </a>
          </div>
        </div>
      </div>
      <div className="border-b border-slate-200 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-20 items-center justify-between gap-4">
          <Link to="/" className="flex items-center" aria-label="HiBoAir home">
            <Logo showTagline={false} size="sm" />
          </Link>
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-semibold transition-colors ${
                  isActive(link.to) ? 'text-blue-700' : 'text-slate-600 hover:text-blue-700'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a href="#contact" className="text-sm font-semibold text-slate-600 transition-colors hover:text-blue-700">
              Contact
            </a>
          </nav>
          <div className="flex items-center gap-2 md:gap-3">
            <Link
              to="/downloads#specs"
              className="hidden text-sm font-semibold text-blue-700 underline-offset-4 transition-colors hover:text-blue-900 md:inline-flex"
            >
              Product Specs
            </Link>
            <Button
              size="lg"
              className="hidden bg-blue-600 text-white shadow-lg shadow-blue-600/30 hover:bg-blue-700 md:inline-flex"
              onClick={openModal}
            >
              Talk to an Expert
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-blue-100 text-blue-700 transition hover:bg-blue-50 md:hidden"
              aria-label="Toggle navigation menu"
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((prev) => !prev)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 md:hidden">
          <nav className="container flex flex-col gap-4 py-6">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-base font-semibold transition-colors ${
                  isActive(link.to) ? 'text-blue-700' : 'text-slate-600 hover:text-blue-700'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="#contact"
              className="text-base font-semibold text-slate-600 transition-colors hover:text-blue-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <Link
              to="/downloads#specs"
              className="text-base font-semibold text-blue-700 underline-offset-4 hover:text-blue-900"
              onClick={() => setIsMenuOpen(false)}
            >
              Product Specs
            </Link>
            <Button
              size="lg"
              className="bg-blue-600 text-white shadow-lg shadow-blue-600/30 hover:bg-blue-700"
              onClick={() => {
                openModal();
                setIsMenuOpen(false);
              }}
            >
              Talk to an Expert
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}

function Footer() {
  const currentYear = new Date().getFullYear();
  const solutionLinks = [
    { label: 'HiboScreen H-Series', href: '#' },
    { label: 'HiboScreen V10', href: '#' },
    { label: 'Enterprise Monitoring', href: '#' },
  ];
  const resourceLinks = [
    { label: 'Installation Guides', href: '#' },
    { label: 'Maintenance & Service', href: '#' },
    { label: 'Certifications', href: '#' },
  ];
  const companyLinks = [
    { label: 'About HiBoAir', href: '#' },
    { label: 'Case Studies', href: '#' },
    { label: 'Partners', href: '#' },
  ];

  return (
    <footer className="bg-slate-950 text-slate-200">
      <div className="bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950">
        <div className="container grid gap-12 px-4 py-16 md:grid-cols-2 lg:grid-cols-[2fr_repeat(3,minmax(0,1fr))]">
          <div className="space-y-6">
            <Logo variant="dark" />
            <p className="max-w-md text-sm text-slate-300">
              HiBoAir engineers cleaner, healthier indoor environments with intelligent filtration that integrates seamlessly
              with existing HVAC infrastructure.
            </p>
            <div className="flex flex-col gap-3 text-sm text-slate-300">
              <a href="tel:+18053000966" className="flex items-center gap-2 transition-colors hover:text-white">
                <Phone className="h-4 w-4" />
                +1 (805) 300-0966
              </a>
              <a href="mailto:info@hiboair.com" className="flex items-center gap-2 transition-colors hover:text-white">
                <Mail className="h-4 w-4" />
                info@hiboair.com
              </a>
              <span className="flex items-center gap-2 text-slate-400">
                <MapPin className="h-4 w-4" />
                Global operations with regional partners
              </span>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-200">Solutions</h3>
            <ul className="space-y-3 text-sm text-slate-300">
              {solutionLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="transition-colors hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-200">Resources</h3>
            <ul className="space-y-3 text-sm text-slate-300">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="transition-colors hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-200">Company</h3>
            <ul className="space-y-3 text-sm text-slate-300">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="transition-colors hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="pt-4">
              <h4 className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-200">Connect</h4>
              <p className="mt-3 text-sm text-slate-300">Follow our progress and product announcements.</p>
              <div className="mt-4 flex gap-3">
                <a
                  href="https://www.linkedin.com/company/hiboair"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:-translate-y-0.5 hover:bg-white/10"
                  aria-label="HiBoAir on LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:-translate-y-0.5 hover:bg-white/10"
                  aria-label="HiBoAir on YouTube"
                >
                  <Youtube className="h-4 w-4" />
                </a>
                <a
                  href="https://www.hiboair.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:-translate-y-0.5 hover:bg-white/10"
                  aria-label="Visit HiBoAir website"
                >
                  <Globe className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container flex flex-col gap-4 px-4 py-6 text-xs text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>© {currentYear} HiBoAir. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            <a href="#privacy" className="transition-colors hover:text-white">
              Privacy Policy
            </a>
            <a href="#terms" className="transition-colors hover:text-white">
              Terms of Service
            </a>
            <a href="#cookies" className="transition-colors hover:text-white">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <Router>
      <ScrollHandler />
      <div className="min-h-screen bg-background">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/features" element={<Features />} />
          <Route path="/benefits" element={<Benefits />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/downloads" element={<DownloadsPage />} />
          <Route path="/docs/:slug" element={<DocViewerPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default function AppRoot() {
  return (
    <InfoRequestProvider>
      <App />
      <InfoRequestModal />
    </InfoRequestProvider>
  );
}

