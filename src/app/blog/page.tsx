export default function Blog() {
  const posts = [
    {
      title: 'Guide to NID Registration Process',
      excerpt: 'Learn about the step-by-step process of NID registration and correction in Bangladesh.',
      date: 'March 24, 2024',
      category: 'Government Services'
    },
    {
      title: 'Digital Marketing Trends 2024',
      excerpt: 'Explore the latest trends in digital marketing and how they can benefit your business.',
      date: 'March 23, 2024',
      category: 'Digital Marketing'
    },
    {
      title: 'Common Computer Issues and Solutions',
      excerpt: 'A comprehensive guide to troubleshooting common computer problems.',
      date: 'March 22, 2024',
      category: 'Tech Support'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-primary mb-8">Vlogs & Articles</h1>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <article key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <div className="text-sm text-accent mb-2">{post.category}</div>
              <h2 className="text-xl font-semibold mb-3">{post.title}</h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">{post.date}</span>
                <button className="text-accent hover:text-accent/80 text-sm font-medium">
                  Read More →
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
} 