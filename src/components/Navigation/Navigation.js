import React, {useState} from "react"
import "./navigation.scss"
import { Button } from "@material-ui/core"

const Navigation = () =>{
    const [showNav, setShowNav] = useState(false)
    return(
        <main>
        <div className="nav">
            <div className="nav-ham">
                <div className="hamburger" onClick={()=> setShowNav(!showNav)}>
                    {showNav ? 'open' : 'close'}
                </div>
            </div>
            <div className= {showNav ? "active" : "nav-menu"}>
                        <li className="nav-item"> HOMR </li>
                        <li className="nav-item"> CAREER </li>
                        <li className="nav-item"> BLOG </li>
                        <li className="nav-item"> ABOUT US</li>
                        <li className="nav-item"> MARKETPLACE</li>
                        <li className="nav-item"> LOGIN</li>
                        <li className="nav-item"> CREATE ACCOUNT</li>
            </div>
            <div className="logo">
                make
            </div>
        </div>


        <div className="landing__page">
            <h3>
               <span>Create</span> your Online <br />Academy in minutes  
            </h3>

            <p>
                Share, sell, engage, support and impact your 
                audience <br /> students using several Apps in 
                Contentionary
            </p>
            <Button className="landing__page-btn">
                join for free
            </Button>
            <Button>
                watch for free
            </Button>
        </div>
     </main>
    )
}

export default Navigation