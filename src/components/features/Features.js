import { Container } from "@material-ui/core";
import React from "react"
import img from "../../images/Mobile/Group 71.svg"
import img1 from "../../images/Mobile/Group 73.svg"

import './features.scss'


const  Features = ()=> {
    return(
        <div className="features">
            <Container className="features-main">
                <h4>Our <span>services</span></h4>
                <p>This very extraordinary feature, can make learning <br />
                 activities more efficient</p>

                 <div className="features-main-one">
                     <h3>A <span> user interface</span> designed for the <br /> classroom</h3>
                     <div className="list">
                       <img src={img1} alt="" />
                       <p>Teachers don’t get lost in the grid view and<br />
                            have a dedicated Podium spac</p>
                     </div>
                     <div className="list">
                       <img src={img1} alt="" />
                       <p>TA’s and presenters can be moved to <br /> the front of the class.
                        </p>
                     </div>
                     <div className="list">
                       <img src={img1} alt="" />
                       <p>TA’s and presenters can be moved to <br />the front of the class.
                        </p>
                     </div>
                     <div className="features-main-two">
                       <img src={img} alt="" />
                     </div>
                 </div>
            </Container>
        </div>
    )
}


export default Features;