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
import { Heading, Card, Box, Flex, Text, Image, Link } from 'rebass';
import { useSpring, animated } from 'react-spring';

import photo from './data/pictures/jasonheadshot.jpg';//'./data/pictures/parisHeadshot.jpg';
import linkedinlogo from './data/icons/linkedin-logo.png';
import githublogo from './data/icons/github-logo.png';

function App() {
  const expElements = resume.experience.map((el) =>
    <ResumeItem item={el}/>
  );

  const animatedProps = useSpring({opacity: 1, from: {opacity: 0}});

  return (
    <ThemeProvider theme={theme}>

      <Flex
        sx= {{
          alignItems: 'center',
          bg: 'primary',
          color: 'white',
          boxShadow: 'card'
        }}>
        <Box
            w={1/2}>
          <Heading
            variant = 'pageHeader'
            >
            Jason Drucker
          </Heading>
        </Box>
        <Box w={1/2} ml='auto' alignItems='center'>
          <Box variant='contactinfo'>
            <Text fontSize={3} textAlign='right'>jdrucker@villanova.edu</Text>
            <Text fontSize={3} textAlign='right'>973-590-4887</Text>
          </Box>
          <Box variant='contactinfo'>
            <Link href='https://www.linkedin.com/in/jason-drucker-61a0b512a/'>
              <Image maxHeight={42} src={linkedinlogo}/>
            </Link>
          </Box>
          <Box variant='contactinfo'>
            <Link href='https://github.com/jasondrucker12/personal-website'>
              <Image maxHeight={42} src={githublogo}/>
            </Link>
          </Box>
        </Box>
      </Flex>

      <Flex sx={{
          alignItems:'center',
          bg: 'cardbg',
          boxShadow: 'insetcard',
        }}>
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
                maxHeight: 350,
                ml:'auto',
                mr:'auto',
                display: 'block'
              }}
              src={photo}/>
            <Text variant='description'>
            <Text display='inline-block' color='primary'><b>Hello. </b></Text> {resume.description}
            </Text>
          </Card>
        </Box>
        <Box
          width={2/3}>
          <PhotoWall/>
        </Box>
      </Flex >
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
