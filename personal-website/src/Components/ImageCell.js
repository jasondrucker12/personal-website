import React, { useState } from 'react';
import { Image, Box } from 'rebass';
import { useSpring, animated } from 'react-spring';


export const ImageCell = (props) => {
  const id = props.id;
  const [imgind, setImgInd] = useState(0);

  return (
      <Image
        onMouseEnter ={() => setImgInd(1)}
        onMouseLeave ={() => setImgInd(0)}
        width={props.w}
        src={props.srcary[imgind][id]}
        p={3}/>
  );
}
