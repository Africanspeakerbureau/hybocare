import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { 
  Wind, 
  DollarSign, 
  Shield, 
  Zap, 
  CheckCircle, 
  ArrowRight,
  Thermometer,
  Clock,
  Settings,
  Award,
  Leaf,
  Users
} from 'lucide-react';
import productImage from '../assets/productshotH600.png';
import heroFiltersImage from '../assets/hero_filters_original.jpeg';

export default function Features() {
  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <Badge className="bg-accent text-accent-foreground">Complete Feature Overview</Badge>
          <h1 className="text-4xl md:text-5xl font-bold">HiboScreen Features</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the comprehensive capabilities that make HiboScreen the most advanced 
            air purification solution for commercial HVAC systems.
          </p>
        </div>

        {/* Core Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Air Purification */}
          <Card className="feature-card border-2 border-blue-200 bg-blue-50/50">
            <CardHeader>
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Wind className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-blue-900">Advanced Air Purification</CardTitle>
              <CardDescription>Electrostatic technology for superior pathogen elimination</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Viral Pathogens (H1N1)</span>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800">99.92%</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Bacteria (MTB)</span>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800">99.57%</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Fungi/Mould</span>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800">90.5%</Badge>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Transforms MERV8 filters to MERV16 performance without pressure drop increase
              </p>
            </CardContent>
          </Card>

          {/* Energy Efficiency */}
          <Card className="feature-card border-2 border-green-200 bg-green-50/50">
            <CardHeader>
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                <DollarSign className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-green-900">Energy Efficiency</CardTitle>
              <CardDescription>Significant cost savings through optimized HVAC performance</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
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
                Prevents coil fouling, maintaining peak HVAC efficiency and extending equipment life
              </p>
            </CardContent>
          </Card>

          {/* Easy Installation */}
          <Card className="feature-card border-2 border-purple-200 bg-purple-50/50">
            <CardHeader>
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-purple-900">Simple Installation</CardTitle>
              <CardDescription>Retrofit-friendly design for existing HVAC systems</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm">Installs like a standard filter</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm">Custom sizes available</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm">No structural modifications</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Professional installation typically completed in under 2 hours
              </p>
            </CardContent>
          </Card>

          {/* Safety & Compliance */}
          <Card className="feature-card border-2 border-red-200 bg-red-50/50">
            <CardHeader>
              <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-red-900">Safety & Compliance</CardTitle>
              <CardDescription>Comprehensive certifications for global deployment</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Award className="h-4 w-4 text-green-600" />
                  <span className="text-sm">CE Certified (Europe)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="h-4 w-4 text-green-600" />
                  <span className="text-sm">FCC Approved (USA)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="h-4 w-4 text-green-600" />
                  <span className="text-sm">UKCA Compliant (UK)</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Zero ozone production ensures safe continuous operation
              </p>
            </CardContent>
          </Card>

          {/* Low Maintenance */}
          <Card className="feature-card border-2 border-orange-200 bg-orange-50/50">
            <CardHeader>
              <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-4">
                <Settings className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-orange-900">Low Maintenance</CardTitle>
              <CardDescription>Minimal upkeep for maximum performance</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Service Interval</span>
                  <Badge variant="secondary" className="bg-orange-100 text-orange-800">2-3 months</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Product Lifespan</span>
                  <Badge variant="secondary" className="bg-orange-100 text-orange-800">2 years</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Maintenance Type</span>
                  <Badge variant="secondary" className="bg-orange-100 text-orange-800">Vacuum clean</Badge>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Simple vacuum cleaning maintains optimal performance
              </p>
            </CardContent>
          </Card>

          {/* Environmental Impact */}
          <Card className="feature-card border-2 border-teal-200 bg-teal-50/50">
            <CardHeader>
              <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center mb-4">
                <Leaf className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-teal-900">Environmental Impact</CardTitle>
              <CardDescription>Supporting sustainability and ESG goals</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm">Reduces carbon footprint</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm">Supports LEED certification</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm">No harmful byproducts</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Contributes to green building standards and corporate sustainability
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Technical Specifications */}
        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Technical Specifications</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <Thermometer className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="font-semibold">Operating Temperature</div>
              <div className="text-sm text-muted-foreground">-10°C to +60°C</div>
            </div>
            <div className="text-center">
              <Zap className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="font-semibold">Voltage Range</div>
              <div className="text-sm text-muted-foreground">100-240V AC</div>
            </div>
            <div className="text-center">
              <Wind className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="font-semibold">Air Velocity</div>
              <div className="text-sm text-muted-foreground">0.5-5.0 m/s</div>
            </div>
            <div className="text-center">
              <Users className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="font-semibold">Noise Level</div>
              <div className="text-sm text-muted-foreground">&lt;35 dB</div>
            </div>
          </div>
        </div>

        {/* Product Images */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="text-center">
            <img 
              src={productImage} 
              alt="HiboScreen Product" 
              className="w-full max-w-md mx-auto rounded-lg shadow-lg mb-4"
            />
            <h3 className="text-lg font-semibold">HiboScreen H-Series</h3>
            <p className="text-sm text-muted-foreground">Individual filter unit</p>
          </div>
          <div className="text-center">
            <img 
              src={heroFiltersImage} 
              alt="HiboScreen Installation" 
              className="w-full max-w-md mx-auto rounded-lg shadow-lg mb-4"
            />
            <h3 className="text-lg font-semibold">Installation Example</h3>
            <p className="text-sm text-muted-foreground">Multiple units in HVAC system</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center space-y-6">
          <h2 className="text-3xl font-bold">Ready to Experience These Features?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Contact our technical team to learn how HiboScreen can transform your building's air quality and efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Request Technical Demo
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              Download Specifications
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

