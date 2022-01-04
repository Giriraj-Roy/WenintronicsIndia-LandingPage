import React from 'react'

const ContactBar = () => {
    return (
        <div className='contactBar'>
            <div style={{paddingLeft: '14vh', paddingTop: '0.7vh'}}>
                Support : +91 - 9090909090
            </div>
            <span style={{color: "red", margin: "auto", marginLeft: "20%"}}>Book a FREE Test Ride Now</span>
            <div className='contactPanel' >
                <span>Contact</span>
                <span>Career</span>                
                <span style={{marginRight: "3vh", display: "inline-block"}}>Media<span className='mediaArrow'></span></span>
            </div>
        </div>
    )
}

export default ContactBar
