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
                    Our Customer Story section presents a diverse portfolio of completed projects, from apartments and villas to resorts, hotels, restaurants, offices, and retail showrooms. Each story provides an in-depth view of our work, showcasing the unique design approach tailored to each space, whether residential, commercial, or hospitality-focused. Organized into easy-to-navigate categories, you can explore each project with a simple click, delving into the details that define our design expertise.                    </p>
                </div>
            </div>
        </div >
    );
};

export default Paragraph;
