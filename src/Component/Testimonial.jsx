import React, { useState } from 'react'

import "../assets/Style7.css"

const Testimonial = () => {

    const Testimonials = [
        {
          quote: "This is the best product I've ever used!",
          author: "Jane Doe",
        },
        {
          quote: "I highly recommend this product to everyone!",
          author: "John Smith",
        },
        {
          quote: "This product has completely changed my life!",
          author: "Bob Johnson",
        },
      ];

      const [current,setcurrent]=useState(0);


      const nextclick=()=>{
        setcurrent((current+1) % Testimonials.length);
      }
      const prevclick=()=>{
        setcurrent((current +Testimonials.length-1)%Testimonials.length)
      }

  return (
    <div  className='testimonials'>
        
       <div className="testimonials-quote">
       {Testimonials[current].author}
       </div>
       <div className="testimonials-author">
        {Testimonials[current].quote};
       </div>
        
        <div className="testimonials-nav">
          <button  onClick={prevclick}>prev</button>
          <button  onClick={nextclick}>next</button>
        </div>

       


      


      
    </div>
  )
}





export default Testimonial

