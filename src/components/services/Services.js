import React from "react"

import google from "../../images/Mobile/Group 79.svg"
import google1 from "../../images/Mobile/Frame 1791.svg"
import { Container } from "@material-ui/core"
import "./services.scss"


const Services = () => {
   return(
       <div>
          <Container className="container">
               <p>Trusted by 5000+ companies worldwide</p>
               <div>
                   <img src={google1} alt="" />
               </div>
         </Container>

           <div>
               <Container className="container">
                  <img src={google} alt="" />
                  <h3>Online Billing, <br /> Invoicing, & Contracts</h3>

                  <p>Simple and secure control of your organization’s 
                      financial and legal transactions.
                       Send customized invoices and contracts</p>
               </Container>

           </div>

           <div>
               <div>

               </div>
           </div>
       </div>
   )
}

export default Services