import React from 'react';

const Thumbnail = (props) => {

  const thumbStyle = {
    maxHeight: '48px',
    maxWidth: '48px'
  }

  return (
    <div>
      <img style={thumbStyle} src={props.images.length ? props.images[Math.floor(props.images.length * Math.random())].image_URL : null}></img>
    </div>
  )
}

export default Thumbnail;

//Math.floor(props.images.length * Math.random())