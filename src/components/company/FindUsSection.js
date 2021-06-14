import React from "react"
import { Link } from "gatsby"
import NDBWrapper from "../NDBWrapper"
import Container from "../Container"

import CompMap from "../../assets/images/company/MapFindUs.png"


const FindUsSection = ({fullWidth, pageName}) => {
  let className = ""

  if (pageName) {
    className = `${pageName}__CompBanner`
  }

  return (         
    
<NDBWrapper fullWidth={fullWidth}>
    <div className="company__section1">
   
      <Container>
          <span className="company__section1-title">Find us</span>
          

      </Container>

      <div fullWidth={fullWidth}>
        <div className="FindUs_Map">
            <div className="LR_Section">
              <p>
                <span>United State of America</span>
                50 California Street, Suite 1500<br></br>
                San Francisco
                </p>
                <p>
                <span>Switzerland</span>
                Rue de la Porte-Neuve 33<br></br>
                1951 Sion
                </p>
                <p> 
                <span>United Kingdom</span>
                69 Wilson St<br></br>
                London EC2A 2BB
                </p>
                <p>
                <span>Italy</span>
                Via Durando 39<br></br>
                Milan, 20158 MI
                </p>
                <p>
                <span className="contactus">CONTACT US</span>
                
                <b>Email</b> <a href="info@ndb.technology">info@ndb.technology</a><br></br>
                <b>Phone</b> +1 650 252 0002<br></br>
                <b>Fax</b> +1 650 252 0003
</p>
            </div>
            <div className="LR_Section">
              <img src={CompMap} alt="" />
            </div>
          
          </div>
      </div>



      </div>

</NDBWrapper>  
      
  )
}

export default FindUsSection


