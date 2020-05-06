import React from 'react';


const ImageZoom = ({imgURL}) => {
  return (
    <figure>
      <img src={imgURL} className="main-img"/>
    </figure>
  )
}

export default ImageZoom;