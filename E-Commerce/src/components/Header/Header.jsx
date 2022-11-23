import React from "react"
import {Link, Route, Routes} from "react-router-dom"

import Collections from "../Collections/Collections"
import Men from  "../Men/Men"
import Women from  "../Women/Women"
import About from  "../About/About"
import Contact from  "../Contact/Contact"

export default function Header() {

    return (
        <header>
            <img /> 
            <nav>
                <Link to="/">Collections</Link>
                <Link to="/men">Men</Link>
                <Link to="/women">Women</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </nav>
            <Routes>
                <Route exact path="/" element={<Collections />} />
                <Route exact path="/men" element={<Men />} />
                <Route exact path="/women" element={<Women />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/contact" element={<Contact />} />
            </Routes>
            <div>
                <img />
                <img />
            </div>
        </header>
    )
}