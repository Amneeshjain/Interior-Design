import React from 'react'
import Clients from "../../components/Client/Clients"
import Herosection from "../../components/Client/Herosection"


function page() {
    return (
        <div>
            <Herosection style={{ color: "#fff !important" }}
                title="About Clients "
                text="Clients ?"
                backgroundImage="../../bg-hero.png" />
            <Clients />
        </div>
    )
}

export default page