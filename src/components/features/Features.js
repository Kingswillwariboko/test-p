import { Container } from "@material-ui/core";
import React from "react"
import img from "../../images/Mobile/Group 71.svg"
import img1 from "../../images/Mobile/Group 73.svg"

import './features.scss'


const  Features = ()=> {
    return(
        <div className="features">
            <Container>
                <h4>Our services</h4>
                <p>This very extraordinary feature, can make learning <br />
                 activities more efficient</p>

                 <div>
                     <h3>A user interface designed for the <br /> classroom</h3>
                     <div>
                       <img src={img1} alt="" />
                       <p>Teachers don’t get lost in the grid view and
                            have a dedicated Podium spac</p>
                     </div>
                     <div>
                       <img src={img1} alt="" />
                       <p>TA’s and presenters can be moved to the front of the class.
                        </p>
                     </div>
                     <div>
                       <img src={img1} alt="" />
                       <p>TA’s and presenters can be moved to the front of the class.
                        </p>
                     </div>
                     <img src={img} alt="" />
                 </div>
            </Container>
        </div>
    )
}


export default Features;