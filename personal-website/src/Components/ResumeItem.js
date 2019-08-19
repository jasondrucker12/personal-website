import React from 'react';
import { Card, Box, Text, Image, Flex} from 'rebass';
import { AnimateText } from './AnimateText.js';
// import visa from '../data/icons/visa-black.png';
// import chevron from '../data/icons/chevron-downward.png';

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

    return (
      <Card
        variant = 'resumecard'
        onMouseEnter ={() => this.setState({display: !this.state.display})}
        onMouseLeave ={() => this.setState({display: !this.state.display})}
        >
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
          {bullets}
      </Card>
    );
  }
}
