import React from 'react'

export default function GallaryBody(props) {
    var imageData = (props.data)
  return (
    <div>{
        imageData.map(image=>{
          return(
            <div key={image.id} className="column">
              <img src={image.img} alt=""></img>
            </div>
          )
        })
      }</div>
  )
}
