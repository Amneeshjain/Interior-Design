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
    {
        letter: "A", names: [
            "Abhinaya Verma",
            "Ankit Bhardwaj",
            "Ashish Gupta",
            "Ashish Mishra",
            "Ashwini",
            "Ashwini Gupta"
        ]
    },
    {
        letter: "K", names: [
            "Kalyan Velpuri & Jincy Velpuri",
            "Kishan Kumar",
            "Krishnan"
        ]
    },
    {
        letter: "L", names: [
            "Lakshya Khanna & Ratika Wadhwa",
            "Lt Col Neeraj Srivastava"
        ]
    },
    {
        letter: "M", names: [
            "M/S Rolta",
            "Maj Ankur & Mrs Vibha Mehra",
            "Maj Gen Harpal Singh"
        ]
    },
    {
        letter: "B", names: [
            "Beverly Park",
            "Blann Homes",
            "Brig MS Dhillon",
            "Brig Nandwani",
            "Brig Niranjan Kumar"
        ]
    },
    {
        letter: "C", names: [
            "Capt (IN) Vijay Kishore",
            "Capt (IN) Vijay Kishore",
            "Charul and Chaitanya",
            "Col JS Pandher",
            "Col Sanjeev Govila",
            "Col Subodh Garg",
            "Col Sudhanshu Sharma",
            "Col Vineet Prabhat",
            "Col. Ashok Malik",
            "Col. Biraj Sahay",
            "Col. Sanjeev Govila",
            "Col. Sankay Grover",
            "Col. Tikaji",
            "CS Direkt"
        ]
    },
    {
        letter: "N",
        names: [
            "Naveen Kanwar",
            "Neena Lekhi",
            "Nutan Prakash"
        ]
    },
    {
        letter: "D", names: [
            "Darshan",
            "Darvesh Panchal",
            "Deepak Nagpal",
            "Divya Lal",
            "Dr Nitish Gupta"
        ]
    },
    // { letter: "O", names: ["Ogaan", "Organic India"] },
    // {
    //     letter: "E", names: ["Eicher Motors",
    //         "Ekaya Banaras",
    //         "Everest Industries"]
    // },
    {
        letter: "P",
        names: [
            "Priya Aggarwal & Anurag Aggarwal",
            "Priya Aggarwal & Anurag Aggarwal",
            "Priyam Tiwari"
        ]
    },
    {
        letter: "F", names: ["Fashion Design Council of India",
            "Fiserve"]
    },
    {
        letter: "G",
        names: [
            "Gp Capt KC Sharma"
        ]
    }
    ,
    {
        letter: "R",
        names: [
            "Rishabh Jain "
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
            "Sanjeev Sahay",
            "Sanjeev Sahay",
            "Shakti Singh Rathore",
            "Shakti Singh Rathore",
            "Shantanu Prakash",
            "Shantanu Prakash",
            "Shantanu Prakash",
            "Sneha Sharma",
            "Sneha Singh Nikhil Singh",
            "Soumya Kanti",
            "Sujjan Vihar",
            "Suneja",
            "Sushil Singh"
        ]
    }
    ,
    {
        letter: "I",
        names: [
            "Indian Army",
            "Indian Army",

        ]
    }
    ,
    {
        letter: "T",
        names: [
            "Tanmay Mishra"
        ]
    }
    ,
    {
        letter: "J",
        names: [
            "Jitendra",
            "Just Dial"
        ]
    }
    ,
    { letter: "V", names: ["Vineet Gautam", "Vishal Ohri"] },
    { letter: "Z", names: ["Zia ul Rab",] }
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