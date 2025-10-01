import React, { useState } from 'react';
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
  User
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
      email: 'lessmiedt@mac.com',
      phone: '+1 (805) 300 0966',
      tel: '+18053000966'
    },
    {
      name: 'Andy Herbst',
      email: 'andyagave@yahoo.com',
      phone: '+1 (209) 222-1122',
      tel: '+12092221122'
    },
    {
      name: 'Christian Herbst',
      email: 'cherbst73@gmail.com',
      phone: '+1 (209) 262-0289',
      tel: '+12092620289'
    },
    {
      name: 'Sean Herbst',
      email: 'rongz.oner@gmail.com',
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

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <Wind className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-primary">HiboScreen</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            to="/features"
            className={`text-sm font-medium hover:text-primary transition-colors ${
              location.pathname === '/features' ? 'text-primary' : ''
            }`}
          >
            Features
          </Link>
          <Link 
            to="/benefits" 
            className={`text-sm font-medium hover:text-primary transition-colors ${
              location.pathname === '/benefits' ? 'text-primary' : ''
            }`}
          >
            Benefits
          </Link>
          <Link
            to="/technology"
            className={`text-sm font-medium hover:text-primary transition-colors ${
              location.pathname === '/technology' ? 'text-primary' : ''
            }`}
          >
            Technology
          </Link>
          <Link
            to="/downloads"
            className={`text-sm font-medium hover:text-primary transition-colors ${
              location.pathname === '/downloads' ? 'text-primary' : ''
            }`}
          >
            Downloads
          </Link>
          <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Contact</a>
        </nav>
        <button
          onClick={openModal}
          className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          Request More Info
        </button>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Wind className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">HiboScreen</span>
            </div>
            <p className="text-gray-400 text-sm">
              Clean Air, Green Buildings, Healthy Spaces
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Products</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">HiboScreen H-Series</a></li>
              <li><a href="#" className="hover:text-white transition-colors">HiboScreen V10</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Custom Solutions</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Installation Guide</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Maintenance</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Technical Support</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Certifications</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2025 HiboScreen. All rights reserved.</p>
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

