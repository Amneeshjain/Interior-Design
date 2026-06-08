"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import Paragraph from "./Paragraph";

const CustomerStory = () => {
  const [projects, setProjects] = useState([]);
  const [projectTypes, setProjectTypes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [typesRes, projectsRes] = await Promise.all([
          fetch("https://backend-interior.onrender.com/api/project/project-types"),
          fetch("https://backend-interior.onrender.com/api/project/projects"),
        ]);

        const typesData = await typesRes.json();
        const projectsData = await projectsRes.json();

        if (typesData.success) setProjectTypes(typesData.data);
        if (projectsData.success) setProjects(projectsData.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="py-20 text-center text-gray-500">
        Loading customer stories...
      </div>
    );
  }

  return (
    <section className="py-10 bg-gradient-to-b from-white via-orange-50/30 to-white">
      <div className="max-w-7xl mx-auto px-5">

        {/* HEADER */}
        <div className="text-center mb-10">
          <span className="inline-block px-3 py-1 text-xs rounded-full bg-orange-500 text-white shadow-sm">
            Our Work
          </span>

          <h2 className="text-2xl md:text-3xl font-semibold mt-3">
            Customer Stories
          </h2>

          <p className="text-sm text-gray-500 mt-2 max-w-md mx-auto">
            Explore projects categorized by design type and client needs.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-5">

          {projectTypes.map((type) => (
            <div
              key={type._id}
              className="
                group
                bg-white
                border border-orange-100
                rounded-2xl
                p-5
                shadow-sm
                hover:shadow-xl
                hover:-translate-y-1
                transition-all duration-300
              "
            >

              {/* CATEGORY */}
              <h3 className="
                text-base font-semibold mb-4 pb-2 border-b
                border-orange-100
                flex items-center gap-2
              ">
                <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                {type.project_type}
              </h3>

              {/* PROJECT LIST */}
              <div className="space-y-2">
                {projects
                  .filter(
                    (project) =>
                      project?.projectType?._id === type._id
                  )
                  .map((project) => (
                    <Link
                      key={project._id}
                      href={`/project-detail/${project.project_slug}`}
                      className="
                        flex items-center gap-2
                        text-sm text-gray-600
                        hover:text-orange-500
                        transition
                        group-hover:translate-x-1
                      "
                    >
                      <span className="text-orange-400">›</span>
                      {project.projectName}
                    </Link>
                  ))}
              </div>

            </div>
          ))}

        </div>
        <Paragraph/>
      </div>
  
    </section>
  );
};

export default CustomerStory;