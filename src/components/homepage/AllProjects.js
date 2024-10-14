import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link'; // Import Link
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
                    console.log(data.data);
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
                console.log(response.data.data);
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
                {projectTypes.map((project) => (
                    <div key={project._id} className="col-lg-4 col-md-6 col-sm-12 mb-4">
                        <div className={styles.card}>
                            {/* Wrap the Image with Link component */}
                            <Link href={`/projects/type/${project._id}`}>
                                <div>
                                    {/* Display image from the projects API */}
                                    <Image
                                        src={projects[0]?.projectImage || '/default-image.jpg'}
                                        alt={projects[0]?.projectName || 'Project Image'}
                                        layout="responsive"
                                        width={300}
                                        height={200}
                                        className={styles.projectImage}
                                    />
                                </div>
                            </Link>

                            {/* Overlay content with project type and name */}
                            <div className={styles.overlay}>
                                <h4 className={styles.projectTitle}>{project.project_type}</h4>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
