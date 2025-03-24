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
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
            <div className="flex flex-col items-center">
              {/* Images Container */}
              <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 mb-8">
                <div className="relative w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[250px] md:h-[250px]">
                  <Image
                    src="/images/logo-cutted.png"
                    alt="Faijan Solution Logo"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
                <div className="relative w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] md:w-[180px] md:h-[180px]">
                  <Image
                    src="/images/owner.jpg"
                    alt="Arif Hossain Dipu - Owner of Faijan Solution"
                    fill
                    className="object-cover rounded-full border-4 border-white shadow-xl"
                  />
                </div>
              </div>

              {/* Owner Details */}
              <div className="text-center max-w-2xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">Arif Hossain Dipu</h2>
                <p className="text-accent font-semibold mb-4">Founder & CEO</p>
                <p className="text-gray-600 mb-6">
                  With over 16 years of experience in digital services and technology solutions, 
                  I am committed to providing the highest quality services to our clients. 
                  My vision is to make digital services accessible and hassle-free for everyone.
                </p>

                {/* Contact Information */}
                <div className="space-y-3">
                  <div className="flex items-center justify-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>+880 188-08-56099</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>dipubdit@gmail.com</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>cs0001362@gmail.com</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>Dhaka, Bangladesh</span>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex justify-center gap-4 mt-6">
                  <a href="https://www.facebook.com/faijansolutions" className="text-primary hover:text-accent transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a href="https://linkedin.com/company/faijan-solutions" className="text-primary hover:text-accent transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
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