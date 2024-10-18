import React from 'react';
import styles from '../../styles/logoslider.module.css'; // Ensure the import path is correct

const LogoSlider = () => {


    return (
        <div className={`container-fluid ${styles.mrp}`}  >
            <div class={styles.slider} style={{ overflow: "hidden" }}>
                <div class={styles.slide_track}>
                    <div class={styles.slide}>
                        <img src="/New logo_s 200 x 200/Ardee.webp" alt='img' />
                    </div>
                    <div class={styles.slide}>
                        <img src="/New logo_s 200 x 200/bptp.webp" alt='img' />
                    </div>
                    <div class={styles.slide}>
                        <img src="/New logo_s 200 x 200/DLF.webp" alt='img' />
                    </div>
                    <div class={styles.slide}>
                        <img src="/New logo_s 200 x 200/Emaar.webp" alt='img' />
                    </div>
                    <div class={styles.slide}>
                        <img src="/New logo_s 200 x 200/Fiserv.webp" alt='img' />
                    </div>
                    <div class={styles.slide}>
                        <img src="/New logo_s 200 x 200/HFI.webp" alt='img' />
                    </div>
                    <div class={styles.slide}>
                        <img src="/New logo_s 200 x 200/indian army.webp" alt='img' />
                    </div>
                    <div class={styles.slide}>
                        <img src="/New logo_s 200 x 200/Justdial.webp" alt='img' />
                    </div>
                    <div class={styles.slide}>
                        <img src="/New logo_s 200 x 200/Samsara.webp" alt='img' />
                    </div>
                    <div class={styles.slide}>
                        <img src="/New logo_s 200 x 200/Sierra.webp" alt='img' />
                    </div>
                    {/* <!-- same 9 slides doubled (duplicate) --> */}
                    <div class={styles.slide}>
                        <img src="/New logo_s 200 x 200/Sobha.webp" alt='img' />
                    </div>
                    <div class={styles.slide}>
                        <img src="/New logo_s 200 x 200/Ardee.webp" alt='img' />
                    </div>
                    <div class={styles.slide}>
                        <img src="/New logo_s 200 x 200/bptp.webp" alt='img' />
                    </div>
                    <div class={styles.slide}>
                        <img src="/New logo_s 200 x 200/DLF.webp" alt='img' />
                    </div>
                    <div class={styles.slide}>
                        <img src="/New logo_s 200 x 200/Emaar.webp" alt='img' />
                    </div>
                    <div class={styles.slide}>
                        <img src="/New logo_s 200 x 200/Fiserv.webp" alt='img' />
                    </div>
                    <div class={styles.slide}>
                        <img src="/New logo_s 200 x 200/HFI.webp" alt='img' />
                    </div>
                    <div class={styles.slide}>
                        <img src="/New logo_s 200 x 200/indian army.webp" alt='img' />
                    </div>
                    <div class={styles.slide}>
                        <img src="/New logo_s 200 x 200/Justdial.webp" alt='img' />
                    </div>
                    <div class={styles.slide}>
                        <img src="/New logo_s 200 x 200/Samsara.webp" alt='img' />
                    </div>
                    <div class={styles.slide}>
                        <img src="/New logo_s 200 x 200/Sierra.webp" alt='img' />
                    </div>
                    {/* <!-- same 9 slides doubled (duplicate) --> */}
                    <div class={styles.slide}>
                        <img src="/New logo_s 200 x 200/Sobha.webp" alt='img' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogoSlider;
