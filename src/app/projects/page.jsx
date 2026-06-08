"use client";

import Image from "next/image";
import Link from "next/link";

const projects = [
    {
        id: 1,
        title: "House of Colours",
        category: "Residential",
        location: "Gurugram",
        image: "https://picsum.photos/900/700?random=11",
    },
    {
        id: 2,
        title: "Panda 18 Cafe",
        category: "Restaurant",
        location: "Ardee Mall",
        image: "https://picsum.photos/900/700?random=12",
    },
    {
        id: 3,
        title: "Taggd Office",
        category: "Corporate",
        location: "Gurugram",
        image: "https://picsum.photos/900/700?random=13",
    },
    {
        id: 4,
        title: "Luxury Villa",
        category: "Residential",
        location: "Delhi",
        image: "https://picsum.photos/900/700?random=14",
    },
    {
        id: 5,
        title: "Modern Workspace",
        category: "Office",
        location: "Noida",
        image: "https://picsum.photos/900/700?random=15",
    },
    {
        id: 6,
        title: "Fine Dining Lounge",
        category: "Hospitality",
        location: "Chandigarh",
        image: "https://picsum.photos/900/700?random=16",
    },
];

export default function ProjectsPage() {
    return (
        <section className="bg-gradient-to-b from-white to-orange-50/20 py-20">
            <div className="max-w-7xl mx-auto px-5">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="inline-flex rounded-full bg-orange-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-orange-600">
                        Our Portfolio
                    </span>

                    <h1 className="mt-5 text-4xl md:text-6xl font-bold text-gray-900">
                        Crafted Spaces
                    </h1>

                    <p className="mt-5 max-w-2xl mx-auto text-gray-500">
                        Explore our collection of residential, commercial,
                        office and hospitality projects designed with
                        creativity and precision.
                    </p>
                </div>

                {/* Projects */}
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project) => (
                        <Link
                            key={project.id}
                            href={`/projects/${project.id}`}
                            className="group block overflow-hidden rounded bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                        >
                            {/* Image */}
                            <div className="relative h-[420px] overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    unoptimized
                                    className="object-cover transition duration-700 group-hover:scale-110"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                                <div className="absolute top-5 left-5 rounded-full bg-orange-500 px-4 py-2 text-xs font-medium text-white">
                                    {project.category}
                                </div>

                                <div className="absolute bottom-0 left-0 right-0 p-6">
                                    <p className="text-sm text-orange-300">
                                        {project.location}
                                    </p>

                                    <h3 className="mt-2 text-2xl font-bold text-white">
                                        {project.title}
                                    </h3>

                                    <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-5 py-2 text-sm font-medium text-white backdrop-blur-md transition-all duration-300 group-hover:bg-orange-500 group-hover:border-orange-500">
                                        View Project
                                        <span className="transition-transform duration-300 group-hover:translate-x-1">
                                            →
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-20 rounded-[32px] bg-black px-8 py-14 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                        Have a Project in Mind?
                    </h2>

                    <p className="mt-4 max-w-2xl mx-auto text-gray-400">
                        From luxury residences to modern commercial spaces,
                        we transform ideas into inspiring environments.
                    </p>

                    <Link
                        href="/contact"
                        className="mt-8 inline-flex rounded-xl bg-orange-500 px-8 py-3 font-medium text-white transition hover:bg-orange-600 hover:shadow-xl hover:shadow-orange-500/30"
                    >
                        Get In Touch
                    </Link>
                </div>
            </div>
        </section>
    );
}