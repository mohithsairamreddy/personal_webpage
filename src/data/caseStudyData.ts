import { Database, Cloud, Target, Zap } from 'lucide-react';

export const caseStudyData = {
  title: "Featured Case Studies",
  studies: [
    {
      id: "parent-reports",
      title: "Parent Reports Optimization",
      description: "Optimized data pipeline architecture, migrated from Redshift to ClickHouse, and implemented efficient ETL processes with real-time processing.",
      challenge: "Parent reports were taking too long to generate and costing $575/month in infrastructure with poor user experience and delayed insights. The existing Redshift-based solution was expensive and couldn't handle the increasing data volume efficiently.",
      solution: "Redesigned the entire data pipeline architecture by migrating from Redshift to ClickHouse, implementing real-time ETL processes using Python and MongoDB, and optimizing query performance through better data modeling and indexing strategies.",
      results: "Achieved 50% reduction in runtime (from 45 minutes to 22 minutes), $575/month cost savings by eliminating Redshift usage, improved data freshness for better decision making, and enhanced user experience with faster report generation.",
      implementation: "Used Python for ETL scripting, MongoDB for data staging, ClickHouse as the new data warehouse, Redash for visualization, AWS Lambda for serverless processing, Airbyte for data integration, and DBT for data transformation workflows.",
      icon: Database,
      color: "tech-blue",
      metrics: {
        costSaving: "$575/month",
        performanceImprovement: "50%",
        timeReduction: "23 minutes",
        userSatisfaction: "95%"
      },
      technologies: ["Python", "MongoDB", "ClickHouse", "Redash", "AWS Lambda", "Airbyte", "DBT"],
      timeline: "3 months",
      teamSize: "4 engineers"
    },
    {
      id: "data-migration-poc",
      title: "Real-time Data Migration POC",
      description: "Proof of concept for migrating legacy data systems to modern cloud-native architecture with real-time CDC capabilities.",
      challenge: "Legacy data systems couldn't handle real-time data requirements. Batch processing caused delays in business decision-making and analytics teams needed fresher data for accurate insights.",
      solution: "Implemented a proof-of-concept using Airbyte for Change Data Capture (CDC), designed real-time streaming architecture with Kafka, and created automated data validation frameworks to ensure data quality during migration.",
      results: "Successfully demonstrated real-time data synchronization with 99.9% accuracy, reduced data latency from hours to seconds, and created a scalable foundation for future data migration projects.",
      implementation: "Designed CDC pipeline using Airbyte, implemented Kafka for real-time streaming, used PostgreSQL as source system, Snowflake as target warehouse, and created comprehensive monitoring with automated alerts.",
      icon: Cloud,
      color: "tech-green",
      metrics: {
        latencyReduction: "99%",
        dataAccuracy: "99.9%",
        processingSpeed: "Real-time",
        scalability: "10x"
      },
      technologies: ["Airbyte", "Kafka", "PostgreSQL", "Snowflake", "Python", "Docker"],
      timeline: "2 months",
      teamSize: "3 engineers"
    },
    {
      id: "dashboard-optimization",
      title: "Analytics Dashboard Performance Optimization",
      description: "Optimized Redash dashboards and underlying data queries to improve performance and user experience for business stakeholders.",
      challenge: "Business dashboards were loading slowly (30+ seconds), causing frustration among stakeholders and reducing adoption of data-driven decision making across the organization.",
      solution: "Analyzed query performance bottlenecks, optimized database indexes, implemented data aggregation strategies, and redesigned dashboard queries for better performance while maintaining data accuracy.",
      results: "Reduced dashboard load times by 80% (from 30+ seconds to 6 seconds), increased dashboard usage by 150%, and improved overall business team satisfaction with data accessibility.",
      implementation: "Performed query optimization in ClickHouse, implemented materialized views for common aggregations, redesigned Redash dashboard architecture, and created automated performance monitoring.",
      icon: Target,
      color: "tech-purple",
      metrics: {
        loadTimeReduction: "80%",
        usageIncrease: "150%",
        queryOptimization: "70%",
        userAdoption: "95%"
      },
      technologies: ["Redash", "ClickHouse", "SQL", "Python", "Grafana"],
      timeline: "6 weeks",
      teamSize: "2 engineers"
    }
  ]
}; 