import React, { useState, useEffect } from 'react';
import { Image, Box } from 'rebass';
import { useSpring, animated } from 'react-spring';


export const ImageCell = (props) => {
  const id = props.id;
  const [imgind, setImgInd] = useState(0);

  useEffect(() => {
    console.log(id)
  });

  return (
      <Image
        onMouseEnter ={() => setImgInd(1)}
        onMouseLeave ={() => setImgInd(0)}
        width={props.w}
        boxShadow='card'
        src={props.srcary[imgind]}
        p={3}/>
  );
}
