"use client";

import { useEffect, useState } from "react";
import { supabase } from "../supabase/supabaseClient";
import { ExternalLink, Eye, Trash, Edit } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    tech: string[];
    live_url: string;
    order_num: number;
}

export default function PortfolioModal() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [openModal, setOpenModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const [editingProject, setEditingProject] = useState<Project | null>(null);
    const [form, setForm] = useState({
        title: "",
        description: "",
        image: "",
        live_url: "",
        order_num: 0,
    });
    const [techList, setTechList] = useState<string[]>([]);
    const [techInput, setTechInput] = useState("");
    const [file, setFile] = useState<File | null>(null);
    const [confirmDelete, setConfirmDelete] = useState(false);
    const [deleteId, setDeleteId] = useState<number | null>(null);

    const navigator = useNavigate();

    useEffect(() => {
        fetchProjects();
    }, []);

    const handleOpenModal = async () => {
        const { data, error } = await supabase
            .from("easy_it_profile")
            .select("order_num")
            .order("order_num", { ascending: false })
            .limit(1);

        if (error) {
            console.error("Error fetching max order:", error);
        } else {
            const maxOrder = data?.[0]?.order_num || 0;
            setForm((prev) => ({ ...prev, order_num: maxOrder + 1 }));
        }

        setOpenModal(true);
    };

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

    // ---------------- ADD PROJECT ----------------
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        let imageUrl = form.image;

        if (file) {
            const fileName = `${Date.now()}-${file.name}`;
            const { error: uploadError } = await supabase.storage
                .from("protfolio-images")
                .upload(fileName, file);
            if (uploadError) {
                console.error("Upload error:", uploadError);
                setLoading(false);
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
                    order_num: form.order_num,
                },
            ])
            .select();

        if (error) console.error("Insert error:", error);
        else {
            setProjects([...projects, ...data]);
            closeModal();
        }

        setLoading(false);
    };

    // ---------------- UPDATE PROJECT ----------------
    const handleUpdate = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!editingProject) return;
        setLoading(true);
        let imageUrl = form.image;

        if (file) {
            const fileName = `${Date.now()}-${file.name}`;
            const { error: uploadError } = await supabase.storage
                .from("protfolio-images")
                .upload(fileName, file);
            if (uploadError) {
                console.error("Upload error:", uploadError);
                setLoading(false);
                return;
            }

            const { data: publicUrl } = supabase.storage
                .from("protfolio-images")
                .getPublicUrl(fileName);
            imageUrl = publicUrl.publicUrl;
        }

        const { error } = await supabase
            .from("easy_it_profile")
            .update({
                title: form.title,
                description: form.description,
                image: imageUrl,
                tech: techList,
                live_url: form.live_url,
                order_num: form.order_num,
            })
            .eq("id", editingProject.id);

        if (error) {
            console.error("Update error:", error);
        } else {
            setProjects((prev) =>
                prev.map((p) =>
                    p.id === editingProject.id
                        ? { ...p, ...form, tech: techList, image: imageUrl }
                        : p
                )
            );
            closeModal();
        }
        setLoading(false);
    };

    // ---------------- DELETE PROJECT ----------------
    const handleDelete = async (id: number) => {
        const { error } = await supabase.from("easy_it_profile").delete().eq("id", id);
        if (error) console.error("Delete error:", error);
        else {
            setTimeout(() => {
                setProjects(projects.filter((p) => p.id !== id));
            }, 1000);
        }
    };

    // ---------------- OPEN EDIT MODAL ----------------
    const handleEdit = (project: Project) => {
        setEditingProject(project);
        setForm({
            title: project.title,
            description: project.description,
            image: project.image,
            live_url: project.live_url,
            order_num: project.order_num,
        });
        setTechList(project.tech);
        setFile(null);
        setOpenModal(true);
    };

    // ---------------- CLOSE MODAL ----------------
    const closeModal = () => {
        setOpenModal(false);
        setEditingProject(null);
        setForm({ title: "", description: "", image: "", live_url: "", order_num: 0 });
        setTechList([]);
        setTechInput("");
        setFile(null);
    };

    return (
        <section id="portfolio" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
                    Our Portfolio
                </h2>

                {/* Projects grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence>
                        {projects.sort((a, b) => a.order_num - b.order_num).map((project) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{
                                    opacity: 0,
                                    scale: 0.6,
                                    y: 100,
                                    rotate: Math.random() * 15 - 7,
                                    filter: "blur(5px)",
                                    clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
                                    transition: {
                                        duration: 0.8,
                                        ease: "easeInOut",
                                    },
                                }}
                                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group relative"
                            >

                                {/* Action buttons */}
                                <div className="absolute top-3 right-3 flex gap-2 z-50">
                                    <button
                                        onClick={() => handleEdit(project)}
                                        className="bg-blue-500/80 hover:bg-blue-600 text-white p-2 rounded-full shadow-md transition"
                                    >
                                        <Edit className="w-4 h-4" />
                                    </button>
                                    <button
                                        onClick={() => {
                                            setDeleteId(project.id);
                                            setConfirmDelete(true);
                                        }}
                                        className="bg-red-500/80 hover:bg-red-600 text-white p-2 rounded-full shadow-md transition"
                                    >
                                        <Trash className="w-4 h-4" />
                                    </button>
                                </div>

                                {/* Image */}
                                <div className="relative overflow-hidden">
                                    {project.image && (
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                                        >
                                        </img>
                                    )}
                                    <div className="absolute w-6 h-6 top-3 left-3 items-center flex justify-center border border-gray-800 rounded-full bg-white">
                                        {project.order_num}
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                                        <div className="flex gap-3">
                                            <button
                                                className="bg-white/20 backdrop-blur-lg p-2 rounded-full hover:bg-white/30 transition-colors"
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
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* Add project button */}
                <div className="text-center mt-12">
                    <button
                        onClick={() => handleOpenModal()}
                        className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                    >
                        + Add Project
                    </button>
                </div>

                {/* Modal */}
                {openModal && (
                    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 px-4">
                        <div className="bg-white rounded-3xl pt-4 w-full max-w-lg shadow-2xl relative flex flex-col max-h-[90vh]">
                            {/* Scrollable content */}
                            <h3 className="text-3xl font-semibold pb-4 text-gray-800 text-center sticky top-0 bg-white border-b">
                                {editingProject ? "Edit Project" : "Add New Project"}
                            </h3>
                            <div className="overflow-y-auto px-10 py-4">
                                <form
                                    onSubmit={editingProject ? handleUpdate : handleSubmit}
                                    className="space-y-5"
                                >
                                    {/* Title */}
                                    <div>
                                        <label className="block text-gray-700 mb-1 font-medium">
                                            Project Title
                                        </label>
                                        <input
                                            type="text"
                                            name="title"
                                            value={form.title}
                                            onChange={handleChange}
                                            placeholder="Enter project title..."
                                            className="w-full border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition rounded-lg px-4 py-2 outline-none"
                                            required
                                        />
                                    </div>

                                    {/* Description */}
                                    <div>
                                        <label className="block text-gray-700 mb-1 font-medium">
                                            Description
                                        </label>
                                        <textarea
                                            name="description"
                                            value={form.description}
                                            onChange={handleChange}
                                            placeholder="Write a short description..."
                                            rows={3}
                                            className="w-full border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition rounded-lg px-4 py-2 outline-none resize-none"
                                            required
                                        />
                                    </div>

                                    {/* Image Upload */}
                                    <div>
                                        <label className="block text-gray-700 mb-2 font-medium">
                                            Project Image
                                        </label>
                                        <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center cursor-pointer hover:border-blue-400 transition relative">
                                            <input
                                                type="file"
                                                accept="image/*"
                                                onChange={handleFileChange}
                                                className="absolute inset-0 opacity-0 cursor-pointer"
                                            />
                                            <p className="text-gray-500">Click or drag image here to upload</p>
                                            {(file || form.image) && (
                                                <img
                                                    src={file ? URL.createObjectURL(file) : form.image}
                                                    alt="Preview"
                                                    className="mt-4 w-full h-48 object-cover rounded-lg border"
                                                />
                                            )}
                                        </div>
                                    </div>

                                    {/* Technologies */}
                                    <div>
                                        <label className="block text-gray-700 mb-1 font-medium">
                                            Technologies
                                        </label>
                                        <div className="flex gap-2">
                                            <input
                                                type="text"
                                                value={techInput}
                                                onChange={(e) => setTechInput(e.target.value)}
                                                placeholder="Add technology (e.g. React, Node.js)"
                                                className="flex-1 border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition rounded-lg px-4 py-2 outline-none"
                                            />
                                            <button
                                                type="button"
                                                onClick={handleAddTech}
                                                className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-medium rounded-lg hover:from-blue-700 hover:to-blue-600 transition"
                                            >
                                                Add
                                            </button>
                                        </div>

                                        {/* Tech list */}
                                        <div className="flex flex-wrap gap-2 mt-3">
                                            {techList.map((t, i) => (
                                                <div
                                                    key={i}
                                                    className="flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-3 py-1 text-sm text-blue-700"
                                                >
                                                    <span>{t}</span>
                                                    <button
                                                        type="button"
                                                        onClick={() =>
                                                            setTechList(techList.filter((_, index) => index !== i))
                                                        }
                                                        className="text-red-500 hover:text-red-700 transition"
                                                        title="Remove"
                                                    >
                                                        ✕
                                                    </button>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Live URL */}
                                    <div>
                                        <label className="block text-gray-700 mb-1 font-medium">
                                            Live URL
                                        </label>
                                        <input
                                            type="url"
                                            name="live_url"
                                            value={form.live_url}
                                            onChange={handleChange}
                                            placeholder="https://example.com"
                                            className="w-full border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition rounded-lg px-4 py-2 outline-none"
                                        />
                                    </div>
                                    {/* Order number */}
                                    <div>
                                        <label className="block text-gray-700 mb-1 font-medium">Display Order</label>
                                        <input
                                            type="number"
                                            name="order_num"
                                            value={form.order_num}
                                            onChange={(e) => setForm({ ...form, order_num: Number(e.target.value) })}
                                            className="w-full border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition rounded-lg px-4 py-2 outline-none"
                                        />
                                    </div>
                                </form>
                            </div>

                            {/* Fixed footer (always visible) */}
                            <div className="flex justify-end gap-3 border-t bg-white px-8 py-4 rounded-b-3xl">
                                <button
                                    type="button"
                                    onClick={closeModal}
                                    className="px-5 py-2.5 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition font-medium"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={editingProject ? handleUpdate : handleSubmit}
                                    disabled={loading}
                                    className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-medium rounded-lg hover:from-blue-700 hover:to-blue-600 transition disabled:opacity-60 disabled:cursor-not-allowed"
                                >
                                    {loading
                                        ? "Saving..."
                                        : editingProject
                                            ? "Update Project"
                                            : "Save Project"}
                                </button>
                            </div>
                        </div>
                    </div>
                )}
                {confirmDelete && (
                    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-[100] px-4">
                        <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-sm text-center animate-fadeIn">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                                Confirm Delete
                            </h3>
                            <p className="text-gray-600 mb-6">
                                Are you sure you want to delete this project? <br />
                                This action cannot be undone.
                            </p>

                            <div className="flex justify-center gap-4">
                                <button
                                    onClick={() => setConfirmDelete(false)}
                                    className="px-5 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition font-medium"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={() => {
                                        handleDelete(deleteId!);
                                        setConfirmDelete(false);
                                        setDeleteId(null);
                                    }}
                                    className="px-5 py-2 bg-gradient-to-r from-red-600 to-red-500 text-white font-medium rounded-lg hover:from-red-700 hover:to-red-600 transition"
                                >
                                    Yes, Delete
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}