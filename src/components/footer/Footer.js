import { Container } from "@material-ui/core";
import React from "react"

import logo from  "../../images/Mobile/logo.svg"

import "./footer.scss"

const Footer = () => {
    return(
    <>
        <div className="footer">
            <Container className="footer-img">
                <img src={logo} alt="" />
            </Container>

            <Container className="footer-one">
                <h3>Nigeria Office:</h3>
                <p>38 Opebi Road, Ikeja, Lagos State, Nigeria. 
                    Nigeria: +234 902 239 6389</p>

                <h3>United Kingdom Office:</h3>
                <p>Longside Lane, Longside House, Bradford, United Kingdom. UK: +44 7754 60113
                    Nigeria Office:</p>

                <h3>Contact Email:</h3>
                <p>contact@contentionary.com.</p>
            </Container>

            <Container className="footer-two">
                <h3>Resources</h3>
                <p>Developer Tools</p>
                <p>Guides & FAQs</p>
                <p>Blog post</p>
                <p>Help center</p>
                <p>Customer Reviews</p>
            </Container>

            <Container  className="footer-three">
                <h3>Company</h3>
                <p>Parner</p>
                <p>Careers</p>
                <p>investors</p>
                <p>contact us</p>
            </Container>

            
        </div>

            <Container className="footer-four">
                <h2>  © 2022 Contentionary. All rights reserved </h2> 
            </Container>

    </>   
    )
}

export default Footer;