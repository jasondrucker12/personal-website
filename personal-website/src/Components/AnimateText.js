import React from 'react';
import { Text } from 'rebass';
import { useSpring, animated } from 'react-spring';

export const AnimateText = (props) => {
  return(
    <animated.div style={useSpring({opacity: 1, from: {opacity: 0}})}>
      <Text
        textAlign='left'
        m={1}>
          • {props.text}
      </Text>
    </animated.div>
  );
}
