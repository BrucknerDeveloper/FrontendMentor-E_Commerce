import React from "react"

import {Route, Routes} from "react-router-dom"

//components
import Collections from "../Collections/Collections"
import Men from  "../Men/Men"
import Women from  "../Women/Women"
import About from  "../About/About"
import Contact from  "../Contact/Contact"


export default function Product() {

    return (
        <div>
            <Routes>
                <Route exact path="/" element={<Collections />} />
                <Route exact path="/men" element={<Men />} />
                <Route exact path="/women" element={<Women />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/contact" element={<Contact />} />
            </Routes>
        </div>
    )
}