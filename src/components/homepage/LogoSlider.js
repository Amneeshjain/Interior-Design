import React from 'react';
import styles from '../../styles/logoslider.module.css'; // Ensure the import path is correct

const LogoSlider = () => {


    return (
        <div className={`container-fluid ${styles.mrp}`}  >
            <div class={styles.slider} style={{ overflowX: "hidden" }}>
                <div class={styles.slide_track}>
                    <div class={styles.slide}>
                        <img src="/Logo's in home page-20241009T121317Z-001/Logo_s in home page/Ardee mall.png" alt='img' />
                    </div>
                    <div class={styles.slide}>
                        <img src="/Logo's in home page-20241009T121317Z-001/Logo_s in home page/bptp.png" alt='img' />
                    </div>
                    <div class={styles.slide}>
                        <img src="/Logo's in home page-20241009T121317Z-001/Logo_s in home page/DLF.png" alt='img' />
                    </div>
                    <div class={styles.slide}>
                        <img src="/Logo's in home page-20241009T121317Z-001/Logo_s in home page/EMAAR.png" alt='img' />
                    </div>
                    <div class={styles.slide}>
                        <img src="/Logo's in home page-20241009T121317Z-001/Logo_s in home page/FINSERV.png" alt='img' />
                    </div>
                    <div class={styles.slide}>
                        <img src="/Logo's in home page-20241009T121317Z-001/Logo_s in home page/HFI.png" alt='img' />
                    </div>
                    <div class={styles.slide}>
                        <img src="/Logo's in home page-20241009T121317Z-001/Logo_s in home page/Indian Army.png" alt='img' />
                    </div>
                    <div class={styles.slide}>
                        <img src="/Logo's in home page-20241009T121317Z-001/Logo_s in home page/JUST DIAL.png" alt='img' />
                    </div>
                    <div class={styles.slide}>
                        <img src="/Logo's in home page-20241009T121317Z-001/Logo_s in home page/SIERA.png" alt='img' />
                    </div>
                    <div class={styles.slide}>
                        <img src="/Logo's in home page-20241009T121317Z-001/Logo_s in home page/sobha city.png" alt='img' />
                    </div>
                    {/* <!-- same 9 slides doubled (duplicate) --> */}
                    <div class={styles.slide}>
                        <img src="/Logo's in home page-20241009T121317Z-001/Logo_s in home page/Ardee mall.png" alt='img' />
                    </div>
                    <div class={styles.slide}>
                        <img src="/Logo's in home page-20241009T121317Z-001/Logo_s in home page/bptp.png" alt='img' />
                    </div>
                    <div class={styles.slide}>
                        <img src="/Logo's in home page-20241009T121317Z-001/Logo_s in home page/DLF.png" alt='img' />
                    </div>
                    <div class={styles.slide}>
                        <img src="/Logo's in home page-20241009T121317Z-001/Logo_s in home page/EMAAR.png" alt='img' />
                    </div>
                    <div class={styles.slide}>
                        <img src="/Logo's in home page-20241009T121317Z-001/Logo_s in home page/FINSERV.png" alt='img' />
                    </div>
                    <div class={styles.slide}>
                        <img src="/Logo's in home page-20241009T121317Z-001/Logo_s in home page/HFI.png" alt='img' />
                    </div>
                    <div class={styles.slide}>
                        <img src="/Logo's in home page-20241009T121317Z-001/Logo_s in home page/Indian Army.png" alt='img' />
                    </div>
                    <div class={styles.slide}>
                        <img src="/Logo's in home page-20241009T121317Z-001/Logo_s in home page/JUST DIAL.png" alt='img' />
                    </div>
                    <div class={styles.slide}>
                        <img src="/Logo's in home page-20241009T121317Z-001/Logo_s in home page/SIERA.png" alt='img' />
                    </div>
                    <div class={styles.slide}>
                        <img src="/Logo's in home page-20241009T121317Z-001/Logo_s in home page/sobha city.png" alt='img' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogoSlider;
