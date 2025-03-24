'use client';

import { useState } from 'react';

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-primary mb-8">Contact Us</h1>
      
      
      
      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-lg mb-2">Owner</h3>
                <p className="text-gray-600">Arif Hossain Dipu</p>
              </div>
              <div>
                <h3 className="font-medium text-lg mb-2">Phone/WhatsApp</h3>
                <p className="text-gray-600">
                  <a href="tel:01880856099" className="hover:text-accent">01880856099</a>
                </p>
              </div>
              <div>
                <h3 className="font-medium text-lg mb-2">Email</h3>
                <p className="text-gray-600">
                  <a href="mailto:dipubdit@gmail.com" className="hover:text-accent">dipubdit@gmail.com</a>
                </p>
                <p className="text-gray-600 mt-1">
                  <a href="mailto:cs0001362@gmail.com" className="hover:text-accent">cs0001362@gmail.com</a>
                </p>
              </div>
              <div>
                <h3 className="font-medium text-lg mb-2">Social Media</h3>
                <a
                  href="https://www.facebook.com/faijansolutions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  Facebook Page
                </a>
              </div>
              <div>
                <h3 className="font-medium text-lg mb-2">Location</h3>
                <p className="text-gray-600">
                  Faijan Solutions, Opposite of Kadamtoli Police Station, 357 Rayerbagh, Dhaka-1362, Bangladesh
                </p>
              </div>
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
  );
} 