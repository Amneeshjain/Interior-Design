"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "../../styles/customerStory.module.css";

const CustomerStory = () => {
    // State to store the fetched project types and projects
    const [projects, setProjects] = useState([]);
    const [projectTypes, setProjectTypes] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch project types from API
    useEffect(() => {
        const fetchProjectTypes = async () => {
            try {
                const response = await fetch("https://backend-interior.onrender.com/api/project/project-types");
                const data = await response.json();
                if (data.success) {
                    setProjectTypes(data.data);
                } else {
                    console.error("Failed to fetch project types:", data.message);
                }
            } catch (error) {
                console.error("Error fetching project types:", error);
            }
        };
        fetchProjectTypes();
    }, []);

    // Fetch projects from API
    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get(`https://backend-interior.onrender.com/api/project/projects`);
                setProjects(response.data.data); // Set the projects data
                setLoading(false);
            } catch (error) {
                console.error("Error fetching projects:", error);
                setLoading(false);
            }
        };
        fetchProjects();
    }, []);

    if (loading) {
        return <p>Loading customer stories...</p>;
    }

    return (
        <div className="container py-5">
            <h2 className={`text-center mb-5 ${styles.heading}`}>Customer Stories</h2>

            {/* Display Projects and their Types in a Single Card */}
            <div className="row">
                {projectTypes.map((type) => (
                    <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={type._id}>
                        <div className={`card h-100 shadow ${styles.cardHover} ${styles.cardBackground}`}>
                            <div className="card-body">
                                <h5 className={`card-title ${styles.categoryTitle}`}>{type.project_type}</h5>
                                {projects
                                    .filter((project) => project.projectType._id === type._id)
                                    .map((project) => (
                                        <div key={project._id} className="mt-3">
                                           
                                            <Link href={`/project-detail/${project.project_slug}`}>
                                                <h6 className={styles.projectName}>{project.projectName}</h6>
                                            </Link>
                                        </div>
                                    ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CustomerStory;
