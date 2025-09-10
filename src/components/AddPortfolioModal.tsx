"use client";

import { useEffect, useState } from "react";
import { supabase } from "../supabase/supabaseClient";
import { ExternalLink, Eye, Trash } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    tech: string[];
    live_url: string;
}

export default function PortfolioModal() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [openModal, setOpenModal] = useState(false);
    const [form, setForm] = useState({
        title: "",
        description: "",
        image: "",
        live_url: "",
    });
    const [techList, setTechList] = useState<string[]>([]);
    const [techInput, setTechInput] = useState("");
    const [file, setFile] = useState<File | null>(null);
    const navigator = useNavigate();

    useEffect(() => {
        fetchProjects();
    }, []);

    const fetchProjects = async () => {
        const { data, error } = await supabase
            .from("easy_it_profile")
            .select("*")
            .order("id", { ascending: false });
        if (error) console.error("Fetch error:", error);
        else setProjects(data || []);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
        }
    };

    const handleAddTech = () => {
        if (techInput.trim()) {
            setTechList([...techList, techInput.trim()]);
            setTechInput("");
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        let imageUrl = "";

        if (file) {
            const fileName = `${Date.now()}-${file.name}`;
            const { error: uploadError } = await supabase.storage
                .from("protfolio-images")
                .upload(fileName, file);

            if (uploadError) {
                console.error("Upload error:", uploadError);
                return;
            }

            const { data: publicUrl } = supabase.storage
                .from("protfolio-images")
                .getPublicUrl(fileName);

            imageUrl = publicUrl.publicUrl;
        }

        const { data, error } = await supabase
            .from("easy_it_profile")
            .insert([
                {
                    title: form.title,
                    description: form.description,
                    image: imageUrl,
                    tech: techList,
                    live_url: form.live_url,
                },
            ])
            .select();

        if (error) {
            console.error("Insert error:", error);
        } else {
            setProjects([...projects, ...data]);
            setOpenModal(false);
            setForm({ title: "", description: "", image: "", live_url: "" });
            setTechList([]);
            setTechInput("");
            setFile(null);
        }
    };

    // DELETE function
    const handleDelete = async (id: number) => {
        const { error } = await supabase
            .from("easy_it_profile")
            .delete()
            .eq("id", id);

        if (error) {
            console.error("Delete error:", error);
        } else {
            setProjects(projects.filter((project) => project.id !== id));
        }
    };

    return (
        <section id="portfolio" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
                    Our Portfolio
                </h2>

                {/* Projects grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group relative"
                        >
                            {/* Delete button */}
                            <button
                                onClick={() => handleDelete(project.id)}
                                className="absolute top-3 right-3 z-50 bg-red-500/80 hover:bg-red-600 text-white p-2 rounded-full shadow-md transition"
                            >
                                <Trash className="w-4 h-4" />
                            </button>

                            {/* Image + hover overlay */}
                            <div className="relative overflow-hidden">
                                {project.image && (
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                                    <div className="flex gap-3">
                                        {/* View project detail (demo) */}
                                        <button className="bg-white/20 backdrop-blur-lg p-2 rounded-full hover:bg-white/30 transition-colors"
                                            onClick={() => navigator(`/portfolio/${project.id}`)}
                                        >
                                            <Eye className="w-5 h-5 text-white" />
                                        </button>
                                        <a
                                            href={project.live_url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-white/20 backdrop-blur-lg p-2 rounded-full hover:bg-white/30 transition-colors"
                                        >
                                            <ExternalLink className="w-5 h-5 text-white" />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 mb-4 line-clamp-3">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((t, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full text-sm font-medium"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Add project button */}
                <div className="text-center mt-12">
                    <button
                        onClick={() => setOpenModal(true)}
                        className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                    >
                        + Add Project
                    </button>
                </div>

                {/* Modal */}
                {openModal && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                        <div className="bg-white p-6 rounded-2xl w-full max-w-lg shadow-xl">
                            <h3 className="text-2xl font-semibold mb-4">Add New Project</h3>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <input
                                    type="text"
                                    name="title"
                                    value={form.title}
                                    onChange={handleChange}
                                    placeholder="Project Title"
                                    className="w-full border px-3 py-2 rounded"
                                    required
                                />
                                <textarea
                                    name="description"
                                    value={form.description}
                                    onChange={handleChange}
                                    placeholder="Project Description"
                                    className="w-full border px-3 py-2 rounded"
                                    required
                                />
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleFileChange}
                                    className="w-full border px-3 py-2 rounded"
                                />
                                <div className="flex gap-2">
                                    <input
                                        type="text"
                                        value={techInput}
                                        onChange={(e) => setTechInput(e.target.value)}
                                        placeholder="Add Technology"
                                        className="flex-1 border px-3 py-2 rounded"
                                    />
                                    <button
                                        type="button"
                                        onClick={handleAddTech}
                                        className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
                                    >
                                        Add
                                    </button>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {techList.map((t, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 bg-gray-200 rounded-full text-sm"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                                <input
                                    type="url"
                                    name="live_url"
                                    value={form.live_url}
                                    onChange={handleChange}
                                    placeholder="Live Project URL"
                                    className="w-full border px-3 py-2 rounded"
                                />
                                <div className="flex justify-end gap-3">
                                    <button
                                        type="button"
                                        onClick={() => setOpenModal(false)}
                                        className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                                    >
                                        Save
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}