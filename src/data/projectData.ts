import { Database, Target } from 'lucide-react';
import voiceMorphingImg from '@/assets/voice-morphing.jpg';
import salaryPredictionImg from '@/assets/salary-prediction.jpg';
import imageCaptionImg from '@/assets/image-caption.jpg';
import flightFareImg from '@/assets/flight-fare.jpg';

export const projects = [
  {
    title: "Voice Morphing App",
    description: "Voice↔Voice & Text↔Voice for autism trainers",
    tech: "AI/ML, Python",
    category: "Machine Learning",
    color: "tech-blue",
    image: voiceMorphingImg
  },
  {
    title: "Salary Prediction System", 
    description: "Flask-deployed ML salary forecasts",
    tech: "Flask, ML",
    category: "Web Development",
    color: "tech-purple",
    image: salaryPredictionImg
  },
  {
    title: "Image Caption Generator",
    description: "Flask + Google ViT captions", 
    tech: "Flask, Computer Vision",
    category: "Computer Vision",
    color: "tech-green",
    image: imageCaptionImg
  },
  {
    title: "Flight Fare Prediction",
    description: "ML ticket-price forecasting",
    tech: "Machine Learning",
    category: "Data Science",
    color: "tech-orange",
    image: flightFareImg
  }
];

export const blogPosts = [
  {
    title: "Notes on Data Engineering",
    excerpt: "How to build cost-effective, cloud-first data pipelines that scale with your business needs. Insights from real-world implementations and architectural decisions.",
    url: "https://medium.com/p/26aaf896ce27",
    category: "Technical"
  }
];

export const caseStudies = [
  {
    id: "parent-reports",
    title: "Parent Reports Optimization",
    description: "Optimized data pipeline architecture, migrated from Redshift to ClickHouse, and implemented efficient ETL processes with real-time processing.",
    challenge: "Parent reports were taking too long to generate and costing $575/month in infrastructure with poor user experience and delayed insights.",
    solution: "Optimized data pipeline architecture, migrated from Redshift to ClickHouse, and implemented efficient ETL processes with real-time processing.",
    results: "Achieved 50% reduction in runtime, $575/month cost savings, and improved data freshness for better decision making.",
    implementation: "Used Python, MongoDB, ClickHouse, Redash, AWS Lambda, Airbyte, DBT for comprehensive data transformation and pipeline optimization.",
    icon: Database,
    color: "tech-blue"
  }
];

 