import React from 'react'
import Clients from "../../components/Client/Clients"
import Herosection from "../../components/Client/Herosection"
import CustomerStory from "../../components/Client/CustomerStory"
import TimelineCard from '@/components/About/TimelineCard'
import GetInTouch from '../project-detail/GetInTouch'
import AboutMore from '../../components/aboutMore/AboutMore'
import Paragraph from "../../components/Client/Paragraph"


function page() {
    return (
        <div>
            <Herosection style={{ color: "#fff !important" }}
                title="Customer Service "
                text="Customer Service ?"
                backgroundImage="../../bg-hero.png" />
            <Paragraph />
            <CustomerStory />
            <TimelineCard />
            <Clients />
            <GetInTouch />
            <AboutMore
                text="Transform Your Space: Timeless Elegance in Every Design"
                content="From costly materials to seamless functionality, we create interiors that stand the check of time and increase your dwelling experience. Discover how our designs can transform your area right into a haven of grace and style."
                mainText="At Colonelz, we turn your imagination and prescience into facts with designs that mix traditional beauty and contemporary sophistication. Our expert crew crafts each area with attention to detail, making sure each detail reflects timeless elegance."
            />

        </div>
    )
}

export default page