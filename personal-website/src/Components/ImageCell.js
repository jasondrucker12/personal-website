import React from 'react';
import { Image } from 'rebass';

export const ImageCell = (props) => {
  const id = props.id;
  return (
    <Image
      width={props.w}
      src={props.src[id]}
      p={3}/>
  );
}
