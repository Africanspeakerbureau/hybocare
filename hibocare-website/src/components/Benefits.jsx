import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { 
  DollarSign, 
  Heart, 
  Leaf, 
  Shield, 
  TrendingUp, 
  Users, 
  Building2,
  CheckCircle, 
  ArrowRight,
  Clock,
  Award,
  Zap
} from 'lucide-react';

export default function Benefits() {
  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <Badge className="bg-accent text-accent-foreground">Comprehensive Benefits</Badge>
          <h1 className="text-4xl md:text-5xl font-bold">Why Choose HiboScreen?</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the wide-ranging benefits that make HiboScreen the smart choice for 
            modern buildings seeking superior air quality and operational efficiency.
          </p>
        </div>

        {/* Primary Benefits */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Health Benefits */}
          <Card className="feature-card border-2 border-red-200 bg-red-50/50">
            <CardHeader>
              <div className="w-16 h-16 bg-red-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-red-900 text-center">Health & Wellness</CardTitle>
              <CardDescription className="text-center">Protecting occupant health through superior air quality</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm">Reduces respiratory illnesses</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm">Eliminates airborne pathogens</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm">Improves cognitive function</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm">Reduces allergy symptoms</span>
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 mt-4">
                <div className="text-2xl font-bold text-red-600 mb-1">99.92%</div>
                <div className="text-sm text-muted-foreground">Viral pathogen elimination</div>
              </div>
            </CardContent>
          </Card>

          {/* Financial Benefits */}
          <Card className="feature-card border-2 border-green-200 bg-green-50/50">
            <CardHeader>
              <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-green-900 text-center">Financial Savings</CardTitle>
              <CardDescription className="text-center">Significant cost reductions across multiple areas</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm">Lower energy bills</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm">Reduced maintenance costs</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm">Extended equipment life</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm">Decreased absenteeism</span>
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 mt-4">
                <div className="text-2xl font-bold text-green-600 mb-1">Up to 30%</div>
                <div className="text-sm text-muted-foreground">Energy cost reduction</div>
              </div>
            </CardContent>
          </Card>

          {/* Environmental Benefits */}
          <Card className="feature-card border-2 border-teal-200 bg-teal-50/50">
            <CardHeader>
              <div className="w-16 h-16 bg-teal-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Leaf className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-teal-900 text-center">Environmental Impact</CardTitle>
              <CardDescription className="text-center">Supporting sustainability and ESG objectives</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm">Reduced carbon footprint</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm">LEED certification support</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm">Zero harmful emissions</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm">Sustainable operation</span>
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 mt-4">
                <div className="text-2xl font-bold text-teal-600 mb-1">0 ppm</div>
                <div className="text-sm text-muted-foreground">Ozone production</div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Operational Benefits */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Operational Advantages</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader>
                <Zap className="h-12 w-12 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Easy Installation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Retrofit into existing HVAC systems without structural modifications
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Clock className="h-12 w-12 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Low Maintenance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Simple vacuum cleaning every 2-3 months maintains peak performance
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Shield className="h-12 w-12 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Proven Reliability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  2-year lifespan with consistent performance throughout
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Award className="h-12 w-12 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Global Compliance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  CE, FCC, and UKCA certifications for worldwide deployment
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Business Benefits */}
        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Business Impact</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <TrendingUp className="h-6 w-6 text-primary mr-2" />
                Productivity Gains
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                  <span className="text-sm">Improved employee health reduces sick days</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                  <span className="text-sm">Better air quality enhances cognitive performance</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                  <span className="text-sm">Comfortable environment boosts morale</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                  <span className="text-sm">Reduced allergens improve focus</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Building2 className="h-6 w-6 text-primary mr-2" />
                Property Value
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                  <span className="text-sm">Enhanced building marketability</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                  <span className="text-sm">Higher tenant satisfaction and retention</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                  <span className="text-sm">Premium positioning in the market</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                  <span className="text-sm">Future-proofing against regulations</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* ROI Calculator */}
        <div className="bg-primary text-primary-foreground rounded-lg p-8 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Return on Investment</h2>
            <p className="text-xl opacity-90">
              See how HiboScreen pays for itself through energy savings and health benefits
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">6-18</div>
              <div className="text-lg opacity-90">Months typical payback period</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">$15,000</div>
              <div className="text-lg opacity-90">Average annual savings per 1000m²</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">300%</div>
              <div className="text-lg opacity-90">ROI over 2-year lifespan</div>
            </div>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">HiboScreen vs Traditional Solutions</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-4 text-left">Feature</th>
                  <th className="border border-gray-300 p-4 text-center">HiboScreen</th>
                  <th className="border border-gray-300 p-4 text-center">HEPA Filters</th>
                  <th className="border border-gray-300 p-4 text-center">UV-C Systems</th>
                  <th className="border border-gray-300 p-4 text-center">Ionizers</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-4 font-medium">Pathogen Elimination</td>
                  <td className="border border-gray-300 p-4 text-center text-green-600">99.92%</td>
                  <td className="border border-gray-300 p-4 text-center">95-99%</td>
                  <td className="border border-gray-300 p-4 text-center">90-95%</td>
                  <td className="border border-gray-300 p-4 text-center">70-85%</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-4 font-medium">Pressure Drop</td>
                  <td className="border border-gray-300 p-4 text-center text-green-600">&lt;10 Pa</td>
                  <td className="border border-gray-300 p-4 text-center">150-300 Pa</td>
                  <td className="border border-gray-300 p-4 text-center">0 Pa</td>
                  <td className="border border-gray-300 p-4 text-center">0 Pa</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-medium">Energy Consumption</td>
                  <td className="border border-gray-300 p-4 text-center text-green-600">3W</td>
                  <td className="border border-gray-300 p-4 text-center">High fan power</td>
                  <td className="border border-gray-300 p-4 text-center">40-100W</td>
                  <td className="border border-gray-300 p-4 text-center">10-30W</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-4 font-medium">Maintenance</td>
                  <td className="border border-gray-300 p-4 text-center text-green-600">Vacuum clean</td>
                  <td className="border border-gray-300 p-4 text-center">Replace filters</td>
                  <td className="border border-gray-300 p-4 text-center">Replace bulbs</td>
                  <td className="border border-gray-300 p-4 text-center">Clean plates</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-medium">Harmful Byproducts</td>
                  <td className="border border-gray-300 p-4 text-center text-green-600">None</td>
                  <td className="border border-gray-300 p-4 text-center">None</td>
                  <td className="border border-gray-300 p-4 text-center">Ozone</td>
                  <td className="border border-gray-300 p-4 text-center">Ozone</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center space-y-6">
          <h2 className="text-3xl font-bold">Experience These Benefits Today</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of satisfied customers who have transformed their buildings with HiboScreen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Calculate Your Savings
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              View Case Studies
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

