import Link from 'next/link';
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
          <div className="relative w-[100px] h-[50px] md:w-[100px] md:h-[100px py]">
                    <Image
                      src="/images/logo-cutted.png"
                      alt="Faijan Solution Logo"
                      fill
                      priority
                      className="object-contain"
                    />
                  </div>
            <p className="text-gray-400 mb-4 mt-4">Your trusted partner for all online and digital services.</p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/faijansolutions" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-accent transition-colors"
              >
                Facebook
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-accent transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-accent transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li>CEO: Arif Hossain Dipu</li>
              <li>Cell/Whatsapp: +880 188-08-56099</li>
              <li>Email: dipubdit@gmail.com</li>
              <li>Business-Email: cs0001362@gmail.com</li>
              <li>Location: 357 Rayerbagh, Dhaka-1362, Bangladesh</li>
            </ul>
          </div>
        </div>

        {/* Developer Credit & Copyright */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Faijan Solution. All rights reserved.
            </p>
            <div className="text-gray-400 text-sm">
              Developed by{' '}
              <a 
                href="https://srtanveer.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-accent hover:text-accent/80 transition-colors"
              >
                Md. Showaib Rahman Tanveer
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 