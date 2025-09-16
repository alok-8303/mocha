import { ArrowRight, Download, Mail } from 'lucide-react';
import { Link } from 'react-router';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-transparent to-purple-50 dark:from-blue-950/20 dark:via-transparent dark:to-purple-950/20"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 dark:opacity-10">
        <div className="w-full h-full bg-gradient-to-l from-blue-600 to-purple-600"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="animate-fade-in-up">
            <div className="mb-6">
              <span className="inline-flex items-center rounded-full bg-blue-100 dark:bg-blue-900/30 px-3 py-1 text-sm font-medium text-blue-700 dark:text-blue-300">
                IIT Roorkee • B.Tech 2025
              </span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold font-poppins text-gray-900 dark:text-white leading-tight mb-6">
              Hi — I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Alok Maurya
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              I build practical machine-learning systems and generative-AI products.
            </p>
            
            <p className="text-lg text-gray-500 dark:text-gray-400 mb-10 leading-relaxed">
              Currently working as an Agentic AI Intern, developing intelligent user behavior analytics with LangChain and deploying production-ready ML systems on AWS.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/projects"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg shadow-blue-500/25"
              >
                View Projects
                <ArrowRight size={20} />
              </Link>
              
              <a
                href="/resume"
                className="inline-flex items-center justify-center gap-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-gray-200 dark:border-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-lg transition-all duration-200"
              >
                <Download size={20} />
                Download Resume
              </a>
              
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 text-gray-600 dark:text-gray-400 px-8 py-4 rounded-xl font-semibold hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
              >
                <Mail size={20} />
                Contact Me
              </Link>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="animate-fade-in">
            <div className="relative">
              {/* Main visual container */}
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 p-8 lg:p-12 shadow-2xl h-80 flex items-center justify-center">
                {/* Floating elements */}
                <div className="absolute top-4 right-4 w-16 h-16 bg-blue-500/20 rounded-full animate-pulse"></div>
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-purple-500/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-purple-500/15 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
                <div className="absolute bottom-1/3 right-1/3 w-6 h-6 bg-blue-500/15 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                
                {/* Central focus element */}
                <div className="text-center">
                  <div className="w-48 h-48 mx-auto mb-6 rounded-2xl overflow-hidden shadow-lg border-4 border-white dark:border-gray-700">
                    <img 
                      src="https://mocha-cdn.com/019944f2-4827-7a07-be63-006ce2dbc206/portfolio.jpeg"
                      alt="Alok Maurya"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-gray-900 dark:text-white font-semibold text-xl mb-2">Alok Maurya</div>
                  <div className="text-gray-700 dark:text-gray-300 font-medium text-lg">Machine Learning Engineer</div>
                </div>
              </div>

              {/* Background decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-20 blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
