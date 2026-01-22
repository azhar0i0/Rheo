import { Link } from 'react-router-dom';
import blogAi from '@/assets/blog-ai.jpg';
import blogRobot from '@/assets/blog-robot.jpg';
import blogNetwork from '@/assets/blog-network.jpg';

export default function BlogSection() {
  const blogs = [
    {
      image: blogAi,
      title: 'Optimizing Workflow Efficiency',
      desc: 'Learn strategies to streamline business processes and software workflows. Reduce bottlenecks and enhance productivity.',
    },
    {
      image: blogRobot,
      title: 'Building Scalable SaaS Platforms',
      desc: 'Architecture, design patterns, and best practices for SaaS apps. Multi-tenant, cloud-ready, and built to scale.',
    },
    {
      image: blogNetwork,
      title: 'Advanced Mobile App Development Techniques',
      desc: 'Performance optimization, cross-platform strategies, and modern mobile engineering approaches.',
    },
  ];

  return (
    <section className="bg-black text-white py-28">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Label */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#8b5cf6]" />
            <span className="text-[#8b5cf6] text-[14px]">Blog</span>
          </div>
        </div>

        {/* Heading */}
        <h2 className="max-w-[720px] text-xl md:text-xl font-semibold text-[#CFFAFE] mb-16 leading-tight">
          Channel futuristic force to innovate boldly, focus deeply, <br /> and achieve more.
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <Link
              key={index}
              to="/blog"
              className="group block rounded-2xl overflow-hidden hover:borderBottom-1 hover:border-[#22d3ee]/40 transition-colors"
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col gap-3 min-h-[180px]">
                <h3 className="text-lg font-semibold">
                  {blog.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {blog.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
