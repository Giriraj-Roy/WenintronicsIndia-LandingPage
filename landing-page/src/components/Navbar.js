import React, { useState } from 'react'
import ScooterMenu from './ScooterMenu';

const Navbar = () => {

    const [clicked, setClicked]= useState(false);

    // function showScooter(e){
    //     e.preventDefault();
    //     setClicked(!clicked);
    //     let view = clicked ? "inline-block" : "none";
        
        
        
    // }

    return (
        <>
            <div className='navbar'>
                <span className='rectOuter'><span className='rectInner'></span></span>
                <div className='navPanel'>
                    <span className='navAbout'>About</span>
                    <span className='navStore'>Locate Store</span> 
                                
                    <span style={{marginRight: "3vh", display: "inline-block"}}>Scooter  <a href="#" onClick={ () => setClicked(!clicked) }><span className='mediaArrow' ></span></a></span>

                    <span style={{marginRight: "3vh", display: "inline-block"}}>Purchase Assistance  <span className='mediaArrow'></span></span>
                    <button className="btnDealer">Dealership</button>
                </div>
            </div>
            {clicked && <ScooterMenu/>}
       </>
    )
}

export default Navbar
