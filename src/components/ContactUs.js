import React from 'react'
import fbicon from './../images/fbicon.png'
import location from './../images/locationicon.png'
import phone from './../images/phone.png'
import contactus from './../images/contactus.png'
import useWebAnimations, { bounce, jackInTheBox, slideInLeft, slideInRight, wobble, zoomOut } from '@wellyshen/use-web-animations'

export default function ContactUs() {
    const{ref:icons}=useWebAnimations({...slideInLeft
,timing:{
    duration:4000,
    iterations:'Infinity',
    direction:'alternate',
    easing:'ease-in-out'


}
    })
    return (
        <div className="footer" style={{ background: '#e1eff2', width: '100%', minHeight: '190px',margin:'0',paddingBottom:'1px' }}>
            <div ref={icons} className="footer-icons" style={{ marginLeft: '67%' }}>
                <img src={contactus} alt="contactus" style={{ width: '90px', paddingBottom: '64px' }} />
                <img src={phone} alt="phone" style={{ width: '100px', marginBottom: '50px', padding: '0px 0px 10px 8px' }} />
                <img src={fbicon} alt="fbicon" style={{ width: '120px' ,paddingBottom:'50px'}} />
                <img src={location} alt="location" style={{ width: '90px', paddingBottom: '55px' }} />
            </div>
            <div className="footer-text" style={{textAlign:'center',color:'#0085a1',}}> 
                <h5>&copy; Copyrights: {new Date().getFullYear()} TREX SOLUTIONS</h5>
            </div>

        </div>
    )
}

