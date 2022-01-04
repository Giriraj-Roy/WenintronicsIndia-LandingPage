import React from 'react'

const Scooter = () => {
    return (
        <div style={{backgroundBlendMode: 'overlay'}}>
            {<img className='scooterImage' src={require('./scooter.jpg')} alt='scooter' />}
            {/* {<img className='circleImage' src={require('./74499-circle.gif')} alt='scooter' width="700" height="700" />} */}
        </div>
    )
}

export default Scooter
