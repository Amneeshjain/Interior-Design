"use client";
import { useState, useEffect } from "react";
import styles from "../../styles/counter.module.css"
import CountUp from "react-countup";
import { FaClock, FaBuilding, FaUsers, FaCheckCircle } from "react-icons/fa";
const Counter = () => {
    const [startCounter, setStartCounter] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const triggerPosition = 500;
            if (window.scrollY > triggerPosition && !startCounter) {
                setStartCounter(true);
                window.removeEventListener("scroll", handleScroll);
            }
        };
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [startCounter]);

    const counterData = [
        {
            icon: <FaClock size={40} color="#007BFF" />,
            count: 20,
            suffix: "+",
            label: "Years Experience",
            subtitle: "Estd. in 2004",
        },
        {
            icon: <FaBuilding size={40} color="#28A745" />,
            count: 350000,
            separator: ",",
            label: "Sqft",
            subtitle: "Currently Under Construction",
        },
        {
            icon: <FaUsers size={40} color="#FFC107" />,
            count: 25,
            suffix: "+",
            label: "Team Members",
            subtitle: "And Growing",
        },
        {
            icon: <FaCheckCircle size={40} color="#DC3545" />,
            count: 250,
            suffix: "+",
            label: "Projects",
            subtitle: "Completed Successfully",
        },
    ];

    return (
        <div className={`container ${styles.margin}`}>
            <div className={`row rounded  py-3`}>
                {counterData.map((item, index) => (
                    <div className="col-lg-3 col-md-6 mb-4" key={index}>
                        <div className="text-center p-4 bg-white rounded shadow">
                            <div className="mb-3">{item.icon}</div>
                            <h3 className="text-uppercase mb-2" style={{ fontWeight: "bold", fontSize: "28px" }}>
                                {startCounter ? (
                                    <CountUp end={item.count} duration={5} separator={item.separator || ""} />
                                ) : (
                                    "0"
                                )}
                                <span>{item.suffix}</span>
                            </h3>
                            <p className="text-muted mb-1">{item.label}</p>
                            <p style={{ fontSize: "14px", color: "#6c757d" }}>{item.subtitle}</p>
                            <hr />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Counter;
