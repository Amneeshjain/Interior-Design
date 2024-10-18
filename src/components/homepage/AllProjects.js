import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios';
import styles from '../../styles/AllProjects.module.css';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [projectTypes, setProjectTypes] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch project types from the first API
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

    // Fetch projects from the second API
    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get('https://backend-interior.onrender.com/api/project/projects');
                setProjects(response.data.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching projects:", error);
                setLoading(false);
            }
        };
        fetchProjects();
    }, []);

    // Display loading state
    if (loading) {
        return <p>Loading projects...</p>;
    }

    return (
        <div className="container py-5">
            <div className="text-center mb-4">
                <h2>Explore Our Projects</h2>
            </div>

            {/* Render merged project cards */}
            <div className="row justify-content-center">
                {projectTypes.map((projectType) => {
                    console.log("Current Project Type ID:", projectType._id); // Log current project type ID

                    // Find the first project that matches the current project type's _id
                    const firstProject = projects.find(p => {
                        console.log("Comparing:", p.projectType._id, projectType._id); // Log the comparison
                        return p.projectType._id === projectType._id;
                    });

                    console.log("First Project for type:", firstProject); // Debugging log

                    return (
                        <div key={projectType._id} className="col-lg-4 col-md-6 col-sm-12 mb-4">
                            <div className={styles.card}>
                                {/* Wrap the Image with Link component */}
                                <Link href={`/projects/type/${projectType._id}`}>
                                    <div>
                                        {/* Display the image of the first project of the current project type */}
                                        <img
                                            src={firstProject?.projectImage || '/default-image.jpg'}
                                            alt={firstProject?.projectName || 'Project Image'}
                                            layout="responsive"

                                            className={styles.projectImage}
                                        />
                                    </div>
                                </Link>

                                {/* Overlay content with project type */}
                                <div className={styles.overlay}>
                                    <h4 className={styles.projectTitle}>{projectType.project_type}</h4>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Projects;
