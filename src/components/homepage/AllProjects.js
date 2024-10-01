import React from 'react';
import styles from "../../styles/AllProjects.module.css"

const cardData = [
    {
        image: "https://i1.wp.com/handluggageonly.co.uk/wp-content/uploads/2015/05/IMG_2813-s.jpg?w=1600&ssl=1",
        category: "Apartment",
        title: "Cozy Apartment",
        description: "A cozy apartment with modern amenities.",
        avatar: "https://github.com/lewagon/bootstrap-challenges/blob/master/11-Airbnb-search-form/images/anne.jpg?raw=true",
    },
    {
        image: "https://i0.wp.com/handluggageonly.co.uk/wp-content/uploads/2016/04/IMG_5589.jpg?w=1600&ssl=1",
        category: "Villas",
        title: "Luxury Villa",
        description: "A luxury villa with stunning views.",
        avatar: "https://github.com/lewagon/bootstrap-challenges/blob/master/11-Airbnb-search-form/images/anne.jpg?raw=true",
    },
    {
        image: "https://i0.wp.com/handluggageonly.co.uk/wp-content/uploads/2016/03/Positano-Weather.jpg?w=1600&ssl=1",
        category: "Offices",
        title: "Modern Office Space",
        description: "A modern office space for productive work.",
        avatar: "https://github.com/lewagon/bootstrap-challenges/blob/master/11-Airbnb-search-form/images/anne.jpg?raw=true",
    },
    {
        image: "https://i1.wp.com/handluggageonly.co.uk/wp-content/uploads/2015/05/IMG_2813-s.jpg?w=1600&ssl=1",
        category: "Resorts & Hotels",
        title: "Beach Resort",
        description: "A beach resort with all-inclusive packages.",
        avatar: "https://github.com/lewagon/bootstrap-challenges/blob/master/11-Airbnb-search-form/images/anne.jpg?raw=true",
    },
    {
        image: "https://i0.wp.com/handluggageonly.co.uk/wp-content/uploads/2016/04/IMG_5589.jpg?w=1600&ssl=1",
        category: "Restaurants & Cafes",
        title: "Charming Cafe",
        description: "A charming cafe serving delicious coffee.",
        avatar: "https://github.com/lewagon/bootstrap-challenges/blob/master/11-Airbnb-search-form/images/anne.jpg?raw=true",
    },
    {
        image: "https://i0.wp.com/handluggageonly.co.uk/wp-content/uploads/2016/03/Positano-Weather.jpg?w=1600&ssl=1",
        category: "Retail & Showroom",
        title: "Modern Showroom",
        description: "A modern showroom with the latest products.",
        avatar: "https://github.com/lewagon/bootstrap-challenges/blob/master/11-Airbnb-search-form/images/anne.jpg?raw=true",
    },
    {
        image: "https://i1.wp.com/handluggageonly.co.uk/wp-content/uploads/2015/05/IMG_2813-s.jpg?w=1600&ssl=1",
        category: "Builder Floor",
        title: "Spacious Builder Floor",
        description: "A spacious builder floor for family living.",
        avatar: "https://github.com/lewagon/bootstrap-challenges/blob/master/11-Airbnb-search-form/images/anne.jpg?raw=true",
    },
    {
        image: "https://i0.wp.com/handluggageonly.co.uk/wp-content/uploads/2016/04/IMG_5589.jpg?w=1600&ssl=1",
        category: "Farm House",
        title: "Charming Farm House",
        description: "A charming farm house with a beautiful garden.",
        avatar: "https://github.com/lewagon/bootstrap-challenges/blob/master/11-Airbnb-search-form/images/anne.jpg?raw=true",
    },
    {
        image: "https://i0.wp.com/handluggageonly.co.uk/wp-content/uploads/2016/03/Positano-Weather.jpg?w=1600&ssl=1",
        category: "Commercial Complex",
        title: "Modern Commercial Complex",
        description: "A modern commercial complex with various shops.",
        avatar: "https://github.com/lewagon/bootstrap-challenges/blob/master/11-Airbnb-search-form/images/anne.jpg?raw=true",
    },

];


const AllProjects = () => {
    return (
        <div className={styles.wrapperGrey}>
            <div className="container">
                <h2 className="text-center">Projects Categories</h2>
                <div className="row">
                    {cardData.map((card, index) => (
                        <div className="col-lg-4" key={index}>
                            <div className={styles.card} style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.2)), url(${card.image})` }}>
                                {/* <div className={styles.cardCategory}>{card.category}</div> */}
                                <div className={styles.cardDescription}>
                                    <h2>{card.title}</h2>
                                    <p>{card.description}</p>
                                </div>
                                {/* <img className={`${styles.cardUser} ${styles.avatarLarge}`} src={card.avatar} alt="User Avatar" /> */}
                                <a className={styles.cardLink} href="#"></a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AllProjects;
