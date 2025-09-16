import { GraduationCap, Award, Heart } from 'lucide-react';

const stats = [
  { label: 'Current Year', value: 'Third Year' },
  { label: 'GPA', value: '7.93/10.0' },
  { label: 'Graduation', value: '2025' },
  { label: 'Location', value: 'Roorkee, India' },
];

const achievements = [
  {
    title: 'Winner, GC Tech 2025',
    description: 'Won a 14-day high-prep problem statement challenge',
    year: '2025',
  },
  {
    title: 'JEE-MAINS 2022',
    description: 'Secured 99 percentile (CRL - 7789)',
    year: '2022',
  },
  {
    title: 'MetES Cricket League',
    description: 'Two-time winner at IIT Roorkee (2024 & 2025)',
    year: '2024-25',
  },
];

const interests = [
  'Data Science',
  'Machine Learning',
  'Deep Learning',
  'Natural Language Processing',
  'Generative AI',
  'Data Structures & Algorithms',
];

const languages = ['English', 'Hindi'];

export default function About() {
  return (
    <div className="py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold font-poppins text-gray-900 dark:text-white mb-6">
            About Me
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A passionate machine learning engineer and AI developer currently pursuing B.Tech at IIT Roorkee, 
            with hands-on experience in building production-ready ML systems and generative AI applications.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Bio */}
            <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-md border border-gray-200 dark:border-gray-800">
              <h2 className="text-2xl font-bold font-poppins text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <GraduationCap className="text-blue-600 dark:text-blue-400" />
                Background
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                <p>
                  I'm currently in my third year at the Indian Institute of Technology Roorkee, pursuing a 
                  B.Tech degree with a focus on machine learning and artificial intelligence. My journey 
                  started with a strong foundation in computer science, achieving a 99 percentile in JEE-MAINS 2022.
                </p>
                <p>
                  My experience spans from building transformer models from scratch to developing production-ready 
                  AI systems. At my current role as an Agentic AI Intern, I've worked with LangChain and LangGraph 
                  to create intelligent user behavior analytics, achieving 3× performance improvements in real-world applications.
                </p>
                <p>
                  Beyond academics and work, I'm actively involved in various technical challenges and competitions. 
                  I recently won the GC Tech 2025 challenge and have been contributing to physics-informed neural 
                  networks research through the Physics & Astronomy Club at IIT Roorkee.
                </p>
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-md border border-gray-200 dark:border-gray-800">
              <h2 className="text-2xl font-bold font-poppins text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <Award className="text-blue-600 dark:text-blue-400" />
                Achievements
              </h2>
              <div className="space-y-6">
                {achievements.map((achievement) => (
                  <div
                    key={achievement.title}
                    className="border-l-4 border-blue-500 pl-6 py-2"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {achievement.title}
                      </h3>
                      <span className="text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full">
                        {achievement.year}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">
                      {achievement.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Interests */}
            <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-md border border-gray-200 dark:border-gray-800">
              <h2 className="text-2xl font-bold font-poppins text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <Heart className="text-blue-600 dark:text-blue-400" />
                Interests & Expertise
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {interests.map((interest) => (
                  <div
                    key={interest}
                    className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-200 dark:border-blue-800 rounded-lg px-4 py-2 text-center"
                  >
                    <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                      {interest}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Stats */}
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md border border-gray-200 dark:border-gray-800">
              <h3 className="text-lg font-bold font-poppins text-gray-900 dark:text-white mb-6">
                Quick Stats
              </h3>
              <div className="space-y-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">{stat.label}</span>
                    <span className="font-semibold text-gray-900 dark:text-white">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md border border-gray-200 dark:border-gray-800">
              <h3 className="text-lg font-bold font-poppins text-gray-900 dark:text-white mb-4">
                Languages
              </h3>
              <div className="space-y-2">
                {languages.map((language) => (
                  <div
                    key={language}
                    className="bg-gray-50 dark:bg-gray-800 rounded-lg px-3 py-2 text-center"
                  >
                    <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                      {language}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Extra-curriculars */}
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md border border-gray-200 dark:border-gray-800">
              <h3 className="text-lg font-bold font-poppins text-gray-900 dark:text-white mb-4">
                Extra-curriculars
              </h3>
              <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                <p>Volunteer at COGNIZANCE IIT Roorkee 2023</p>
                <p>Executive Member — Wellness Centre (June 2023–June 2024)</p>
                <p>Active participant in technical clubs and competitions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
