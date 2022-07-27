import React from "react"

import google from "../../images/Mobile/Group 79.svg"
import google1 from "../../images/Mobile/Frame 1791.svg"
import img1 from "../../images/file/Rectangle.svg"
import img from "../../images/Mobile/Group 17.svg"
import { Button, Container } from "@material-ui/core"
import { Card } from "@material-ui/core"
import "./services.scss"


const Services = () => {
   return(
       <div className="services">
          <Container className="container">
               <p>Trusted by 5000+ companies worldwide</p>
               <div>
                   <img src={google1} alt="" />
               </div>
         </Container>

           <div>
               <Container className="container main">
                   <Card>
                  <img className="container-img" src={google} alt="" />
                  <h3>Online Billing, <br /> Invoicing, & Contracts</h3>

                  <p>Simple and secure control of your organization’s 
                      financial and legal transactions.
                       Send customized invoices and contracts</p>
                 </Card>
               </Container>

           </div>

           <div className="services__one">
               <Container className="services__one-con">
                   <h4>What is <span>contentionary</span></h4>
                   <p> Contentionary is a platform that allows educators to 
                       create online classes whereby they can store the course 
                       materials online; manage assignments, quizzes and exams; 
                       monitor due dates; 
                       grade results and provide students with feedback all in one place.
                    </p>

                    <Container className="contention">
                        <img src={img1} alt="" />
                        <div className="contention-one">
                            <p>For instrucstions</p>
                            <Button>
                                start a class today
                            </Button>
                        </div>
                    </Container>
               </Container>
               <Container className="services__two">
                   <h4>Everything you can do in a physical <br />
                    classroom, you can do with Contentionary</h4>

                    <p>
                         Contentionary’s school management software helps traditional and
                         online schools manage scheduling, attendance,
                         payments and virtual classrooms all in one 
                         secure cloud-based system.
                    </p>

                    <Button className="services__two-btn">
                        learn more
                    </Button>
                    <img src={img} alt=""/>
               </Container>
           </div>
       </div>
   )
}

export default Services