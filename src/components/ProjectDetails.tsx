import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const allProjects = [
    { id: 1, title: "E-Commerce Platform", description: "Modern online store with advanced features", image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800", tech: ["React", "Node.js", "MongoDB"], liveUrl: "#", githubUrl: "#" },
    { id: 2, title: "Task Management App", description: "Collaborative project management solution", image: "https://images.pexels.com/photos/7688374/pexels-photo-7688374.jpeg?auto=compress&cs=tinysrgb&w=800", tech: ["Vue.js", "Express", "PostgreSQL"], liveUrl: "#", githubUrl: "#" },
    { id: 3, title: "AI Chat Bot", description: "Intelligent customer service automation", image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800", tech: ["Python", "TensorFlow", "Telegram API"], liveUrl: "#", githubUrl: "#" },
    { id: 4, title: "Real Estate Platform", description: "Property listing and management system", image: "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=800", tech: ["Next.js", "Prisma", "Supabase"], liveUrl: "#", githubUrl: "#" },
    { id: 5, title: "Open Source UI Library", description: "Component library for React applications", image: "https://images.pexels.com/photos/574069/pexels-photo-574069.jpeg?auto=compress&cs=tinysrgb&w=800", tech: ["React", "TypeScript", "Storybook"], liveUrl: "#", githubUrl: "#" },
    { id: 6, title: "Developer Portfolio Template", description: "Free portfolio template for developers", image: "https://images.pexels.com/photos/196655/pexels-photo-196655.jpeg?auto=compress&cs=tinysrgb&w=800", tech: ["Gatsby", "GraphQL", "Netlify"], liveUrl: "#", githubUrl: "#" },
    { id: 7, title: "API Documentation Tool", description: "Tool for generating beautiful API docs", image: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800", tech: ["Node.js", "Express", "Swagger"], liveUrl: "#", githubUrl: "#" }
];

const ProjectDetail = () => {
    const { id } = useParams();
    const project = allProjects.find((p) => p.id === parseInt(id ? id : ""));

    useEffect(() => {
        window.scroll(0, 0);
    })

    if (!project) {
        return <h2 className="text-center text-red-500">Project not found</h2>;
    }

    return (
        <section className="py-20 bg-gray-50">
            <div className="pb-4">
                <Link to="/" className="px-8 mx-auto hover:text-blue-600 ">
                    {'<- Back'}</Link>
            </div>
            <div className="container mx-auto px-6 lg:px-8">
                <h2 className="text-4xl font-bold mb-6">{project.title}</h2>
                <img src={project.image} alt={project.title} className="w-full h-64 object-cover rounded-lg mb-6" />
                <p className="text-gray-700 text-lg mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t, idx) => (
                        <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full">{t}</span>
                    ))}
                </div>
                <div className="flex gap-4">
                    <a href={project.liveUrl} target="_blank" rel="noreferrer" className="px-5 py-2 bg-blue-600 text-white rounded-lg">Live Demo</a>
                    <a href={project.githubUrl} target="_blank" rel="noreferrer" className="px-5 py-2 bg-gray-800 text-white rounded-lg">GitHub</a>
                </div>
            </div>
        </section>
    );
};

export default ProjectDetail;
