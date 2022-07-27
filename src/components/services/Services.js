import React from "react"

import google from "../../images/Mobile/Group 79.svg"
import google1 from "../../images/Mobile/Frame 1791.svg"
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
                        <div>
                            <p>For instrucstions</p>
                            <Button>
                                start a class today
                            </Button>
                        </div>
                    </Container>
               </Container>
           </div>
       </div>
   )
}

export default Services