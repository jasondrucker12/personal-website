import React from 'react';
import './App.css';
import {resume} from './data/resume.js';
import ResumeItem from './Components/ResumeItem.js';
import PhotoWall from './Components/PhotoWall.js';
import EducationItem from './Components/EducationItem.js';
import {SubHeadingBadge} from './Components/SubHeadingBadge.js';
//Theming
import { ThemeProvider } from 'emotion-theming'
//import preset from '@rebass/preset';
import theme from './theme';
import { Heading, Card, Box, Flex, Text, Image } from 'rebass';
import { useSpring, animated } from 'react-spring';

import photo from './data/pictures/parisHeadshot.jpg';

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
      <Flex alignItems='center'>
        <Box
          width={1/3}
          >
          <Card
            variant='descriptioncard'
            >
            <Image
              sx={{
                p: 3,
                borderRadius: 9999,
              }}
              src={photo}/>
            <Text variant='description'>
            <b>Hello.</b> {resume.description}
            </Text>
          </Card>
        </Box>
        <Box
          width={2/3}>
          <PhotoWall/>
        </Box>
      </Flex>
      <Card variant='resumecontainer'>
        <SubHeadingBadge title='PROFESSIONAL EXPERIENCE'/>
        <animated.div style={animatedProps}>
          {expElements}
        </animated.div>
      </Card>
      <Card variant='resumecontainer'>
        <SubHeadingBadge title='EDUCATION'/>
        <EducationItem item={resume.education[0]}/>
        <EducationItem item={resume.education[1]}/>
      </Card>
    </ThemeProvider>
  );
}

export default App;
