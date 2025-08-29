import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { 
  Zap, 
  Shield, 
  Wind, 
  Settings, 
  CheckCircle, 
  ArrowRight,
  Microscope,
  Atom,
  Activity,
  Target
} from 'lucide-react';
import productImage from '../assets/productshotH600.png';
import filterImage from '../assets/hibocare_filter_improved.png';

export default function Technology() {
  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <Badge className="bg-accent text-accent-foreground">Patented Innovation</Badge>
          <h1 className="text-4xl md:text-5xl font-bold">HiboScreen Technology</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the revolutionary electrostatic technology that makes HiboScreen 
            the most effective air purification solution for commercial HVAC systems.
          </p>
        </div>

        {/* How It Works */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">How HiboScreen Works</h2>
            <p className="text-lg text-muted-foreground">
              HiboScreen utilizes advanced electrostatic technology to create a powerful 4-6kV static charge 
              that neutralizes pathogens and enhances particle filtration without increasing pressure drop.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Electrostatic Field Generation</h3>
                  <p className="text-muted-foreground">
                    Micronized graphite coating creates a uniform electric field across the filter surface, 
                    generating a controlled 4-6kV static charge.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Corona Discharge Effect</h3>
                  <p className="text-muted-foreground">
                    The electric field creates corona discharge that deactivates viruses, bacteria, 
                    and fungi by disrupting their cellular structure and DNA/RNA.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Particle Agglomeration</h3>
                  <p className="text-muted-foreground">
                    Charged particles clump together, making them easier to capture by existing 
                    filters and dramatically improving filtration efficiency.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src={filterImage} 
              alt="HiboScreen Technology Visualization" 
              className="w-full max-w-lg mx-auto drop-shadow-xl rounded-lg"
            />
          </div>
        </div>

        {/* Scientific Validation */}
        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Scientific Validation</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Microscope className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Laboratory Tested</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Rigorous testing by independent laboratories including SGS and NIOH SA
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">H1N1 Virus</span>
                    <Badge variant="secondary">99.92%</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">MTB Bacteria</span>
                    <Badge variant="secondary">99.57%</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Candida Albicans</span>
                    <Badge variant="secondary">90.5%</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Activity className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Real-World Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Validated in actual installations across hospitals, data centers, and offices
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Energy Savings</span>
                    <Badge variant="secondary" className="bg-green-100 text-green-800">Up to 30%</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Pressure Drop</span>
                    <Badge variant="secondary">&lt;10 Pa</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Uptime</span>
                    <Badge variant="secondary">99.9%</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Safety Certified</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Comprehensive safety testing and global regulatory compliance
                </p>
                <div className="space-y-2">
                  <div className="flex items-center justify-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">CE Certified</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">FCC Approved</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Zero Ozone</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Technical Deep Dive */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Technical Deep Dive</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <Atom className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Electrostatic Mechanism</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  The micronized graphite coating creates a controlled electrostatic field that:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                    <span className="text-sm">Generates 4-6kV static charge uniformly</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                    <span className="text-sm">Creates corona discharge for pathogen deactivation</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                    <span className="text-sm">Charges particles for enhanced capture</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                    <span className="text-sm">Operates continuously with minimal power</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Target className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Pathogen Elimination</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Multiple mechanisms ensure comprehensive pathogen control:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                    <span className="text-sm">Disrupts viral protein structures</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                    <span className="text-sm">Damages bacterial cell walls</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                    <span className="text-sm">Destroys fungal spore viability</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                    <span className="text-sm">Prevents pathogen reproduction</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Comparison with Other Technologies */}
        <div className="bg-blue-50 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Technology Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="text-left p-4 border-b-2 border-blue-200">Technology</th>
                  <th className="text-center p-4 border-b-2 border-blue-200">Pathogen Kill</th>
                  <th className="text-center p-4 border-b-2 border-blue-200">Pressure Drop</th>
                  <th className="text-center p-4 border-b-2 border-blue-200">Energy Use</th>
                  <th className="text-center p-4 border-b-2 border-blue-200">Maintenance</th>
                  <th className="text-center p-4 border-b-2 border-blue-200">Byproducts</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-blue-100">
                  <td className="p-4 font-semibold">HiboScreen</td>
                  <td className="p-4 text-center text-green-600 font-semibold">99.92%</td>
                  <td className="p-4 text-center text-green-600 font-semibold">&lt;10 Pa</td>
                  <td className="p-4 text-center text-green-600 font-semibold">3W</td>
                  <td className="p-4 text-center text-green-600 font-semibold">Vacuum</td>
                  <td className="p-4 text-center text-green-600 font-semibold">None</td>
                </tr>
                <tr>
                  <td className="p-4">HEPA Filters</td>
                  <td className="p-4 text-center">95-99%</td>
                  <td className="p-4 text-center text-red-600">150-300 Pa</td>
                  <td className="p-4 text-center text-red-600">High fan power</td>
                  <td className="p-4 text-center text-orange-600">Replace</td>
                  <td className="p-4 text-center text-green-600">None</td>
                </tr>
                <tr>
                  <td className="p-4">UV-C Systems</td>
                  <td className="p-4 text-center">90-95%</td>
                  <td className="p-4 text-center text-green-600">0 Pa</td>
                  <td className="p-4 text-center text-orange-600">40-100W</td>
                  <td className="p-4 text-center text-red-600">Replace bulbs</td>
                  <td className="p-4 text-center text-red-600">Ozone</td>
                </tr>
                <tr>
                  <td className="p-4">Ionizers</td>
                  <td className="p-4 text-center">70-85%</td>
                  <td className="p-4 text-center text-green-600">0 Pa</td>
                  <td className="p-4 text-center text-orange-600">10-30W</td>
                  <td className="p-4 text-center text-orange-600">Clean plates</td>
                  <td className="p-4 text-center text-red-600">Ozone</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Product Specifications */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Technical Specifications</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <Zap className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-medium">Voltage</div>
                      <div className="text-sm text-muted-foreground">4-6kV DC</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <Settings className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-medium">Power Input</div>
                      <div className="text-sm text-muted-foreground">100-240V AC</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <Wind className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-medium">Air Velocity</div>
                      <div className="text-sm text-muted-foreground">0.5-5.0 m/s</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <Shield className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-medium">Safety</div>
                      <div className="text-sm text-muted-foreground">CE/FCC/UKCA</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="text-center">
            <img 
              src={productImage} 
              alt="HiboScreen Product" 
              className="w-full max-w-md mx-auto drop-shadow-xl rounded-lg"
            />
            <h3 className="text-lg font-semibold mt-4">HiboScreen H-Series</h3>
            <p className="text-sm text-muted-foreground">Advanced electrostatic air purification</p>
          </div>
        </div>

        {/* Research & Development */}
        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Ongoing Research & Development</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Microscope className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Advanced Materials</h3>
              <p className="text-sm text-muted-foreground">
                Developing next-generation coatings for enhanced performance and durability
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Settings className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Smart Controls</h3>
              <p className="text-sm text-muted-foreground">
                IoT integration for real-time monitoring and adaptive performance optimization
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">New Applications</h3>
              <p className="text-sm text-muted-foreground">
                Expanding technology to specialized environments and emerging contaminants
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center space-y-6">
          <h2 className="text-3xl font-bold">Experience the Technology</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See HiboScreen's revolutionary technology in action with a live demonstration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Schedule Technical Demo
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              Download White Paper
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

