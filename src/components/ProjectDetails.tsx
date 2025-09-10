"use client";

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { supabase } from "../supabase/supabaseClient";
import { ArrowLeft, ExternalLink, Github, Calendar, User, ChevronRight, Code, Layout, Cpu, Zap } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tech: string[];
  live_url: string;
  github_url?: string;
  date?: string;
  client?: string;
  category?: string;
  content?: string;
}

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    window.scroll(0, 0);
    if (id) {
      fetchProjectById(parseInt(id));
    }
  }, [id]);

  const fetchProjectById = async (projectId: number) => {
    setLoading(true);
    const { data, error } = await supabase
      .from("easy_it_profile")
      .select("*")
      .eq("id", projectId)
      .single();

    if (error) {
      console.error("Fetch error:", error);
    } else {
      setProject(data as Project);
    }
    setLoading(false);
  };

  // Generate detailed content based on project data
  const generateProjectContent = (project: Project) => {
    return `
      <p>The ${project.title} represents a significant achievement in modern web development, combining cutting-edge technologies with user-centered design principles. This project was designed to address specific challenges in the digital landscape while delivering an exceptional user experience.</p>
      
      <p>Built with a stack that includes ${project.tech?.join(', ') || 'modern web technologies'}, this application demonstrates the power of combining robust backend systems with intuitive frontend interfaces. The architecture was carefully planned to ensure scalability, maintainability, and performance.</p>
      
      <br/>
      <h3 style="font-weight: bold;">Development Approach</h3>
      <p>The development process followed agile methodologies, with a focus on iterative improvements and user feedback. Each component was designed with reusability in mind, creating a cohesive system that's both powerful and flexible.</p>
      <br/>
      <h3 style="font-weight: bold;">Technical Implementation</h3>
      <p>The technical implementation leverages modern development practices including responsive design, performance optimization, and accessibility standards. The codebase maintains a clean structure with thorough documentation, making it easy for other developers to understand and contribute.</p>
      <br/>
      <h3 style="font-weight: bold;">Results and Impact</h3>
      <p>This project has successfully delivered value to users by streamlining processes, improving engagement metrics, and providing a foundation for future enhancements. The solution stands as a testament to the effective application of technology to solve real-world problems.</p>
    `;
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="animate-pulse flex flex-col items-center">
          <div className="w-16 h-16 bg-blue-500/20 rounded-full mb-4"></div>
          <p className="text-gray-500">Loading project details...</p>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="text-center p-8 bg-white rounded-2xl shadow-sm max-w-md border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Project not found</h2>
          <button
            onClick={() => navigate("/")}
            className="px-6 py-2.5 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg hover:from-blue-600 hover:to-indigo-600 transition-all shadow-md hover:shadow-lg"
          >
            Return Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Navigation */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center text-gray-600 hover:text-blue-600 transition-all group font-medium"
            >
              <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Projects
            </button>
            
            <div className="flex items-center">
              <span className="text-sm text-gray-500 mr-2">Project</span>
              <ChevronRight className="w-4 h-4 text-gray-400" />
              <span className="text-sm text-gray-700 ml-2 font-medium">{project.title}</span>
            </div>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Project Header */}
        <div className="max-w-5xl mx-auto mb-8">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-2">
              <div className="flex-1">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {project.title}
                </h1>
                
                <div className="flex flex-wrap gap-4 mb-4">
                  {project.date && (
                    <div className="flex items-center text-gray-600 text-sm bg-gray-50 px-3 py-1.5 rounded-lg">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{project.date}</span>
                    </div>
                  )}
                  {project.client && (
                    <div className="flex items-center text-gray-600 text-sm bg-gray-50 px-3 py-1.5 rounded-lg">
                      <User className="w-4 h-4 mr-2" />
                      <span>{project.client}</span>
                    </div>
                  )}
                  {project.category && (
                    <div className="flex items-center text-gray-600 text-sm bg-gray-50 px-3 py-1.5 rounded-lg">
                      <Layout className="w-4 h-4 mr-2" />
                      <span>{project.category}</span>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {project.live_url && (
                  <a
                    href={project.live_url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg hover:from-blue-600 hover:to-indigo-600 transition-all shadow-md hover:shadow-lg text-sm font-medium"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Live
                  </a>
                )}
                
                {project.github_url && (
                  <a
                    href={project.github_url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all text-sm font-medium"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Source Code
                  </a>
                )}
              </div>
            </div>
            
            <p className="text-gray-700 leading-relaxed text-lg">
              {project.description}
            </p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="flex-1">
              {/* Project Image */}
              {project.image && (
                <div className="mb-8">
                  <div className="rounded-2xl overflow-hidden shadow-lg bg-gray-200 aspect-video relative">
                    {!imageLoaded && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="animate-pulse bg-gray-300 w-full h-full"></div>
                      </div>
                    )}
                    <img
                      src={project.image}
                      alt={project.title}
                      className={`w-full h-full object-cover transition-opacity duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                      onLoad={() => setImageLoaded(true)}
                    />
                  </div>
                </div>
              )}

              {/* Project Details */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-4 border-b border-gray-200 flex items-center">
                  <Code className="w-6 h-6 mr-3 text-blue-500" />
                  Project Overview
                </h2>
                
                <div 
                  className="prose max-w-none text-gray-700"
                  dangerouslySetInnerHTML={{ __html: generateProjectContent(project) }}
                />
              </div>

              {/* Tech Stack */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-4 border-b border-gray-200 flex items-center">
                  <Cpu className="w-6 h-6 mr-3 text-blue-500" />
                  Technology Stack
                </h2>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {project.tech &&
                    project.tech.map((technology, idx) => (
                      <div key={idx} className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                        <div className="flex items-center mb-2">
                          <Zap className="w-5 h-5 text-blue-500 mr-2" />
                          <h3 className="font-semibold text-blue-700">{technology}</h3>
                        </div>
                        <p className="text-sm text-blue-600">
                          Used for {technology.toLowerCase().includes('react') ? 'building user interfaces' : 
                          technology.toLowerCase().includes('node') ? 'server-side logic' : 
                          technology.toLowerCase().includes('tailwind') ? 'styling components' : 
                          technology.toLowerCase().includes('supabase') ? 'database management' : 
                          'various application functionalities'}
                        </p>
                      </div>
                    ))}
                </div>
              </div>

              {/* Features Section */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-4 border-b border-gray-200 flex items-center">
                  <Zap className="w-6 h-6 mr-3 text-blue-500" />
                  Key Features
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-xl border border-blue-100">
                    <div className="flex items-center mb-3">
                      <div className="bg-blue-100 p-2 rounded-lg mr-3">
                        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="font-semibold text-gray-900">Responsive Design</h3>
                    </div>
                    <p className="text-gray-700 text-sm">Adapts seamlessly to all device sizes from mobile to desktop, ensuring optimal user experience across platforms.</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-xl border border-blue-100">
                    <div className="flex items-center mb-3">
                      <div className="bg-blue-100 p-2 rounded-lg mr-3">
                        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="font-semibold text-gray-900">Performance Optimized</h3>
                    </div>
                    <p className="text-gray-700 text-sm">Implements best practices for fast loading times and smooth interactions, enhancing user engagement.</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-xl border border-blue-100">
                    <div className="flex items-center mb-3">
                      <div className="bg-blue-100 p-2 rounded-lg mr-3">
                        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="font-semibold text-gray-900">Modern UI/UX</h3>
                    </div>
                    <p className="text-gray-700 text-sm">Features an intuitive interface with contemporary design principles that prioritize user needs and interactions.</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-xl border border-blue-100">
                    <div className="flex items-center mb-3">
                      <div className="bg-blue-100 p-2 rounded-lg mr-3">
                        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="font-semibold text-gray-900">Clean Architecture</h3>
                    </div>
                    <p className="text-gray-700 text-sm">Built with maintainable code structure and organization, making it easy to extend and scale over time.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Details Sidebar */}
            <div className="w-full lg:w-80">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 sticky top-24">
                <h3 className="text-lg font-semibold text-gray-900 mb-6 pb-3 border-b border-gray-200">
                  Project Details
                </h3>
                
                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-700 mb-3 uppercase tracking-wide">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech &&
                      project.tech.map((t, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1.5 bg-blue-100 text-blue-700 rounded-lg text-sm font-medium"
                        >
                          {t}
                        </span>
                      ))}
                  </div>
                </div>
                
                {/* Project Links */}
                <div className="space-y-3 mb-6">
                  {project.live_url && (
                    <a
                      href={project.live_url}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center w-full px-4 py-2.5 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg hover:from-blue-600 hover:to-indigo-600 transition-all shadow-md hover:shadow-lg text-sm font-medium"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Live
                    </a>
                  )}
                  
                  {project.github_url && (
                    <a
                      href={project.github_url}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center w-full px-4 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all text-sm font-medium"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View Source Code
                    </a>
                  )}
                </div>
                
                {/* Additional Info */}
                <div className="pt-4 border-t border-gray-200">
                  
                  {project.date && (
                    <div className="mb-3">
                      <div className="text-xs text-gray-500 mb-1">Completion Date</div>
                      <div className="text-gray-900 font-medium">{project.date}</div>
                    </div>
                  )}
                  
                  {project.client && (
                    <div className="mb-3">
                      <div className="text-xs text-gray-500 mb-1">Client</div>
                      <div className="text-gray-900 font-medium">{project.client}</div>
                    </div>
                  )}
                  
                  {project.category && (
                    <div>
                      <div className="text-xs text-gray-500 mb-1">Category</div>
                      <div className="text-gray-900 font-medium">{project.category}</div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProjectDetail;