import React from 'react'
import styles from "../../styles/client.module.css"



const contentData = [
    {
        title: "An Attitude of Gratitude",
        text: "No matter what the scale or type of work – it is a privilege for us to work on a project. Giving anything short of our best selves to our work is untrue to ourselves."
    },
    {
        title: "An Attitude of Gratitude",
        text: "Above all else, we believe in passion as a governing principle that supersedes all logic and bring it as an overriding attitude to all we do."
    },
    {
        title: "An Attitude of Gratitude",
        text: "We deeply respect our clients and their businesses, our collaborators, our vendors, our contractors, our teammates, our society, and above all our planet. To this end, we strive to bring out the best in each of these relationships."
    },
    {
        title: "An Attitude of Gratitude",
        text: "Our process works best when each stakeholder contributes their slice of genius to a project – hence success is perceived as a collective accomplishment rather than an act of individual authorship."
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
    { letter: "B", names: ["M2K Group"] },
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
    { letter: "N", names: ["M2K Group"] },
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
    { letter: "O", names: ["M2K Group"] },
    { letter: "E", names: ["M2K Group"] },
    { letter: "P", names: ["M2K Group"] },
    { letter: "F", names: ["M2K Group"] },
    { letter: "G", names: ["M2K Group"] },
    { letter: "R", names: ["M2K Group"] },
    { letter: "H", names: ["M2K Group"] },
    { letter: "S", names: ["M2K Group"] },
    { letter: "I", names: ["M2K Group"] },
    { letter: "T", names: ["M2K Group"] },
    { letter: "J", names: ["M2K Group"] },
    { letter: "V", names: ["M2K Group"] },
];


const Clients = () => {
    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12'>
                        <p className='fs-4 mt-5 text-danger'>How we Work</p>

                    </div>
                    {contentData.map((item, index) => (
                        <div className='col-lg-6' key={index}>
                            <h5>{item.title}</h5>
                            <p>{item.text}</p>
                        </div>
                    ))}

                    <div className='col-lg-12'>
                        <h4 className='fs-4 mt-3 text-danger'>Clients</h4>
                    </div>
                    <div className={`${styles.client_list} `}>
                        {clients.map((clientGroup, index) => (
                            <div key={index} className="col-lg-6">
                                <h4 className="letter">{clientGroup.letter}</h4>
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
    )
}

export default Clients