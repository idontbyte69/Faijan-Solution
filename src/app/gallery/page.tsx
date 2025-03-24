import Image from 'next/image';

const galleryImages = [
  {
    src: '/images/shop/shop-1.jpg',
    alt: 'Faijan Solution Shop Front',
    caption: 'Our welcoming shop entrance'
  },
  {
    src: '/images/shop/shop-2.jpg',
    alt: 'Computer Service Area',
    caption: 'Professional computer repair and service area'
  },
  {
    src: '/images/shop/shop-3.jpg',
    alt: 'Customer Service Desk',
    caption: 'Dedicated customer service desk'
  },
  {
    src: '/images/shop/shop-4.jpg',
    alt: 'Government Service Counter',
    caption: 'Government service processing counter'
  },
  // {
  //   src: '/images/shop/shop-5.jpg',
  //   alt: 'Digital Marketing Setup',
  //   caption: 'Our digital marketing workspace'
  // },
  // {
  //   src: '/images/shop/shop-6.jpg',
  //   alt: 'Print and Copy Center',
  //   caption: 'High-quality printing and copying services'
  // },
  // {
  //   src: '/images/shop/shop-7.jpg',
  //   alt: 'Meeting Area',
  //   caption: 'Comfortable client meeting space'
  // },
  // {
  //   src: '/images/shop/shop-8.jpg',
  //   alt: 'Technical Workshop',
  //   caption: 'Advanced technical repair workshop'
  // },
  {
    src: '/images/shop/shop-5.jpg',
    alt: 'Staff Working',
    caption: 'Our dedicated team at work'
  }
];

export default function Gallery() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-accent text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Gallery</h1>
          <p className="text-xl max-w-2xl">
            Take a tour of our modern facility where we provide top-notch digital and government services.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((image, index) => (
              <div 
                key={index} 
                className="group relative bg-white rounded-xl overflow-hidden shadow-lg"
              >
                <div className="relative h-72 w-full">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <h3 className="text-white font-semibold text-lg">{image.alt}</h3>
                  <p className="text-gray-200 text-sm">{image.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">Visit Our Shop</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Experience our professional services in person. We're ready to help you with all your digital needs.
          </p>
          <a 
            href="https://maps.app.goo.gl/RvHdJPn35nNtbKag6"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-lg text-lg font-semibold inline-block transition-colors"
          >
            Get Directions
          </a>
        </div>
      </section>
    </div>
  );
} 