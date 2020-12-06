import React from 'react'
import MediaCard from './card'
import branding from './../images/branding.png'
import webicon from './../images/WebServicesicon.png'
import appdev from './../images/appdev.png'
 export default function About(){

    return (
        <div className="container-2" style={{background:"acc7f2",width:'100%',height:'593px'}}>
            <section className="about-intro"style={{display:'block'}}>
                <div className="about-heading"style={{marginLeft:'20px'}}>
                <h1 className="primary-heading" style={{textTransform: 'uppercase',
                color:'#0085a1',fontWeight:'700',lineHeight:'1.6',fontSize:'1.2rem'}}>Our Services</h1>
                <p style={{fontWeight:'700',color:'#0085a1',lineHeight:'1.3',fontSize:'3.6rem',margin:'0 0 auto'}}>All challenges accepted</p>
                </div>
                <div className="all-services" style={{maxWidth:'100%'}}>
                    <div style={{display:'flex'}}>
                    <MediaCard  imagesrc={webicon} title={" WEB & INTERACTIVE DESIGN "} dscr={"The most impressive websites and app experiences are rooted in smart design, embody clear vision, and are backed by the right technology."}/>
                <MediaCard imagesrc={branding} title={"  BRANDING & STRATEGY"}dscr={" How do your customers see you? How do you see yourself? We’re experts in deftly focusing, aligning and advancing those perceptions."}/> 
                <MediaCard imagesrc={appdev} title={"WEB & APPLICATION DEVELOPMENT"}dscr={"Best-in-class digital projects require technology that perfectly supports the design. We rely on the right tools for the job, not a one-size-fits-all tech stack."}/> 
                    </div>
                </div>
            </section>
            
        </div>
    )
}
