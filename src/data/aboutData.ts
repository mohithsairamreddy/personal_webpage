import { Database, Cloud, TrendingUp } from 'lucide-react';

export const aboutData = {
  title: "About Me",
  description: "I'm a results-driven Data Engineer with expertise in building scalable data pipelines, cloud-first data warehouses, and cost-effective solutions. My passion lies in transforming complex data challenges into elegant, maintainable architectures that drive real business impact.",
  highlightText: "Data Engineer",
  skills: [
    {
      icon: Database,
      title: "Data Engineering",
      description: "ETL pipelines, data warehousing, real-time processing",
      gradient: "from-blue-500 to-blue-600",
      bgGradient: "from-white to-blue-50"
    },
    {
      icon: Cloud,
      title: "Cloud Architecture", 
      description: "AWS, GCP, Azure, serverless, microservices",
      gradient: "from-purple-500 to-purple-600",
      bgGradient: "from-white to-purple-50"
    },
    {
      icon: TrendingUp,
      title: "Cost Optimization",
      description: "Performance tuning, resource optimization, ROI focus", 
      gradient: "from-green-500 to-green-600",
      bgGradient: "from-white to-green-50"
    }
  ]
}; 