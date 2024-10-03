import React from 'react';
import styles from "../../styles/customerStory.module.css"

const data = {
    "Apartments & Villas": ["APT-Tata Primanti", "Villa- Tata Primanti", "APT- Sobha city", "APT- Winter Hills", "APT- Antara", "APT- DLF", "APT- DDA"],
    "Resorts and Hotels": ["Sierra", "Villa- Tata Primanti", "Sobha city", "Winter Hills", "Antara", "DLF", "DDA"],
    "Restaurants and Cafe's": ["Panda 18 Baani", "Panda 18 Ardee", "APT- Sobha city", "APT- Winter Hills", "APT- Antara", "APT- DLF", "APT- DDA"],
    "Offices": ["HFI", "Taggd", "Colonelz", "Dahau technologies"],
    "Retail & Showroom": ["Project 1", "Project 2", "Project 3", "Project 4", "Project 5"],
    "Builder Floor": ["APT-Tata Primanti", "Villa- Tata Primanti", "APT- Sobha city", "APT- Winter Hills", "APT- Antara", "APT- DLF", "APT- DDA"],
    "Farm house": ["F.H 1", "F.H 2", "F.H 3", "F.H 4"]
};

const CustomerStory = () => {
    return (
        <div className="container my-5">
            <h2 className="text-center mb-4">CUSTOMER STORY</h2>
            <div className="row">
                {Object.keys(data).map((category, index) => (
                    <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={index}>
                        <h5 className={styles.category_title}>{category}</h5>
                        <ul className="list-unstyled">
                            {data[category].map((item, idx) => (
                                <li key={idx}>
                                    <a href="#" className={styles.customer_link}>{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            {/* <p className="text-center mt-5">(Clicking on these will be redirected to Customer Story page)</p> */}
        </div>
    );
};

export default CustomerStory;
