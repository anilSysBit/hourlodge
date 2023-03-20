import React from 'react'

const SmartFilter = () => {
  return (
    <div className="smart_filter_container">
        <style>{`
            .smart_filter_container{
                border:2px solid black;
                height:100%;
                width:100%;
                float:right;
            }
            .smart_header{
                text-align:center;
            }
            .smart_body_container{
            border:3px solid green;
            }
        `}</style>
        <div className="smart_header">
            <h1>SmartFilter</h1>
        </div>
        <div className="smart_body_container">
            
        </div>
    </div>
  )
}

export default SmartFilter