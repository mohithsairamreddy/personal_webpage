import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';
import { blogPosts } from '@/data/projectData';

const BlogSection = () => {
  return (
    <section id="blog" className="section-padding bg-gradient-to-r from-emerald-50 via-teal-50 to-cyan-50 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-100/30 to-cyan-100/30"></div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center tech-gradient-text">Latest Insights</h2>
        <div className="grid md:grid-cols-1 gap-8 max-w-4xl mx-auto">
          {blogPosts.map((post, index) => (
            <Card key={index} className="tech-card p-12 text-center bg-gradient-to-br from-white to-blue-50/50 border border-blue-100 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <ExternalLink className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 tech-gradient-text">{post.title}</h3>
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                {post.excerpt}
              </p>
              <Button 
                variant="outline"
                size="lg"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-xl"
                onClick={() => window.open(post.url, '_blank')}
              >
                Read more on Medium
                <ExternalLink className="ml-3 h-5 w-5" />
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection; 