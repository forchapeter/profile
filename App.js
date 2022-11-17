import React from "react"
import ReactDOM from 'react-dom'
import About from "./components/About.js"
import Info from "./components/Info.js"
import Interest from "./components/Interest.js"
import Footer from "./components/Footer.js"


export default function App(){
    return(
        <div className="Main">
            <Info />
            <About />
            <Interest />
            <Footer />
        </div>
        )
    
}
