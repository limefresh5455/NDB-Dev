import React from "react"
import Banner from "../components/Banner"
import Layout from "../components/Layout"
import Seo from "../components/seo"

import OurCompanySection from "../components/company/OurCompanySection"
import FindUsSection from "../components/company/FindUsSection"
import OurVision from "../components/company/OurVision"
import OurTeamSection from "../components/company/OurTeamSection"

import backImg from "../assets/images/Company/headSwirl.png"

  const Company = ({ pageName}) => {

  let className = "companyPage"

  if (pageName) {
    className = `${pageName}__banner`
  }

  return (
    <Layout pageName="company">
      <Seo title="Company" />
      <div className={className}>
         <Banner pageName="company" backImg={backImg} bannerLink="Contact us" HeroTitle="Unlock new value with NDB technology" />      
         <OurCompanySection fullWidth />
         <FindUsSection fullWidth />
         <OurVision className="fullWidth" />
         <OurTeamSection fullWidth />
      
      </div>
     

    </Layout>
  )
}

export default Company
