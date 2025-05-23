import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-accent text-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Your Trusted Partner for Digital Solutions
              </h1>
              <p className="text-lg md:text-xl mb-6 opacity-90">
                We provide comprehensive digital services including government documentation,
                computer solutions, and digital marketing.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-white text-primary hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Get Started
              </Link>
            </div>

            <div className="w-full md:w-1/2 flex justify-center">
              <div className="relative w-full max-w-[500px] flex items-center justify-center">
                <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
                  <div className="relative w-[200px] h-[200px] md:w-[300px] md:h-[300px]">
                    <Image
                      src="/images/logo-cutted.png"
                      alt="Faijan Solution Logo"
                      fill
                      priority
                      className="object-contain"
                    />
                  </div>
                  <div className="relative w-[150px] h-[150px] md:w-[200px] md:h-[200px]">
                    <Image
                      src="/images/owner.jpg"
                      alt="Arif Hossain Dipu - Owner of Faijan Solution"
                      fill
                      className="object-cover rounded-full border-4 border-white shadow-xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Our Most Popular Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our highly-rated services that have consistently delivered exceptional results and customer satisfaction.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Web Development */}
            <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
              <div className="text-primary mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Web Development</h3>
              <p className="text-gray-600 mb-4">Custom websites and web applications</p>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Customer Satisfaction</span>
                  <span className="font-semibold">98%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full transition-all duration-500" style={{ width: '98%' }}></div>
                </div>
              </div>
            </div>

            {/* Digital Marketing */}
            <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
              <div className="text-primary mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Digital Marketing</h3>
              <p className="text-gray-600 mb-4">Social media and content marketing</p>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Customer Satisfaction</span>
                  <span className="font-semibold">95%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full transition-all duration-500" style={{ width: '95%' }}></div>
                </div>
              </div>
            </div>

            {/* Graphics Design */}
            <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
              <div className="text-primary mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Graphics Design</h3>
              <p className="text-gray-600 mb-4">Logo, banner, and marketing materials</p>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Customer Satisfaction</span>
                  <span className="font-semibold">96%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full transition-all duration-500" style={{ width: '96%' }}></div>
                </div>
              </div>
            </div>

            {/* SEO Optimization */}
            <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
              <div className="text-primary mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">SEO Optimization</h3>
              <p className="text-gray-600 mb-4">Search engine ranking improvement</p>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Customer Satisfaction</span>
                  <span className="font-semibold">94%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full transition-all duration-500" style={{ width: '94%' }}></div>
                </div>
              </div>
            </div>

            {/* NID Services */}
            <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
              <div className="text-primary mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">NID Services</h3>
              <p className="text-gray-600 mb-4">NID Registration & Correction</p>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Customer Satisfaction</span>
                  <span className="font-semibold">97%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full transition-all duration-500" style={{ width: '97%' }}></div>
                </div>
              </div>
            </div>

            {/* Passport Services */}
            <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
              <div className="text-primary mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Passport Services including Police Clearance</h3>
              <p className="text-gray-600 mb-4">Passport Application & Renewal</p>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Customer Satisfaction</span>
                  <span className="font-semibold">96%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full transition-all duration-500" style={{ width: '96%' }}></div>
                </div>
              </div>
            </div>

            {/* Computer Repair */}
            <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
              <div className="text-primary mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Computer Repair</h3>
              <p className="text-gray-600 mb-4">Desktop & Laptop Repair Services</p>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Customer Satisfaction</span>
                  <span className="font-semibold">95%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full transition-all duration-500" style={{ width: '95%' }}></div>
                </div>
              </div>
            </div>

            {/* E-Return Services */}
            <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
              <div className="text-primary mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">E-Return Services</h3>
              <p className="text-gray-600 mb-4">Income Tax Return Filing</p>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Customer Satisfaction</span>
                  <span className="font-semibold">97%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full transition-all duration-500" style={{ width: '97%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Government Services */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Government Services</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-2" />
                  NID Services
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-2" />
                  Passport Services
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-2" />
                  E-TIN & Birth Certificate
                </li>
              </ul>
              <Link 
                href="/services"
                className="mt-4 text-accent hover:text-accent/80 inline-block"
              >
                Learn More →
              </Link>
            </div>

            {/* Freelancing Services */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Freelancing Services</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-2" />
                  Web Development
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-2" />
                  Digital Marketing
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-2" />
                  Social Media Marketing
                </li>
              </ul>
              <Link 
                href="/services"
                className="mt-4 text-accent hover:text-accent/80 inline-block"
              >
                Learn More →
              </Link>
            </div>

            {/* Computer Services */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Computer Services</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-2" />
                  Computer Repair
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-2" />
                  Data Recovery
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-2" />
                  Software Installation
                </li>
              </ul>
              <Link 
                href="/services"
                className="mt-4 text-accent hover:text-accent/80 inline-block"
              >
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Our Shop Gallery</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Take a virtual tour of our modern facility and see where we make digital solutions happen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Featured Gallery Images */}
            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
              <Image
                src="/images/shop/shop-1.jpg"
                alt="Faijan Solution Shop Front"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
              <Image
                src="/images/shop/shop-2.jpg"
                alt="Computer Service Area"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
              <Image
                src="/images/shop/shop-5.jpg"
                alt="Customer Service Desk"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="text-center mt-8">
            <Link 
              href="/gallery"
              className="inline-flex items-center text-accent hover:text-accent/80 font-semibold"
            >
              View Full Gallery
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg mb-8">Contact us today to learn more about our services</p>
          <Link 
            href="/contact"
            className="bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-lg text-lg font-semibold inline-block transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  )
} 