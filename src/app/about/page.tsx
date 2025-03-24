import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-accent text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
          <p className="text-xl max-w-2xl">
            Learn about our journey and commitment to providing exceptional digital services.
          </p>
        </div>
      </section>

      {/* Owner Profile Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {/* Logo and Owner Photo */}
              <div className="flex items-center justify-center space-x-8">
                <div className="relative w-[300px] h-[300px]">
                  <Image
                    src="/images/logo-cutted.png"
                    alt="Faijan Solution Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="relative w-[200px] h-[200px]">
                  <Image
                    src="/images/owner.jpg"
                    alt="Arif Hossain Dipu - Owner of Faijan Solution"
                    fill
                    className="object-cover rounded-full border-4 border-white shadow-xl"
                  />
                </div>
              </div>
            </div>

            {/* Owner Details */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-2">Meet Our Owner</h2>
                <h3 className="text-2xl font-semibold text-gray-700">Arif Hossain Dipu</h3>
                <p className="text-accent font-medium">Founder & CEO</p>
              </div>

              <div className="prose prose-lg text-gray-600">
                <p>
                  With years of experience in digital services and a passion for technology,
                  I founded Faijan Solution with a vision to make digital services accessible
                  to everyone in our community.
                </p>
                <p>
                  Our journey began with a simple goal: to provide reliable and efficient
                  digital solutions to both individuals and businesses. Today, we're proud
                  to offer a comprehensive range of services from government documentation
                  to cutting-edge digital marketing solutions.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-primary">Contact Information</h4>
                <div className="space-y-2">
                  <p className="flex items-center text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <a href="tel:01880856099" className="hover:text-accent">01880856099</a>
                  </p>
                  <p className="flex items-center text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href="mailto:dipubdit@gmail.com" className="hover:text-accent">dipubdit@gmail.com</a>
                  </p>
                  <p className="flex items-center text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Opposite of Kadamtoli Police Station, 357 Rayerbagh, Dhaka-1362, Bangladesh
                  </p>
                </div>

                <div className="pt-4">
                  <a
                    href="https://www.facebook.com/faijansolutions"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-accent hover:text-accent/80"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                    </svg>
                    Follow us on Facebook
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-accent mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Trust & Reliability</h3>
              <p className="text-gray-600">We build long-lasting relationships with our clients through transparent and reliable service.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-accent mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast & Efficient</h3>
              <p className="text-gray-600">We value your time and deliver quick, efficient solutions without compromising quality.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-accent mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Professional Service</h3>
              <p className="text-gray-600">Our experienced team ensures professional and courteous service for all your needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">Ready to Work Together?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Let's discuss how we can help you with your digital service needs.
          </p>
          <Link 
            href="/contact"
            className="bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-lg text-lg font-semibold inline-block transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
} 