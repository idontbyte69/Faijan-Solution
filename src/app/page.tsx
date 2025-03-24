import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-accent text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="max-w-xl mb-8 md:mb-0">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Welcome to Faijan Solution
              </h1>
              <p className="text-xl mb-8">
                Your trusted partner for all online and digital services. We provide comprehensive solutions for government services, freelancing, and computer repairs.
              </p>
              <Link 
                href="/contact"
                className="bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-lg text-lg font-semibold inline-block transition-colors"
              >
                Get Started
              </Link>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="relative w-[600px] h-[600px]">
                <Image
                  src="/images/logo-cutted.png"
                  alt="Faijan Solution Logo"
                  fill
                  priority
                  className="object-contain"
                />
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