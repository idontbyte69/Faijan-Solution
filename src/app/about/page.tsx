export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-primary mb-8">About Faijan Solution</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
          <p className="text-gray-700 mb-4">
            Faijan Solution is a leading online service provider in Bangladesh, offering a comprehensive range of digital and administrative services. Founded with the vision to simplify access to essential services, we bridge the gap between traditional bureaucratic processes and modern digital solutions.
          </p>
          <p className="text-gray-700 mb-4">
            Our team of experienced professionals is dedicated to providing efficient, reliable, and hassle-free services to our clients.
          </p>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-700 mb-4">
            To provide accessible, efficient, and professional online services that simplify the lives of our clients while maintaining the highest standards of quality and customer satisfaction.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Professional Excellence</li>
            <li>Customer Satisfaction</li>
            <li>Integrity and Transparency</li>
            <li>Innovation and Efficiency</li>
            <li>Reliable Service Delivery</li>
          </ul>
        </div>
      </div>
    </div>
  )
} 