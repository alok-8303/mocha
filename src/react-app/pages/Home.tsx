import Hero from '@/react-app/components/Hero';
import { Brain, Code, Database, Zap } from 'lucide-react';
import { Link } from 'react-router';

const highlights = [
  {
    icon: Brain,
    title: 'AI & Machine Learning',
    description: 'Building GPT-2 from scratch, LangChain agents, and production ML systems',
  },
  {
    icon: Code,
    title: 'Python Backend',
    description: 'FastAPI backends, React frontends, and AWS cloud deployments',
  },
  {
    icon: Database,
    title: 'Data Engineering',
    description: 'ETL pipelines, user analytics, and real-time data processing',
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description: 'Achieving 3× performance improvements in production systems',
  },
];

const recentProjects = [
  {
    title: 'GPT-2 Model from Scratch',
    description: 'Implemented transformer architecture in PyTorch with custom tokenizer',
    tech: 'PyTorch, Python',
    link: 'https://github.com/alok-8303/LLM-from-Scratch',
  },
  {
    title: 'User Flow Intelligence Agent',
    description: 'LangChain-powered analytics for gaming platform behavior analysis',
    tech: 'LangChain, FastAPI, AWS',
    link: '/projects',
  },
  {
    title: 'LinkedIn Profile Matching',
    description: 'AI-powered persona matching with facial recognition and NLP',
    tech: 'OpenAI GPT-4, FaceNet',
    link: 'https://github.com/alok-8303/GC-TECH_RECEPTO.AI_NLP',
  },
];

export default function Home() {
  return (
    <div>
      <Hero />
      
      {/* Highlights Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold font-poppins text-gray-900 dark:text-white mb-4">
              What I Do
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Specializing in machine learning, generative AI, and scalable backend systems
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="card-hover bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md border border-gray-200 dark:border-gray-800"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold font-poppins text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Projects Preview */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold font-poppins text-gray-900 dark:text-white mb-4">
                Featured Projects
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Recent work in AI, machine learning, and software engineering
              </p>
            </div>
            <Link
              to="/projects"
              className="hidden sm:inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold transition-colors"
            >
              View All Projects →
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {recentProjects.map((project, index) => (
              <div
                key={project.title}
                className="card-hover bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md border border-gray-200 dark:border-gray-800"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-semibold font-poppins text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="mb-4">
                  <span className="inline-block bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm px-3 py-1 rounded-full font-fira-code">
                    {project.tech}
                  </span>
                </div>
                <a
                  href={project.link}
                  target={project.link.startsWith('http') ? '_blank' : undefined}
                  rel={project.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold transition-colors"
                >
                  {project.link.startsWith('http') ? 'View Code →' : 'Learn More →'}
                </a>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 sm:hidden">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              View All Projects →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
