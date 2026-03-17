"use client";

import { useEffect, useMemo, useState } from "react";
import { supabase } from "../../../supabase/supabaseClient";
import type { Project } from "../types";

const DEFAULT_TECH_SUGGESTIONS = [
    "React",
    "Next.js",
    "Vue",
    "Nuxt",
    "Angular",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "Bootstrap",
    "Material UI",
    "Node.js",
    "Express",
    "NestJS",
    "PostgreSQL",
    "MySQL",
    "MongoDB",
    "Redis",
    "Supabase",
    "Firebase",
    "Prisma",
    "REST API",
    "GraphQL",
    "Socket.IO",
    "Telegram Bot",
    "Stripe",
    "Payme",
    "Click",
    "Docker",
    "Nginx",
    "AWS",
    "Vercel",
    "Netlify",
];

type FormState = {
    title: string;
    description: string;
    image: string;
    live_url: string;
    order_num: number;
};

export default function PortfolioProjectModal(props: {
    open: boolean;
    loading: boolean;
    setLoading: (value: boolean) => void;
    editingProject: Project | null;
    nextOrderNum: number;
    onClose: () => void;
    onCreated: (project: Project) => void;
    onUpdated: (project: Project) => void;
}) {
    const { open, loading, setLoading, editingProject, nextOrderNum, onClose, onCreated, onUpdated } = props;

    const [form, setForm] = useState<FormState>({
        title: "",
        description: "",
        image: "",
        live_url: "",
        order_num: 0,
    });
    const [techList, setTechList] = useState<string[]>([]);
    const [techInput, setTechInput] = useState("");
    const [techFocused, setTechFocused] = useState(false);
    const [activeTechSuggestionIndex, setActiveTechSuggestionIndex] = useState(0);
    const [file, setFile] = useState<File | null>(null);

    useEffect(() => {
        if (!open) return;

        if (editingProject) {
            setForm({
                title: editingProject.title,
                description: editingProject.description,
                image: editingProject.image,
                live_url: editingProject.live_url,
                order_num: editingProject.order_num,
            });
            setTechList(editingProject.tech || []);
            setTechInput("");
            setFile(null);
            setActiveTechSuggestionIndex(0);
            return;
        }

        setForm({ title: "", description: "", image: "", live_url: "", order_num: nextOrderNum });
        setTechList([]);
        setTechInput("");
        setFile(null);
        setActiveTechSuggestionIndex(0);
    }, [open, editingProject, nextOrderNum]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
        }
    };

    const normalizeTech = (value: string) => value.trim().replace(/\s+/g, " ");
    const handleAddTech = (value?: string) => {
        const raw = value ?? techInput;
        const cleaned = normalizeTech(raw);
        if (!cleaned) return;

        const cleanedLower = cleaned.toLowerCase();
        if (techList.some((t) => normalizeTech(t).toLowerCase() === cleanedLower)) {
            setTechInput("");
            return;
        }

        setTechList((prev) => [...prev, cleaned]);
        setTechInput("");
        setActiveTechSuggestionIndex(0);
    };

    const filteredTechSuggestions = useMemo(() => {
        const q = normalizeTech(techInput).toLowerCase();
        if (!q) return [];
        return DEFAULT_TECH_SUGGESTIONS.filter((t) => {
            if (!t.toLowerCase().includes(q)) return false;
            return !techList.some((x) => normalizeTech(x).toLowerCase() === t.toLowerCase());
        }).slice(0, 8);
    }, [techInput, techList]);

    const showTechSuggestions = techFocused && filteredTechSuggestions.length > 0;

    const handleTechKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" || e.key === "Tab" || e.key === ",") {
            if (showTechSuggestions && filteredTechSuggestions[activeTechSuggestionIndex]) {
                e.preventDefault();
                handleAddTech(filteredTechSuggestions[activeTechSuggestionIndex]);
                return;
            }
            if (normalizeTech(techInput)) {
                e.preventDefault();
                handleAddTech();
            }
            return;
        }

        if (!showTechSuggestions) return;

        if (e.key === "ArrowDown") {
            e.preventDefault();
            setActiveTechSuggestionIndex((prev) =>
                Math.min(prev + 1, filteredTechSuggestions.length - 1)
            );
            return;
        }

        if (e.key === "ArrowUp") {
            e.preventDefault();
            setActiveTechSuggestionIndex((prev) => Math.max(prev - 1, 0));
            return;
        }

        if (e.key === "Escape") {
            e.preventDefault();
            setTechFocused(false);
        }
    };

    const close = () => {
        onClose();
    };

    const uploadIfNeeded = async (): Promise<string> => {
        let imageUrl = form.image;
        if (!file) return imageUrl;

        const fileName = `${Date.now()}-${file.name}`;
        const { error: uploadError } = await supabase.storage.from("protfolio-images").upload(fileName, file);
        if (uploadError) throw uploadError;

        const { data: publicUrl } = supabase.storage.from("protfolio-images").getPublicUrl(fileName);
        return publicUrl.publicUrl;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (loading) return;

        setLoading(true);
        try {
            const imageUrl = await uploadIfNeeded();

            if (editingProject) {
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

                if (error) throw error;

                onUpdated({
                    ...editingProject,
                    ...form,
                    image: imageUrl,
                    tech: techList,
                });
                close();
                return;
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
                .select()
                .single();

            if (error) throw error;
            if (data) onCreated(data as Project);
            close();
        } catch (err) {
            console.error(editingProject ? "Update error:" : "Insert error:", err);
        } finally {
            setLoading(false);
        }
    };

    if (!open) return null;

    return (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 px-4">
            <div className="bg-white rounded-3xl pt-4 w-full max-w-5xl shadow-2xl relative flex flex-col max-h-[90vh] border-2 border-blue-600">
                <h3 className="text-3xl font-semibold pb-4 text-gray-800 text-center sticky top-0 bg-white border-b px-6">
                    {editingProject ? "Edit Project" : "Add New Project"}
                </h3>

                <form onSubmit={handleSubmit} className="flex-1 overflow-hidden flex flex-col">
                    <div className="overflow-y-auto px-5 py-4">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                            <div className="lg:col-span-5 space-y-4">
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

                                <div>
                                    <label className="block text-gray-700 mb-2 font-medium">
                                        Project Image
                                    </label>
                                    <div className="border-2 border-dashed border-gray-300 rounded-2xl p-5 text-center cursor-pointer hover:border-blue-400 transition relative">
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
                                                className="mt-4 w-full h-56 lg:h-60 object-cover rounded-xl border"
                                            />
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="lg:col-span-7 space-y-4">
                                <div>
                                    <label className="block text-gray-700 mb-1 font-medium">
                                        Description
                                    </label>
                                    <textarea
                                        name="description"
                                        value={form.description}
                                        onChange={handleChange}
                                        placeholder="Write a short description..."
                                        rows={5}
                                        className="w-full border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition rounded-lg px-4 py-2 outline-none resize-none"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-700 mb-1 font-medium">
                                        Technologies
                                    </label>
                                    <div className="flex gap-2 relative">
                                        <div className="flex-1 relative">
                                            <input
                                                type="text"
                                                value={techInput}
                                                onChange={(e) => {
                                                    setTechInput(e.target.value);
                                                    setActiveTechSuggestionIndex(0);
                                                }}
                                                onKeyDown={handleTechKeyDown}
                                                onFocus={() => setTechFocused(true)}
                                                onBlur={() => {
                                                    setTimeout(() => setTechFocused(false), 120);
                                                }}
                                                placeholder="Add technology (e.g. React, Node.js)"
                                                className="w-full border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition rounded-lg px-4 py-2 outline-none"
                                            />

                                            {showTechSuggestions && (
                                                <div className="absolute z-50 mt-1 w-full rounded-lg border border-gray-200 bg-white shadow-lg overflow-hidden">
                                                    {filteredTechSuggestions.map((t, idx) => (
                                                        <button
                                                            key={t}
                                                            type="button"
                                                            onMouseDown={(ev) => ev.preventDefault()}
                                                            onClick={() => handleAddTech(t)}
                                                            className={`w-full text-left px-3 py-2 text-sm transition ${
                                                                idx === activeTechSuggestionIndex
                                                                    ? "bg-blue-50 text-blue-700"
                                                                    : "hover:bg-gray-50"
                                                            }`}
                                                        >
                                                            {t}
                                                        </button>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                        <button
                                            type="button"
                                            onClick={() => handleAddTech()}
                                            className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-medium rounded-lg hover:from-blue-700 hover:to-blue-600 transition"
                                        >
                                            Add
                                        </button>
                                    </div>

                                    <div className="flex flex-wrap gap-2 mt-3">
                                        {techList.map((t, i) => (
                                            <div
                                                key={`${t}-${i}`}
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

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

                                    <div>
                                        <label className="block text-gray-700 mb-1 font-medium">
                                            Display Order
                                        </label>
                                        <input
                                            type="number"
                                            name="order_num"
                                            value={form.order_num}
                                            onChange={(e) =>
                                                setForm({ ...form, order_num: Number(e.target.value) })
                                            }
                                            className="w-full border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition rounded-lg px-4 py-2 outline-none"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-end gap-3 border-t bg-white px-6 py-4 rounded-b-3xl">
                        <button
                            type="button"
                            onClick={close}
                            className="px-5 py-2.5 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition font-medium"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={loading}
                            className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-medium rounded-lg hover:from-blue-700 hover:to-blue-600 transition disabled:opacity-60 disabled:cursor-not-allowed"
                        >
                            {loading ? "Saving..." : editingProject ? "Update Project" : "Save Project"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

