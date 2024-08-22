import React from 'react'
import styles from "../../styles/client.module.css"



const contentData = [
    {
        title: "Transforming space for designing",
        text: "Our experts work on internal and external room decorations by making adequate space to make them more creative with flawless outcomes. The utmost professionalism of the team grasps ideal choices to recommend space transformation with creative construction methods. "
    },
    {
        title: "Responsibility in relationships ",
        text: "Colonelz is always looking for hassle-free solutions for interior design, construction, and room decoration to make a strong and trustworthy relationship with stakeholders and customers. "
    },
    {
        title: "Passionate about room decorations ",
        text: "Luxurious designs, adequate space, construction services, and furniture decorations bring motivation of customers to take the services. Our construction projects are truly remarkable due to crafting soothing and luxurious interiors."
    },
    {
        title: "Project-driven services with teamwork ",
        text: "Our team is dedicated to fulfilling commitments by delivering the best interior design projects through advanced constructions and architectural methods to satisfy our customers."
    }
];
const clients = [
    { letter: "A", names: ["Abhishek Gupta", "Aditya Birla Group", "Aga Khan Foundation", "Al Hamra Resort Oman", "Aliel Jewellery DFC Dubai", "Alliance Francaise de Delhi", "Aloft Hotels", "Ambuja Neotia Group", "Anjum Singh", "Ankit Chona", "Antara Dehradun", "Asahi Glass", "Ashish Dhawan", "Ashoka University", "Asian Paints", "Ather Energy", "Atul & Arti Kirloskar"] },
    { letter: "K", names: ["Kama Ayurveda", "Kanika & Aditya Kapoor", "Karan Paul", "Khaaja Chowk", "Khoj Studios, Khirkee", "Kohler"] },
    { letter: "L", names: ["Leisure Hotels", "Lemon Tree Hotels", "Levi’s Strauss & Co", "Life Yoga", "Lodha Developers"] },
    {
        letter: "M", names: ["M2K Group",
            "Madura Garments",
            "Manav Gangwani",
            "Manyata Developers",
            "Masti Lounge",
            "Max Estates",
            "McNROE Consumer Products",
            "Mehrangarh Museum Trust",
            "MKM Group",
            "Mrigesh Bhandari"]
    },
    { letter: "B", names: ["Bennet Coleman Group"] },
    {
        letter: "C", names: [
            "Caara Hospitality",
            "Café Lota, Crafts Museum",
            "Carma",
            "Central Park",
            "City Palace Jaipur",
            "Copper Chimney"
        ]
    },
    {
        letter: "N",
        names: [
            "Namrata Joshipura",
            "Nandita Basu",
            "National Crafts Museum, New Delhi",
            "Novotel Hotels"
        ]
    },
    {
        letter: "D", names: [
            "Devanya",
            "Devi Art Foundation",
            "Dhun, Jaipur",
            "Diva by Ritu Dalmia",
            "Dixon Technologies",
            "DLF"
        ]
    },
    { letter: "O", names: ["Ogaan", "Organic India"] },
    {
        letter: "E", names: ["Eicher Motors",
            "Ekaya Banaras",
            "Everest Industries"]
    },
    {
        letter: "P",
        names: [
            "Parallels IP Holdings GmbH",
            "Pidilite Group",
            "Piramal Realty",
            "Postcard Hotels",
            "Priya Paul",
            "Puri Constructions",
            "PVR Cinemas"
        ]
    },
    {
        letter: "F", names: ["Fashion Design Council of India",
            "Fastrack",
            "Firefox",
            "FTV",
            "Future Group"]
    },
    {
        letter: "G",
        names: [
            "Gaurav Gupta",
            "Godrej Properties Ltd",
            "Good Earth",
            "Government of India",
            "Government of Odisha",
            "Government of Punjab",
            "Goyal & Co"
        ]
    }
    ,
    {
        letter: "R",
        names: [
            "RAAS Hotels",
            "Radisson Hotels",
            "Rajesh Pratap Singh",
            "Reliance Industries",
            "Rishad Currimjee",
            "Ritu Kumar",
            "Rohit Bal",
            "Rohit Gandhi-Rahul Khanna",
            "Roseate",
            "Royal Enfield"
        ]
    },
    {
        letter: "H", names: ["Hard Rock Café",
            "Hero MotoCorp Ltd",
            "Hilton Hotels",
            "Hindustan Unilever",
            "Hyatt Corporation"]
    },
    {
        letter: "S",
        names: [
            "Sagar Ratna",
            "Salaam Balak Trust",
            "Shapoorji Pallonji & Co",
            "Silverglades Holdings",
            "Subodh Gupta & Bharti Kher",
            "Sunita Shekhawat"
        ]
    }
    ,
    {
        letter: "I",
        names: [
            "Indian Institute of Art and Design",
            "INTACH",
            "Isprava Vesta"
        ]
    }
    ,
    {
        letter: "T",
        names: [
            "Taj Hotels",
            "Tanishq",
            "Tara & Sahil Vachani",
            "Tata Sons",
            "Tata Steel",
            "The Golkonda Hotel",
            "The Indian Hotels Company Limited",
            "The Lakshmi Mills Company Limited",
            "The Oberoi Group",
            "The Park Hotels",
            "Tribe by Amrapali",
            "Trilegal"
        ]
    }
    ,
    {
        letter: "J",
        names: [
            "Jamie Oliver Restaurants",
            "JK Tyres"
        ]
    }
    ,
    { letter: "V", names: ["Volvo Eicher"] },
];


const Clients = () => {
    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12'>
                        <p className={styles.heading}>How we Work</p>
                    </div>
                    {contentData.map((item, index) => (
                        <div className='col-lg-6' key={index}>
                            <p className={styles.custom_title}>{item.title}</p>
                            <p className={styles.custom_text}>{item.text}</p>
                        </div>
                    ))}
                    <div className='col-lg-12 '>
                        <p className={styles.heading}>Clients</p>
                    </div>
                    <div className='col-lg-12 pb-5'>
                        <div className={styles.client_list}>
                            {clients.map((clientGroup, index) => (
                                <div key={index} className={styles.client_column}>
                                    <h4 className={styles.letter}>{clientGroup.letter}</h4>
                                    <ul className={styles.names}>
                                        {clientGroup.names.map((name, idx) => (
                                            <li key={idx} className={styles.name}>{name}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Clients