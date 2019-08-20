import React from 'react';
import { Flex, Text, Box } from 'rebass';

export const SubHeadingBadge = (props) => {
  return(
  <Flex alignItems='center'>
    <Box
      width={1}
      sx={{
        //display: 'inline-block',
        color: 'black',
        bg: 'white',
        px: 2,
        py: 1,
        //borderRadius: 9999,
    }}>
      <Text
        textAlign='center'
        fontSize = {[2,3,4]}>
        <b>{props.title}</b>
      </Text>
    </Box>
  </Flex>
  );
}
