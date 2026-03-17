"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../../supabase/supabaseClient";
import { ExternalLink, Eye, Trash, Edit } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import type { Project } from "../types";
import PortfolioProjectModal from "../components/PortfolioProjectModal";

export default function PortfolioAdminPage() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [openModal, setOpenModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const [editingProject, setEditingProject] = useState<Project | null>(null);
    const [nextOrderNum, setNextOrderNum] = useState(1);
    const [confirmDelete, setConfirmDelete] = useState(false);
    const [deleteId, setDeleteId] = useState<number | null>(null);

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
        else setProjects((data || []) as Project[]);
    };

    const fetchNextOrderNum = async () => {
        const { data, error } = await supabase
            .from("easy_it_profile")
            .select("order_num")
            .order("order_num", { ascending: false })
            .limit(1);

        if (error) {
            console.error("Error fetching max order:", error);
            setNextOrderNum(1);
            return;
        }

        const maxOrder = (data?.[0]?.order_num as number | undefined) || 0;
        setNextOrderNum(maxOrder + 1);
    };

    const handleOpenCreate = async () => {
        setEditingProject(null);
        await fetchNextOrderNum();
        setOpenModal(true);
    };

    const handleEdit = (project: Project) => {
        setEditingProject(project);
        setOpenModal(true);
    };

    const closeModal = () => {
        setOpenModal(false);
        setEditingProject(null);
    };

    const handleDelete = async (id: number) => {
        const { error } = await supabase.from("easy_it_profile").delete().eq("id", id);
        if (error) console.error("Delete error:", error);
        else {
            setTimeout(() => {
                setProjects((prev) => prev.filter((p) => p.id !== id));
            }, 500);
        }
    };

    const normalizedQuery = searchQuery.trim().toLowerCase();
    const visibleProjects = projects
        .slice()
        .sort((a, b) => a.order_num - b.order_num)
        .filter((p) => {
            if (!normalizedQuery) return true;
            return (p.title || "").toLowerCase().includes(normalizedQuery);
        });

    return (
        <section id="portfolio" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
                    Our Portfolio
                </h2>

                <div className="mb-6 flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
                    <div className="flex-1">
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search by project title..."
                            className="w-full border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition rounded-lg px-4 py-2 outline-none bg-white"
                        />
                        {normalizedQuery && (
                            <div className="mt-2 text-sm text-gray-500">
                                Showing {visibleProjects.length} of {projects.length}
                            </div>
                        )}
                    </div>
                    {searchQuery && (
                        <button
                            type="button"
                            onClick={() => setSearchQuery("")}
                            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition font-medium"
                        >
                            Clear
                        </button>
                    )}
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence>
                        {visibleProjects.map((project) => (
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
                                    <div className="absolute top-3 right-3 flex gap-2 z-40">
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

                                    <div className="relative overflow-hidden">
                                        {project.image && (
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                                            />
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

                                    <div className="p-6">
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="text-gray-600 mb-4 line-clamp-3">
                                            {project.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {(project.tech || []).map((t, i) => (
                                                <span
                                                    key={`${t}-${i}`}
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

                <div className="text-center mt-12">
                    <button
                        onClick={handleOpenCreate}
                        className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                    >
                        + Add Project
                    </button>
                </div>

                {!openModal && (
                    <button
                        type="button"
                        onClick={handleOpenCreate}
                        aria-label="Add project"
                        className="fixed bottom-6 right-6 z-40 h-14 w-14 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 flex items-center justify-center"
                    >
                        <span className="text-2xl leading-none">+</span>
                    </button>
                )}

                <PortfolioProjectModal
                    open={openModal}
                    loading={loading}
                    setLoading={setLoading}
                    editingProject={editingProject}
                    nextOrderNum={nextOrderNum}
                    onClose={closeModal}
                    onCreated={(p) => setProjects((prev) => [p, ...prev])}
                    onUpdated={(p) => setProjects((prev) => prev.map((x) => (x.id === p.id ? p : x)))}
                />

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
                                        if (deleteId != null) handleDelete(deleteId);
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

