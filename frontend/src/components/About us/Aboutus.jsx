import React from 'react'
import './Aboutus.css'
import  {assets } from '../../assets/assets'

const Aboutus = () => {
  return (
    <div className='Aboutus'id='Aboutus'>
        <h3>Our Services</h3>
        <h1>Just sit back at home </h1>
        <h2>we will take care!</h2>
        <div className="Aboutus-services-img-container"> 
         
          <div> <br/> 
            <img src={assets.service_01} alt="" />
          <h2>Quick delivery</h2>
          <p>Accepted all type of deliveries and have fastest delivery!</p></div>
         <div> <br/>
           <img src={assets.service_02} alt="" />
          <h2>Super Dine In</h2>
          <p>Hungry?Just Wait! Food at your door.</p>
          </div>
         <div> <br/>
          <img src={assets.service_03} alt="" />
          <h2>Easy Pick Up </h2>
          <p>Fresh and Hot Delicious Food reached on time!</p>
          </div>
        </div>
        <div>
         
         </div>
         
    </div>
  )
}

export default Aboutus