import React from 'react';
import styles from "../../styles/pararaph.module.css"

const Paragraph = () => {
    return (
        <div className='container py-5' style={{
            backgroundColor: "rgb(245, 245, 245)",
            marginTop: "60px"
        }}>
            <div className='row '>
                <div className={`${styles.p1} col-lg-12`}>
                    <p style={{ color: '#000', fontSize: '18px', lineHeight: '1.8', margin: 'auto' }}>
                        The Customer Story section showcases various projects, including apartments, villas, resorts, hotels, restaurants, offices, and retail showrooms. It provides easy access to project details across diverse categories, allowing users to explore by clicking links. The responsive design ensures a seamless experience across all devices.
                    </p>
                </div>
            </div>
        </div >
    );
};

export default Paragraph;
