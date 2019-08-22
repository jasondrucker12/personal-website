import React from 'react';
import { Flex, Text, Box } from 'rebass';

export const SubHeadingBadge = (props) => {
  return(
  <Flex alignItems='center'>
    <Box
      sx={{
        display: 'inline-block',
        color: 'white',
        bg: 'primary',
        px: 3,
        py: 1,
        borderRadius: 9999,
        ml: 'auto',
        mr: 'auto'
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
