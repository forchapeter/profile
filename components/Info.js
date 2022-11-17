import React from "react"
import ReactDOM from 'react-dom'
export default function Info(){
    return(
        <div className="info">
           <div className='personal'>
                <img  className="info--image" src="./Image/dashboard.jpg" />
                <h2 className="info--name">Tiger Tech Forcha Peter </h2>
                <h3 className="info--job">Machine Learning</h3>
                <h4 className="info--web"><a href="#">Tiger-web.com</a></h4>
            </div>
            <div className="info--btn">
                <button className="info--email"><i className="fa fa-envelope-open-o" aria-hidden="true"></i><span>Email</span></button>
                <button className="info--linkedin"><i className="fa fa-linkedin" aria-hidden="true"></i><span>Linkedin</span></button>
            </div>
        </div>
        )
    
}
