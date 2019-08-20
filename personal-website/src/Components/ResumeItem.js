import React from 'react';
import { Card, Box, Text, Image, Flex} from 'rebass';
import { AnimateText } from './AnimateText.js';
import chevron from '../data/icons/chevron-downward.png';
import { iconary } from '../data/icons/index.js';

export default class ResumeItem extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      display: false
    }
  }

  componentDidMount(){

  }

  render(){
    const bullets = this.state.display ?
      <Box
        p={2}>
        {this.props.item.bulletPoints.map((el) =>
          <AnimateText text={el}/>
        )}</Box> :
      [];

    console.log(this.props.item.icon)

    return (
      <Card
        variant = 'resumecard'
        onMouseEnter ={() => this.setState({display: !this.state.display})}
        onMouseLeave ={() => this.setState({display: !this.state.display})}
        >
        <Flex alignItems='center'>
          <Box w={1/10}>
            <Image src={iconary[this.props.item.id]} maxHeight={60} p={1} m={'auto'}/>
          </Box>
          <Box w={8/10} p={2}>
            <Text
              fontSize={[ 2, 3, 4 ]}
              >
              <b>{this.props.item.company}</b> - {this.props.item.position}
            </Text>
            <Text
              fontSize={[ 1, 2, 3 ]}
              >
              {this.props.item.startDate} - {this.props.item.endDate} | {this.props.item.location}
            </Text>
          </Box>
          <Box w={1/10} ml='auto'>
            <Image src={chevron} maxHeight={30} p={1}  />
          </Box>
        </Flex>
        {bullets}
      </Card>
    );
  }
}
