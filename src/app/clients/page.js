import React from 'react'
import Clients from "../../components/Client/Clients"
import Herosection from "../../components/Client/Herosection"


function page() {
    return (
        <div>
            <Herosection />
            <Clients />
        </div>
    )
}

export default page