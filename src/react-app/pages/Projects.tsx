import { useState } from 'react';
import { Github, Calendar, X } from 'lucide-react';

const projects = [
  {
    id: 'gpt2-scratch',
    title: 'GPT-2 Model from Scratch',
    description: 'Implemented a GPT-2 transformer model from first principles in PyTorch, including core components like multihead self-attention, positional embeddings, and layer normalization.',
    longDescription: 'A comprehensive implementation of the GPT-2 transformer architecture built entirely from scratch using PyTorch. This project demonstrates deep understanding of transformer models by implementing all core components including multi-head self-attention mechanisms, positional embeddings, layer normalization, and the full training pipeline. The model includes a custom tokenizer and training pipeline with gradient accumulation for efficient learning. Successfully demonstrated text generation capabilities and fine-tuned pre-trained GPT-2 weights on labeled data to build a classification model.',
    tech: ['Python', 'PyTorch', 'Pandas'],
    category: 'AI/ML',
    date: 'March 2025',
    github: 'https://github.com/alok-8303/LLM-from-Scratch',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop&crop=center',
    features: [
      'Complete GPT-2 architecture implementation',
      'Custom tokenizer development',
      'Training pipeline with gradient accumulation',
      'Text generation capabilities',
      'Model fine-tuning for classification'
    ]
  },
  {
    id: 'linkedin-matching',
    title: 'LinkedIn Profile Search Plus Matching',
    description: 'Built a multi-stage pipeline integrating FaceCheck API, web scraping (Selenium + BeautifulSoup), and OpenAI GPT-4 to enrich persona data using image and semantic intelligence.',
    longDescription: 'An advanced AI-powered system that combines computer vision, natural language processing, and web scraping to match personas with LinkedIn profiles. The system uses a sophisticated multi-stage pipeline that leverages FaceCheck API for facial recognition, web scraping tools for data collection, and OpenAI GPT-4 for semantic analysis. Built for the General Championship Tech IITR competition, this project demonstrates the integration of multiple AI technologies to solve complex data matching problems.',
    tech: ['Python', 'Selenium', 'BeautifulSoup', 'OpenAI GPT-4', 'Brightdata', 'FaceNet PyTorch'],
    category: 'AI/ML',
    date: 'April 2025',
    github: 'https://github.com/alok-8303/GC-TECH_RECEPTO.AI_NLP',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop&crop=center',
    features: [
      'Multi-stage AI pipeline integration',
      'Facial recognition with FaceNet',
      'Web scraping with Selenium & BeautifulSoup',
      'Semantic similarity analysis',
      'BrightData API integration',
      'Weighted scoring logic for validation'
    ]
  },
  {
    id: 'nlse-pinns',
    title: 'Solving Nonlinear Schrödinger Equation Using PINNs',
    description: 'Developed a Physics Informed Neural Network (PINN) using PyTorch to solve the nonlinear Schrödinger equation, modeling wave dynamics like solitons.',
    longDescription: 'A cutting-edge application of Physics-Informed Neural Networks (PINNs) to solve complex differential equations in quantum mechanics. This project implements a sophisticated neural network architecture that embeds physical constraints directly into the loss function, enabling the solution of the nonlinear Schrödinger equation. The network models wave dynamics including soliton behavior, demonstrating the power of combining deep learning with physics principles.',
    tech: ['Python', 'PyTorch', 'NumPy', 'Matplotlib', 'Pandas'],
    category: 'Physics/AI',
    date: 'December 2024',
    github: 'https://github.com/alok-8303/Solving-NLSE-using-PINNs',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&h=400&fit=crop&crop=center',
    features: [
      '10-layer neural network with Gaussian activation',
      'Physics-informed loss function design',
      'Soliton wave modeling',
      'Quantum mechanics simulation',
      'Advanced visualization techniques'
    ]
  },
  {
    id: 'galaxy-classification',
    title: 'Fine Tuning on Astrophysical Dataset',
    description: 'Classified galaxy images from the Galaxy Zoo 1 dataset using transfer learning on a pre-trained CNN (ResNet-50).',
    longDescription: 'An astrophysical machine learning project that applies transfer learning techniques to classify galaxy morphologies from the famous Galaxy Zoo 1 dataset. Using a pre-trained ResNet-50 architecture, this project demonstrates advanced computer vision techniques applied to astronomical data. The model was fine-tuned with careful data preparation including resizing, normalization, and augmentation techniques to achieve high accuracy in galaxy classification.',
    tech: ['Python', 'PyTorch', 'Matplotlib', 'NumPy', 'Pandas'],
    category: 'Astronomy/AI',
    date: 'December 2024',
    github: 'https://github.com/alok-8303/Fine-Tuning-on-Astronomical-Dataset',
    image: 'https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=600&h=400&fit=crop&crop=center',
    features: [
      'Transfer learning with ResNet-50',
      'Galaxy Zoo 1 dataset processing',
      'Advanced data augmentation',
      'Adam optimizer with learning rate scheduling',
      'Astronomical image classification'
    ]
  }
];

const categories = ['All', 'AI/ML', 'Physics/AI', 'Astronomy/AI'];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold font-poppins text-gray-900 dark:text-white mb-6">
            Projects
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A collection of my work in machine learning, AI development, and computational physics
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="card-hover bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-md border border-gray-200 dark:border-gray-800"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-block bg-white/90 dark:bg-gray-900/90 backdrop-blur text-gray-800 dark:text-gray-200 text-xs px-3 py-1 rounded-full font-medium">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold font-poppins text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                    <Calendar size={14} />
                    {project.date}
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="inline-block bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs px-3 py-1 rounded-full font-fira-code"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="inline-block bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs px-3 py-1 rounded-full">
                      +{project.tech.length - 3} more
                    </span>
                  )}
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                  >
                    Learn More
                  </button>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  >
                    <Github size={16} />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white dark:bg-gray-900 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 p-6 flex items-center justify-between">
                <h2 className="text-2xl font-bold font-poppins text-gray-900 dark:text-white">
                  {selectedProject.title}
                </h2>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              
              <div className="p-6">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded-xl mb-6"
                />
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2 space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        Overview
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        {selectedProject.longDescription}
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        Key Features
                      </h3>
                      <ul className="space-y-2">
                        {selectedProject.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        Technologies
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tech.map((tech) => (
                          <span
                            key={tech}
                            className="inline-block bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm px-3 py-1 rounded-full font-fira-code"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        Project Info
                      </h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600 dark:text-gray-400">Date:</span>
                          <span className="text-gray-900 dark:text-white">{selectedProject.date}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600 dark:text-gray-400">Category:</span>
                          <span className="text-gray-900 dark:text-white">{selectedProject.category}</span>
                        </div>
                      </div>
                    </div>
                    
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
                    >
                      <Github size={20} />
                      View Source Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
