import React from 'react'
import Scooter from './Scooter'

const Details = () => {
    return (
        <div className='details'>
            <Scooter/>
            <div className='description'>
                <div className='detailsHead'>A neat 
                headline 
                comes here !</div> 
                <br/>               
                <div className='detailsDescribed'>A neat sample text to come here super soon. Till then admire the authentic and delightful User Interface Design of the Website. We are glad you came here , thanks for visiting . </div>
                <br/>
                <button className='showDetails'>Show Details</button>    
            </div>
        </div>
    )
}

export default Details
