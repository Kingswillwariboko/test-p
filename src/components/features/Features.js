import { Container } from "@material-ui/core";
import React from "react"
import { Button } from "@material-ui/core";
import img from "../../images/Mobile/Group 71.svg"
import img1 from "../../images/Mobile/Group 73.svg"
import img2 from "../../images/Mobile/image 2.svg"
import img3 from "../../images/Mobile/image 3.svg"
import img4 from "../../images/Mobile/image 5.svg"
import img5 from "../../images/Mobile/image 6.svg"
import img6 from "../../images/Mobile/Group 5397.svg"
import img7 from "../../images/Mobile/Group 47.svg"

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

            <Container className="features__mainone">
              <Button>
                see more features
              </Button>
              <div className="features__mainone-one">
               <img src={img2} alt=""/>
               <img src={img3} alt=""/>
              </div>

              <div className="features__mainone-two">
               <img src={img4} alt=""/>
               <img src={img5} alt=""/>
              </div>
            </Container>

            <Container className="features__maintwo">
              <div>
                <h3>INTEGRATION</h3>

                <h6>200+ educational tools and platform integrations</h6>
                <p>Schoology has every tool your classroom needs and comes
                   pre-integrated with more than 200+ tools, 
                  student information systems (SIS), and education platforms.</p>
              </div>
              <Button>
                see intergration
              </Button>
            </Container>

            <Container className="features__maintwo">
              <div>
                <h3>INTEGRATION</h3>

                <h6> What They Say?</h6>
                <p>Contentionary has got more than 100k positive ratings from our users around the world</p>

                <p>Some of the students and teachers were greatly helped by the Contentionary.</p>

                <p>Are you too? Please give your assessment</p>
              </div>
              <Button>
                see intergration
              </Button>
            </Container>

            <Container className="features__mainthree">
              <div>
                <img src={img6} alt="" />
              </div>

              <div>
                <h6>Lastest News and Resources</h6>

                <p>See the developments that have occurred to Contentionary in the world</p>

                <img src={img7} alt=""/>
              </div>
            </Container>
        </div>
    )
}


export default Features;