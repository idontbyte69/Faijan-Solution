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
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-primary mb-12 text-center">Our Services</h1>
      
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
  );
} 