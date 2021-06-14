import React from "react"
import { Link } from "gatsby"
import NDBWrapper from "../NDBWrapper"
import Container from "../Container"

import TeamTextImg from "../../assets/images/company/TEAM.png"
import TeamImg1 from "../../assets/images/company/portraits_stinaandana.png"
import TeamImg2 from "../../assets/images/company/portraits_stinaandana.png"
import TeamImg3 from "../../assets/images/company/portraits-02.png"
import TeamImg4 from "../../assets/images/company/portrait-03.png"
import TeamImg5 from "../../assets/images/company/portraits_stinaandana-04.png"

import TeamImg6 from "../../assets/images/company/portraits-02.png"
import TeamImg7 from "../../assets/images/company/portrait-03.png"
import TeamImg8 from "../../assets/images/company/portraits-02.png"
import TeamImg9 from "../../assets/images/company/portrait-03.png"
import TeamImg10 from "../../assets/images/company/portraits-02.png"

import TeamImg11 from "../../assets/images/company/portraits-02.png"
import TeamImg12 from "../../assets/images/company/portrait-03.png"
import TeamImg13 from "../../assets/images/company/portraits-02.png"
import TeamImg14 from "../../assets/images/company/portrait-03.png"
import TeamImg15 from "../../assets/images/company/portraits-02.png"
import TeamImg16 from "../../assets/images/company/portraits-02.png"
import TeamImg17 from "../../assets/images/company/portrait-03.png"
import TeamImg18 from "../../assets/images/company/portraits-02.png"
import TeamImg19 from "../../assets/images/company/portrait-03.png"
import TeamImg20 from "../../assets/images/company/portraits-02.png"



 


const OurTeamSection = ({fullWidth, pageName}) => {
  let className = ""

  if (pageName) {
    className = `${pageName}__CompBanner`
  }

  return (    

        <NDBWrapper fullWidth={fullWidth}>
            <div className="company__section1">
            
                <Container>
               
                    <span className="company__section1-title">Our Team</span>
                    <p className="section-content">
                    NDB values teamwork, mutual respect and transparency. NDB’s strength lies in diversity, it is a source of power and helps the company to have different perspectives. This commitment to diversity makes the work environment more engaging, respectful and welcoming.
                    <div></div>
                    NDB has a strong multidisciplinary team that gathers expertise from all different disciplines.
                    
                    </p>
                    <p className="OurTeamQuote">Research, invent, develop and analyze in every step of the way. </p>
                   

                </Container>


                <div fullWidth={fullWidth}>

                    
                <div className="OurTeamHeading">Board Members</div>
                <div className="TeamTitleImg"><img src={TeamTextImg} alt="" width="100%" /></div>
                    <div className="Our_Team">
                      
                        <div className="teambox"> 
                            <div className="tImg">
                             <img src={TeamImg1} alt="" />
                             <div class="overlayTeam">
                                 <span>"Quotes"</span>
                                 <p>Linkedin</p>
                             </div>
                             </div>
                            <div className="TeamName">
                                <h4>Name Surname</h4>
                                <span>Position</span>
                            </div>
                        </div>
                    
                        <div className="teambox">
                            <div className="tImg"> 
                                 <img src={TeamImg2} alt="" />
                                 <div class="overlayTeam">
                                 <span>"Quotes"</span>
                                 <p>Linkedin</p>
                             </div>
                            </div>
                            <div className="TeamName">
                                <h4>Name Surname</h4>
                                <span>Position</span>
                            </div>
                        </div>
                    
                        <div className="teambox"> 
                            <div className="tImg">
                             <img src={TeamImg3} alt="" />
                             <div class="overlayTeam">
                                 <span>"Quotes"</span>
                                 <p>Linkedin</p>
                             </div>
                             </div>
                            <div className="TeamName">
                                <h4>Name Surname</h4>
                                <span>Position</span>
                            </div>
                        </div>
                   
                        <div className="teambox"> 
                            <div className="tImg">
                             <img src={TeamImg4} alt="" />
                             <div class="overlayTeam">
                                 <span>"Quotes"</span>
                                 <p>Linkedin</p>
                             </div>
                             </div>
                            <div className="TeamName">
                                <h4>Name Surname</h4>
                                <span>Position</span>
                            </div>
                        </div>
                    
                        <div className="teambox"> 
                            <div className="tImg">
                             <img src={TeamImg5} alt="" />
                             <div class="overlayTeam">
                                 <span>"Quotes"</span>
                                 <p>Linkedin</p>
                             </div>
                             </div>
                            <div className="TeamName">
                                <h4>Name Surname</h4>
                                <span>Position</span>
                            </div>
                        </div>                      

                     </div>
                    <div className="OurTeamHeading">Engineers</div>
                    <div className="Our_Team">
                     
                    <div className="teambox"> 
                            <div className="tImg">
                             <img src={TeamImg6} alt="" />
                             </div>
                            <div className="TeamName">
                                <h4>Name Surname</h4>
                                <span>Position</span>
                            </div>
                        </div>
                    
                        <div className="teambox"> 
                            <div className="tImg">
                             <img src={TeamImg7} alt="" />
                             </div>
                            <div className="TeamName">
                                <h4>Name Surname</h4>
                                <span>Position</span>
                            </div>
                        </div>
                    
                        <div className="teambox"> 
                            <div className="tImg">
                             <img src={TeamImg8} alt="" />
                             </div>
                            <div className="TeamName">
                                <h4>Name Surname</h4>
                                <span>Position</span>
                            </div>
                        </div>
                   
                        <div className="teambox"> 
                            <div className="tImg">
                             <img src={TeamImg9} alt="" />
                             </div>
                            <div className="TeamName">
                                <h4>Name Surname</h4>
                                <span>Position</span>
                            </div>
                        </div>
                    
                        <div className="teambox"> 
                            <div className="tImg">
                             <img src={TeamImg10} alt="" />
                             </div>
                            <div className="TeamName">
                                <h4>Name Surname</h4>
                                <span>Position</span>
                            </div>
                        </div>
                     </div>

                     <div className="OurTeamHeading">Designer</div>
                    <div className="Our_Team">
                     
                    <div className="teambox"> 
                            <div className="tImg">
                             <img src={TeamImg11} alt="" />
                             </div>
                            <div className="TeamName">
                                <h4>Name Surname</h4>
                                <span>Position</span>
                            </div>
                        </div>
                    
                        <div className="teambox"> 
                            <div className="tImg">
                             <img src={TeamImg12} alt="" />
                             </div>
                            <div className="TeamName">
                                <h4>Name Surname</h4>
                                <span>Position</span>
                            </div>
                        </div>
                    
                        <div className="teambox"> 
                            <div className="tImg">
                             <img src={TeamImg13} alt="" />
                             </div>
                            <div className="TeamName">
                                <h4>Name Surname</h4>
                                <span>Position</span>
                            </div>
                        </div>
                   
                        <div className="teambox"> 
                            <div className="tImg">
                             <img src={TeamImg14} alt="" />
                             </div>
                            <div className="TeamName">
                                <h4>Name Surname</h4>
                                <span>Position</span>
                            </div>
                        </div>
                    
                        <div className="teambox"> 
                            <div className="tImg">
                             <img src={TeamImg15} alt="" />
                             </div>
                            <div className="TeamName">
                                <h4>Name Surname</h4>
                                <span>Position</span>
                            </div>
                        </div>

                        <div className="teambox"> 
                            <div className="tImg">
                             <img src={TeamImg16} alt="" />
                             </div>
                            <div className="TeamName">
                                <h4>Name Surname</h4>
                                <span>Position</span>
                            </div>
                        </div>
                    
                        <div className="teambox"> 
                            <div className="tImg">
                             <img src={TeamImg17} alt="" />
                             </div>
                            <div className="TeamName">
                                <h4>Name Surname</h4>
                                <span>Position</span>
                            </div>
                        </div>
                    
                        <div className="teambox"> 
                            <div className="tImg">
                             <img src={TeamImg18} alt="" />
                             </div>
                            <div className="TeamName">
                                <h4>Name Surname</h4>
                                <span>Position</span>
                            </div>
                        </div>
                   
                        <div className="teambox"> 
                            <div className="tImg">
                             <img src={TeamImg19} alt="" />
                             </div>
                            <div className="TeamName">
                                <h4>Name Surname</h4>
                                <span>Position</span>
                            </div>
                        </div>
                    
                        <div className="teambox"> 
                            <div className="tImg">
                             <img src={TeamImg20} alt="" />
                             </div>
                            <div className="TeamName">
                                <h4>Name Surname</h4>
                                <span>Position</span>
                            </div>
                        </div>
                     </div>

                     
                     
                </div>


           
          
       
     

            </div>
        </NDBWrapper> 
      
  )
}

export default OurTeamSection


