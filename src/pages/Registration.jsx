import { Calendar, CreditCard, FileText, AlertTriangle, Shield, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

const importantDates = [
  { date: '5th Feb 2026', event: 'Trials Start Date', color: 'bg-green-500' },
  { date: '10th Feb 2026', event: 'Trials End Date', color: 'bg-blue-500' },
  { date: '11th Feb 2026', event: 'Provisional Merit List Released', color: 'bg-purple-500' },
  { date: '13th Feb 2026', event: 'Final Squad & Fee Payment Deadline', color: 'bg-red-500', strict: true },
  { date: '20-21 Feb 2026', event: 'UDAAN Sports Fest', color: 'bg-yellow-500' }
];

const requiredDocuments = [
  'Original College ID Card (No ID, No Trial)',
  'Proper Sports Kit (Shoes/Lower/T-shirt)',
  'Own equipment (Racket/Bat) if preferred'
];

export default function Registration() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 md:py-20 bg-gradient-to-br from-teal-600 to-cyan-700 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 animate-fade-in-up">
              Selection & Registration
            </h1>
            <p className="text-sm sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto animate-fade-in-up delay-200 px-4">
              Safety, Discipline & Protest Protocol
            </p>
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-10 sm:py-12 md:py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-900 dark:text-white text-center mb-8 sm:mb-12 animate-fade-in-up">Important Dates</h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-5 sm:left-8 top-0 bottom-0 w-0.5 bg-blue-200 dark:bg-gray-700" />
              
              {/* Timeline Items */}
              <div className="space-y-4 sm:space-y-6">
                {importantDates.map((item, index) => (
                  <div key={index} className={`relative flex items-start gap-3 sm:gap-6 animate-fade-in-up delay-${(index + 1) * 100}`}>
                    <div className={`w-10 sm:w-14 md:w-16 h-10 sm:h-14 md:h-16 rounded-full ${item.color} flex items-center justify-center flex-shrink-0 z-10 shadow-lg`}>
                      <Calendar className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 text-white" />
                    </div>
                    <Card className={`flex-1 border-0 shadow-md hover:shadow-lg transition-shadow dark:bg-gray-800 ${item.strict ? 'ring-2 ring-red-400' : ''}`}>
                      <CardContent className="p-3 sm:p-4">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                          <div>
                            <p className="font-bold text-blue-900 dark:text-white text-sm sm:text-base">{item.date}</p>
                            <p className="text-muted-foreground text-xs sm:text-sm">{item.event}</p>
                          </div>
                          {item.strict && <Badge variant="destructive" className="w-fit text-[10px] sm:text-xs">STRICT</Badge>}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="h-1 bg-gradient-to-r from-blue-500 via-red-500 to-blue-500 dark:from-blue-600 dark:via-red-600 dark:to-blue-600" />

      {/* Fee Policy */}
      <section className="py-10 sm:py-12 md:py-16 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-900 dark:text-white text-center mb-3 sm:mb-4 animate-fade-in-up">Registration Fee Policy</h2>
          <p className="text-center text-muted-foreground text-sm sm:text-base mb-8 sm:mb-12">"Pay-After-Selection" Model</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-900/20 animate-fade-in-up dark:bg-gray-800">
              <CardHeader className="p-4 sm:p-6">
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-green-500 rounded-lg sm:rounded-xl flex items-center justify-center mb-2">
                  <CheckCircle className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                </div>
                <CardTitle className="text-green-700 dark:text-green-400 text-base sm:text-lg">Trial Entry</CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0">
                <p className="text-2xl sm:text-3xl md:text-4xl font-black text-green-600 dark:text-green-400 mb-2">FREE</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Anyone can come and give trials</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-900/20 animate-fade-in-up delay-100 dark:bg-gray-800">
              <CardHeader className="p-4 sm:p-6">
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-blue-500 rounded-lg sm:rounded-xl flex items-center justify-center mb-2">
                  <CreditCard className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                </div>
                <CardTitle className="text-blue-700 dark:text-blue-400 text-base sm:text-lg">Selection Fee</CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0">
                <p className="text-2xl sm:text-3xl md:text-4xl font-black text-blue-600 dark:text-blue-400 mb-2">₹200</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Only for selected students (Event ID + Refreshments + Logistics)</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/30 dark:to-red-900/20 animate-fade-in-up delay-200 sm:col-span-2 md:col-span-1 dark:bg-gray-800">
              <CardHeader className="p-4 sm:p-6">
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-red-500 rounded-lg sm:rounded-xl flex items-center justify-center mb-2">
                  <AlertTriangle className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                </div>
                <CardTitle className="text-red-700 dark:text-red-400 text-base sm:text-lg">Refund Policy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-bold text-red-600 dark:text-red-400 mb-2">Non-Refundable</p>
                <p className="text-sm text-muted-foreground">If removed due to disciplinary issues</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <hr className="border-blue-100 dark:border-gray-700 max-w-md mx-auto my-8" />

      {/* Registration Workflow */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-blue-900 dark:text-white text-center mb-12">Registration Workflow</h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {[
                { step: 1, title: 'Appear for Free Trials', desc: 'Feb 5–10, 2026' },
                { step: 2, title: 'Provisional Merit List Released', desc: 'Feb 11, 2026' },
                { step: 3, title: 'Pay ₹200 Selection Fee', desc: 'To College Sports Representative by Feb 13' },
                { step: 4, title: 'Final Squad Submission', desc: 'Paid & Confirmed list to Central Committee' }
              ].map((item) => (
                <Card key={item.step} className="border-0 shadow-md dark:bg-gray-800">
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-lg">{item.step}</span>
                    </div>
                    <div>
                      <p className="font-bold text-blue-900 dark:text-white">{item.title}</p>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <Card className="mt-6 border-0 shadow-md bg-yellow-50 dark:bg-yellow-900/20 dark:border dark:border-yellow-800">
              <CardContent className="p-4">
                <p className="text-sm text-yellow-800 dark:text-yellow-300">
                  <strong>Note:</strong> If a selected student fails to pay by Feb 13, their spot will be given to the next player on the Waiting List.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <div className="h-1 bg-gradient-to-r from-blue-500 via-red-500 to-blue-500 dark:from-blue-600 dark:via-red-600 dark:to-blue-600" />

      {/* Required Documents */}
      <section className="py-16 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-blue-900 dark:text-white text-center mb-12">Mandatory Documents for Trials</h2>
          
          <div className="max-w-2xl mx-auto">
            <Card className="border-0 shadow-lg dark:bg-gray-800">
              <CardContent className="p-6">
                <div className="space-y-4">
                  {requiredDocuments.map((doc, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                      <FileText className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      <span className="font-medium text-blue-900 dark:text-white">{doc}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Zero Tolerance Policy */}
      <section className="py-16 bg-gradient-to-br from-red-600 to-red-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Shield className="w-16 h-16 mx-auto mb-4" />
            <h2 className="text-3xl font-bold">The "Zero Tolerance" Policy</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'ID Cards', desc: 'No ID, No Play. Mandatory for every student.' },
              { title: 'Fighting', desc: 'Any physical altercation = Immediate team disqualification.' },
              { title: 'Protest System', desc: 'Written Letter + ₹500 Fee within 15 mins. Valid = Refunded.' },
              { title: 'Medical', desc: 'Ambulance at UIT Gate 1. First Aid at every scorer\'s table.' }
            ].map((item, i) => (
              <Card key={i} className="bg-white/10 dark:bg-gray-700/50 backdrop-blur-sm border-0">
                <CardContent className="p-6">
                  <h3 className="font-bold text-yellow-400 mb-2">{item.title}</h3>
                  <p className="text-sm text-red-100 dark:text-gray-300">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <Card className="mt-8 bg-white/10 dark:bg-gray-700/50 backdrop-blur-sm border-0 max-w-2xl mx-auto">
            <CardContent className="p-6 text-center">
              <p className="text-red-100 dark:text-gray-300">
                <strong className="text-yellow-400">Important:</strong> Referee's decision on facts (out/not out) is final. 
                Protest is only for technical errors.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
