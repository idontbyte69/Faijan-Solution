import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
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