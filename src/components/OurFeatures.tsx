import React from 'react'

const OurFeatures = () => {
  return (
    <div className="our_features_container">
        <div className="features_internal_container">
            <div className="features_data_container">
                <h1>Our Features</h1>
                <h3>Stay by the hour, pay only for the time you need</h3>
            </div>
            <div className="list_of_features">
                <ul>
                    <li>Flexible booking options</li>
                    <li>Discreet and private accommodations</li>
                    <li>Comfortable and well-appointed rooms</li>
                    <li>Affordable pricing</li>
                    <li>Convenient location</li>
                </ul>
            </div>
            <div className="features_image_container">
                <img src="https://i.pinimg.com/originals/3b/66/58/3b6658b6e22b8da1e4025ad965112478.jpg" alt="couple" />
            </div>
        </div>
    </div>
  )
}

export default OurFeatures