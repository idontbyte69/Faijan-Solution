import { DocumentCheckIcon, ComputerDesktopIcon, GlobeAltIcon } from '@heroicons/react/24/outline';

const services = [
  {
    title: 'Government Services',
    icon: DocumentCheckIcon,
    items: [
      'NID Correction & Registration',
      'Passport Services',
      'Police Clearance',
      'E-Tin Certificate',
      'E-Return Filing',
      'Birth Certificate',
      'Online Job Application',
      'Visa Application'
    ]
  },
  {
    title: 'Freelancing Services',
    icon: GlobeAltIcon,
    items: [
      'Website Design & Development',
      'Digital Marketing',
      'Facebook Page Boosting',
      'Facebook Marketing',
      'YouTube Marketing'
    ]
  },
  {
    title: 'Computer Services',
    icon: ComputerDesktopIcon,
    items: [
      'Desktop Computer Repair',
      'Laptop Repair',
      'Windows Installation',
      'Data Recovery',
      'Virus Removal',
      'Software Installation'
    ]
  }
];

export default function Services() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-accent text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl max-w-2xl">
            We provide comprehensive digital solutions to help your business grow and succeed in the digital world.
          </p>
        </div>
      </section>

      {/* Customer Satisfaction Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Customer Satisfaction Metrics</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our commitment to excellence is reflected in our consistently high customer satisfaction rates across all services.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {/* Web Development */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold">Web Development</h3>
                    <p className="text-gray-600">Custom websites and web applications</p>
                  </div>
                </div>
                <span className="text-3xl font-bold text-primary">98%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div 
                  className="bg-primary h-3 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: '98%' }}
                ></div>
              </div>
            </div>

            {/* Digital Marketing */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold">Digital Marketing</h3>
                    <p className="text-gray-600">Social media and content marketing</p>
                  </div>
                </div>
                <span className="text-3xl font-bold text-primary">95%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div 
                  className="bg-primary h-3 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: '95%' }}
                ></div>
              </div>
            </div>

            {/* Graphics Design */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold">Graphics Design</h3>
                    <p className="text-gray-600">Logo, banner, and marketing materials</p>
                  </div>
                </div>
                <span className="text-3xl font-bold text-primary">96%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div 
                  className="bg-primary h-3 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: '96%' }}
                ></div>
              </div>
            </div>

            {/* SEO Optimization */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold">SEO Optimization</h3>
                    <p className="text-gray-600">Search engine ranking improvement</p>
                  </div>
                </div>
                <span className="text-3xl font-bold text-primary">94%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div 
                  className="bg-primary h-3 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: '94%' }}
                ></div>
              </div>
            </div>

            {/* NID Services */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold">NID Services</h3>
                    <p className="text-gray-600">NID Registration & Correction</p>
                  </div>
                </div>
                <span className="text-3xl font-bold text-primary">97%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div 
                  className="bg-primary h-3 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: '97%' }}
                ></div>
              </div>
            </div>

            {/* Passport Services */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold">Passport Services including Police Clearance</h3>
                    <p className="text-gray-600">Passport Application & Renewal</p>
                  </div>
                </div>
                <span className="text-3xl font-bold text-primary">96%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div 
                  className="bg-primary h-3 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: '96%' }}
                ></div>
              </div>
            </div>

            {/* Computer Repair */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold">Computer Repair</h3>
                    <p className="text-gray-600">Desktop & Laptop Repair Services</p>
                  </div>
                </div>
                <span className="text-3xl font-bold text-primary">95%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div 
                  className="bg-primary h-3 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: '95%' }}
                ></div>
              </div>
            </div>

            {/* E-Return Services */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold">E-Return Services</h3>
                    <p className="text-gray-600">Income Tax Return Filing</p>
                  </div>
                </div>
                <span className="text-3xl font-bold text-primary">97%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div 
                  className="bg-primary h-3 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: '97%' }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">Our Service Details</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <service.icon className="h-8 w-8 text-accent mr-3" />
                  <h2 className="text-xl font-semibold">{service.title}</h2>
                </div>
                <ul className="space-y-2">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-accent rounded-full mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Additional Services */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-primary mb-6">Additional Services</h2>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Photocopy & Print Services</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-accent rounded-full mr-2" />
                  High-quality photocopying
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-accent rounded-full mr-2" />
                  Color and black & white printing
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-accent rounded-full mr-2" />
                  Document scanning
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 