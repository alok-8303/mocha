import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    title: 'Agentic AI Intern',
    company: 'Stealth AI Startup',
    location: 'Hybrid',
    period: 'May 2025 - Present',
    type: 'Current',
    achievements: [
      'Developed and deployed a User Flow Intelligence Agent for a rummy gaming platform using LangChain and LangGraph, implementing advanced RAG pipelines with async processing to analyze user behavioral patterns (gameplay, deposits, withdrawals, offers), achieving 3× performance.',
      'Built production-ready backend infrastructure with FastAPI (async endpoints), deployed on AWS with proper CORS configuration and error handling, serving real-time behavioral analytics for user engagement optimization.',
      'Engineered end-to-end data pipelines and analytics workflows, including raw data extraction and feature engineering for user streak analysis, enabling comprehensive insights into user behavior.'
    ],
    skills: ['LangChain', 'LangGraph', 'FastAPI', 'AWS', 'Python', 'RAG', 'Analytics']
  },
  {
    title: 'GenAI Intern',
    company: 'REVn Plus',
    location: 'Remote',
    period: 'Feb 2025 - May 2025',
    type: 'Past',
    achievements: [
      'Designed and implemented image analysis workflows using Vision-Language Models (VLMs) to extract structured and contextual insights from images.',
      'Integrated and automated APIs to deploy ML models with custom endpoints, ensuring scalable, real-time inference through reliable and efficient data pipelines.',
      'Built a lightweight Web UI for seamless interaction with deployed models.'
    ],
    skills: ['Vision-Language Models', 'API Integration', 'ML Deployment', 'Web UI', 'Python']
  }
];

const education = {
  institution: 'Indian Institute of Technology Roorkee',
  degree: 'B.Tech (Third year)',
  period: '2022 - 2025',
  gpa: '7.93 / 10.00',
  location: 'Roorkee, Uttrakhand, India'
};

const certifications = [
  {
    title: 'Machine Learning Specialization',
    provider: 'Coursera',
    year: '2024'
  },
  {
    title: 'Analytics For Managerial Decision Making (IBM-322)',
    provider: 'IIT Roorkee',
    year: '2024'
  }
];

export default function Experience() {
  return (
    <div className="py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold font-poppins text-gray-900 dark:text-white mb-6">
            Experience & Education
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            My journey in machine learning, AI development, and academic excellence
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Experience Timeline */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold font-poppins text-gray-900 dark:text-white mb-8 flex items-center gap-3">
              <Briefcase className="text-blue-600 dark:text-blue-400" />
              Professional Experience
            </h2>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={`${exp.company}-${exp.title}`}
                  className="relative bg-white dark:bg-gray-900 rounded-xl p-8 shadow-md border border-gray-200 dark:border-gray-800 card-hover"
                >
                  {/* Timeline connector */}
                  {index < experiences.length - 1 && (
                    <div className="absolute left-4 bottom-0 w-0.5 h-8 bg-gradient-to-b from-blue-500 to-transparent transform translate-y-full"></div>
                  )}
                  
                  {/* Status badge */}
                  <div className="absolute top-6 right-6">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                      exp.type === 'Current' 
                        ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                        : 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-400'
                    }`}>
                      {exp.type}
                    </span>
                  </div>

                  <div className="pr-20">
                    <h3 className="text-xl font-bold font-poppins text-gray-900 dark:text-white mb-2">
                      {exp.title}
                    </h3>
                    <div className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-4">
                      {exp.company}
                    </div>
                    
                    <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={16} />
                        {exp.location}
                      </div>
                    </div>

                    <div className="space-y-3 mb-6">
                      {exp.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            {achievement}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="inline-block bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs px-3 py-1 rounded-full font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Education */}
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md border border-gray-200 dark:border-gray-800">
              <h3 className="text-lg font-bold font-poppins text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <Briefcase size={20} className="text-blue-600 dark:text-blue-400" />
                Education
              </h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {education.institution}
                  </h4>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">
                    {education.degree}
                  </p>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-2 space-y-1">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      {education.period}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={14} />
                      {education.location}
                    </div>
                  </div>
                  <div className="mt-3 p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                        {education.gpa}
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">
                        Current GPA
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md border border-gray-200 dark:border-gray-800">
              <h3 className="text-lg font-bold font-poppins text-gray-900 dark:text-white mb-4">
                Certifications
              </h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="border-l-2 border-blue-500 pl-4">
                    <h4 className="font-medium text-gray-900 dark:text-white text-sm">
                      {cert.title}
                    </h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      {cert.provider} • {cert.year}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills Summary */}
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md border border-gray-200 dark:border-gray-800">
              <h3 className="text-lg font-bold font-poppins text-gray-900 dark:text-white mb-4">
                Core Technologies
              </h3>
              <div className="space-y-3">
                <div>
                  <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Programming
                  </h4>
                  <div className="text-xs text-gray-600 dark:text-gray-400">
                    Python, C++
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    ML & AI
                  </h4>
                  <div className="text-xs text-gray-600 dark:text-gray-400">
                    PyTorch, TensorFlow, LangChain, Hugging Face
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Tools & Platforms
                  </h4>
                  <div className="text-xs text-gray-600 dark:text-gray-400">
                    AWS, FastAPI, Git, Docker
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
