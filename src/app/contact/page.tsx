'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Contact() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-accent text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl max-w-2xl">
            Get in touch with us for any inquiries about our services. We're here to help!
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Owner Info */}
            <div className="space-y-6">
              <div className="flex items-start space-x-6">
                <div className="relative w-32 h-32 flex-shrink-0">
                  <Image
                    src="/images/owner.jpg"
                    alt="Arif Hossain Dipu - Owner of Faijan Solution"
                    fill
                    className="object-cover rounded-lg shadow-lg"
                  />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold mb-2">Meet Our CEO</h2>
                  <h3 className="text-xl font-medium text-primary mb-2">Arif Hossain Dipu</h3>
                  <p className="text-gray-600">
                    With years of experience in digital services, I'm committed to providing the best solutions for all your needs.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-lg mb-2">Contact Details</h3>
                  <p className="text-gray-600">
                    <a href="tel:01880856099" className="hover:text-accent">
                      Cell/WhatsApp: +880 188-08-56099
                    </a>
                  </p>
                  <div className="space-y-1 mt-2">
                    <p className="text-gray-600">
                      <a href="mailto:dipubdit@gmail.com" className="hover:text-accent">
                        Email: dipubdit@gmail.com
                      </a>
                    </p>
                    <p className="text-gray-600">
                      <a href="mailto:cs0001362@gmail.com" className="hover:text-accent">
                        Business Email: cs0001362@gmail.com
                      </a>
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium text-lg mb-2">Social Media</h3>
                  <a
                    href="https://www.facebook.com/faijansolutions"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:text-accent/80 flex items-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                    </svg>
                    Follow us on Facebook
                  </a>
                </div>

                <div>
                  <h3 className="font-medium text-lg mb-2">Location</h3>
                  <p className="text-gray-600">
                    Faijan Solution, Opposite of Kadamtoli Police Station, 357 Rayerbagh, Dhaka-1362, Bangladesh
                  </p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="h-[400px] rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.4116602621684!2d90.45497047610083!3d23.696989078706938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b7be1ede68b7%3A0xb86a857861ea69b8!2sFAIJAN%20SOLUTIONS%20(DIPU)!5e0!3m2!1sen!2sbd!4v1742803796535!5m2!1sen!2sbd"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 