import React from 'react'
import video from "../asset/video.mp4"

export const Home = () => {
  return (
    <div>
      <video autoPlay loop muted className='video'>
        <source src={video} type="video/mp4" />

        Your browser does not support the video tag.
      </video>
    <div className="card text-center mt-8  bg-transparent border-0 ">
      
        
      <div className="card-body text-white margin">
          <h5 className="card-title">Health Hub</h5>
          <p className="card-text">Consult with the doctors through out the world and make your family healthy</p>
          <a href="#" className="btn btn-primary">Know more</a>
        </div>
        
      </div>
    </div>
      
    
  )
}
