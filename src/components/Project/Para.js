import React from 'react';
import styles from "../../styles/pararaph.module.css"

const Para = ({ textdata }) => {
    return (
        <div className='container py-5' style={{
            backgroundColor: "rgb(245, 245, 245)",
            marginTop: "60px"
        }}>
            <div className='row '>
                <div className={`${styles.p1} col-lg-12`}>
                    <p style={{ color: '#000', fontSize: '18px', lineHeight: '1.8', margin: 'auto' }}>{textdata}
                    </p>
                </div>
            </div>
        </div >
    );
};

export default Para;
