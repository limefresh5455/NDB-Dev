import React from "react"
import { Link } from "gatsby"
import NDBWrapper from "../NDBWrapper"
import Container from "../Container"

import OurVisionImg01 from "../../assets/images/company/vision1.png"
import OurVisionImg02 from "../../assets/images/company/vision2.png"
import OurVisionImg03 from "../../assets/images/company/vision3.png"
import OurVisionImg04 from "../../assets/images/company/vision4.png"
import OurVisionImg05 from "../../assets/images/company/vision5.png"


const OurVision = ({fullWidth, pageName}) => {
  let className = ""

  if (pageName) {
    className = `${pageName}__CompBanner`
  }

  return (         
    
<div className="fullWidth">
    <div className="company__section1">
   
          <span className="company__section1-title">Our Vision</span>
    

      <div fullWidth={fullWidth}>
        <div className="Our_Vision">

            <div className="visionbox">
            <img src={OurVisionImg01} alt="" />
            <div className="Vision-1">1</div>
            <div className="vision-overlay">
            <h3>To power a sustanable future</h3>
            <p>NDB’s main goal is to give an energy solution that will be sustainable and damage-free for the environment.</p>
            </div>
            </div>

            <div className="visionbox">
            <img src={OurVisionImg02} alt="" />
            <div className="Vision-2">2</div>
            <div className="vision-overlay">
            <h3>To create a reliable alternative energy source.</h3>
            <p>NDB is always looking for alternatives to create life-long and green energy.</p>
            </div>
            </div>

            <div className="visionbox">
            <img src={OurVisionImg03} alt="" />
            <div className="Vision-3">3</div>
            <div className="vision-overlay">
            <h3>To provide cost-effectiveness and accessibility. </h3>
            <p>The battery industry is always looking for efficient and cost-effective alternatives. NDB has accepted this challenge and is working towards improving this field.</p>
            </div>
            </div>

            <div className="visionbox">
            <img src={OurVisionImg04} alt="" />
            <div className="Vision-4">4</div>
            <div className="vision-overlay">
            <h3>To repurpose the hazardous waste for a greener alternative.</h3>
            <p>NDB cares about the environment and wants to help the world in understanding the importance of disposing of waste, as it is a threat to future generations’ wellbeing.</p>
            </div>
            </div>
          
          
          </div>

          <div className="Our_Vision_bottom">
                <div className="visionbox">
                <img src={OurVisionImg05} alt="" />
                
                <div className="vision-overlay">
                <h3>We research, invent, develop technologies to provide greater access to a cleaner and greener world.</h3>
                
                </div>
                </div>
            </div>


      </div>



      </div>

</div>  
      
  )
}

export default OurVision


