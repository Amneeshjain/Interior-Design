"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from "../../styles/customerStory.module.css"; 

const CustomerStory = () => {
    // State to store the data fetched from API
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true); 

    // Fetch data from API
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://backend-interior.onrender.com/api/project/projects"); 
                setData(response.data.data); 
                setLoading(false);
            } catch (error) {
                console.error("Error fetching customer stories:", error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <p>Loading customer stories...</p>;
    }

    return (
        <div className="container py-5">
            <h2 className={`text-center mb-5 ${styles.heading}`}>Customer Stories</h2>
            <div className="row">
                {data.map((project, index) => (
                    <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={index}>
                        <div className={`card h-100 shadow ${styles.cardHover} ${styles.cardBackground}`}>
                            <div className="card-body">
                                <h5 className={`card-title ${styles.categoryTitle}`}>{project.project_type}</h5>
                                <p className={styles.description}>{project.type_description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CustomerStory;
