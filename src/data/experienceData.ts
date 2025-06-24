import { Code, Database, Cloud, Zap } from 'lucide-react';

export const experiences = [
  {
    title: "Software Engineer",
    company: "Educational Initiatives",
    period: "Jul '24-Present",
    preview: "Leading data pipeline development and client-facing reporting solutions",
    fullDescription: [
      "Drove a proof of concept using Airbyte, Postgres, DBT, Confluent Kafka, AWS Lambda, and Snowflake for a new data pipeline",
      "Delivered client-facing reports (Parent Reports and Principal Reports) and contributed to data pipeline architectures, data warehouse design, and datamart structures"
    ],
    icon: Code,
    color: "tech-blue"
  },
  {
    title: "Software Developer Intern", 
    company: "Educational Initiatives",
    period: "Jan '24–Jul '24",
    preview: "Developed ETL solutions and optimized reporting systems with significant cost savings",
    fullDescription: [
      "Developed ETL scripts utilizing Python, MongoDB, and ClickHouse to efficiently extract, transform, and load data from various sources into a centralized Data Warehouse",
      "Contributed to the development of Redash dashboards to visualize and analyze data stored in the Data Warehouse, facilitating data-driven decision-making for stakeholders",
      "Optimized Parent Report generation through code restructuring, achieving a 50% reduction in processing time and eliminating Redshift usage, resulting in monthly cost savings of $575",
      "Spearheaded a proof of concept for a new data pipeline leveraging Airbyte, MongoDB, and ClickHouse technologies"
    ],
    icon: Database,
    color: "tech-purple"
  },
  {
    title: "Intern",
    company: "Cisco",
    period: "Jun '22–Aug '22",
    preview: "Python development for networking solutions",
    fullDescription: [
      "Received 1 month training on the fundamentals to advanced levels of Python programming",
      "Solved problem statements from CISCO company using Python programming language",
      "Learned how Computer Networks can be interconnected with coding through practical applications"
    ],
    icon: Cloud,
    color: "tech-green"
  },
  {
    title: "Member",
    company: "AI@amrita",
    period: "May '21–Apr '22", 
    preview: "Research in AI technologies and application development",
    fullDescription: [
      "AI@amrita is a club of ardent college students who are dynamic and motivated open-source enthusiasts focused on Machine Learning and Artificial Intelligence",
      "Received training in Machine learning and Deep learning algorithms in Phase I",
      "Conducted research work with faculty members in numerous AI domains such as Image analysis, video processing, Cloud and IoT, Web Analytics, Natural Language Processing, Audio Processing",
      "Worked on Salary Projections application and Speech Conversions projects"
    ],
    icon: Zap,
    color: "tech-orange"
  }
];

export const stats = [
  {
    icon: "💰",
    title: "Cost Optimization",
    value: "$575/month",
    description: "Infrastructure cost savings",
    items: [
      "Developed Parent Reports end-to-end (frontend + email scripts)",
      "Shutdown Redshift → saved $575/month", 
      "Restructured & optimized MSE Parent scripts"
    ],
    color: "tech-green"
  },
  {
    icon: "🔄",
    title: "Data Migration",
    value: "50%",
    description: "Performance improvement",
    items: [
      "POC: MongoDB → ClickHouse via Airbyte CDC",
      "Documented feasibility gaps (on hold due to MIRA)"
    ],
    color: "tech-blue"
  },
  {
    icon: "🛠",
    title: "Pipeline Architecture", 
    value: "4+",
    description: "Data pipelines built",
    items: [
      "S3 → Lambda → Snowflake (AWS CodePipeline)",
      "PostgreSQL → DBT → Snowflake",
      "PostgreSQL → Kafka → Snowflake",
      "PostgreSQL → Airbyte → Snowflake"
    ],
    color: "tech-purple"
  }
]; 