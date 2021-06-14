import React from "react"
import { Link } from "gatsby"
import NDBWrapper from "../NDBWrapper"
import Container from "../Container"

import CompImg from "../../assets/images/icons/COMPANY.png"

 


const OurCompanySection = ({fullWidth, pageName}) => {
  let className = ""

  if (pageName) {
    className = `${pageName}__CompBanner`
  }

  return (    

            <NDBWrapper fullWidth={fullWidth}>
                    <div className="company__section1">
            
                <Container>
                <div className="companyTitleTop"><img src={CompImg} alt="" /></div>
                    <span className="company__section1-title">Our Company</span>
                    <p className="section-content">
                        NDB, Inc. is a Silicon Valley-based nanotechnology company established for the development and manufacturing of semiconductor chipset, battery solutions, and energy propulsion systems
                    </p>
                    <p className="TeamQuote">
                        “NDB imagines things that others don’t. We believe in our abilities and products, whilst developing solutions that are unmatched in the market.”
                        <span>Nima Golsharifi, CEO</span>
                    </p>

                </Container>
                </div>
            </NDBWrapper> 
      
  )
}

export default OurCompanySection


