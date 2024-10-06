import Image from 'next/image';
import styles from '../../styles/timeline.module.css';

const Timeline = () => {
    const timelineData = [
        {
            year: '2022',
            imgSrc: '/calendar-icon.png',
            title: 'Lorem Ipsum',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            year: '2023',
            imgSrc: '/key-icon.png',
            title: 'Lorem Ipsum',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            year: '2024',
            imgSrc: '/chart-icon.png',
            title: 'Lorem Ipsum',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            year: '2025',
            imgSrc: '/refresh-icon.png',
            title: 'Lorem Ipsum',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            year: '2026',
            imgSrc: '/flag-icon.png',
            title: 'Lorem Ipsum',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
    ];

    return (
        <section className={styles.timelineSection}>
            <div className="container my-5">
                <h2 className="text-center mb-5">Event Node Timeline – Slide Template</h2>
                <div className={`d-flex flex-wrap justify-content-center position-relative ${styles.timeline}`}>
                    {timelineData.map((item, index) => (
                        <div className={`col-12 col-md-2 text-center ${styles.timelineItem}`} key={index}>
                            <div className={styles.iconBox}>
                                <Image
                                    src={item.imgSrc}
                                    alt={`${item.title} icon`}
                                    width={60}
                                    height={60}
                                    className="img-fluid"
                                />
                            </div>
                            <h4 className={styles.year}>{item.year}</h4>
                            <h5 className={styles.title}>{item.title}</h5>
                            <p className={styles.description}>{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Timeline;
