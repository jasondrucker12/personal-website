import React from 'react';
import './App.css';
import {resume} from './data/resume.js';
import ResumeItem from './Components/ResumeItem.js';
import PhotoWall from './Components/PhotoWall.js';
//Theming
import { ThemeProvider } from 'emotion-theming'
//import preset from '@rebass/preset';
import theme from './theme';
import { Heading, Card, Box, Flex, Text, Image } from 'rebass';
import { useSpring, animated } from 'react-spring';




function App() {
  const expElements = resume.experience.map((el) =>
    <ResumeItem item={el}/>
  );

  const animatedProps = useSpring({opacity: 1, from: {opacity: 0}});


  return (
    <ThemeProvider theme={theme}>
      <Heading
        variant = 'pageHeader'
        >
        Jason Drucker
      </Heading>
      <Flex>
        <Box
          width={1/3}
          >
          <Card
            m={5}
            bg='cardBackground'
            >
            <Text variant='description'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
          </Card>
        </Box>
        <Box
          width={2/3}>
          <PhotoWall/>
        </Box>
      </Flex>
      <Card variant='resumecontainer'>
        <Heading>PROFESSIONAL EXPERIENCE</Heading>
        <animated.div style={animatedProps}>
          {expElements}
        </animated.div>
      </Card>
    </ThemeProvider>
  );
}

export default App;
