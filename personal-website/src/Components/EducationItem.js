import React from 'react';
import { Card, Box, Text, Image, Flex} from 'rebass';
import { AnimateText } from './AnimateText.js';

export default class EducationItem extends React.Component{
  constructor(props){
    super(props);
  }

  render(){

    return (
      <Card
        variant = 'resumecard'
        //onMouseEnter ={() => this.setState({display: !this.state.display})}
        //onMouseLeave ={() => this.setState({display: !this.state.display})}
        >
        <Text
          fontSize={[ 2, 3, 4 ]}>
          <b>{this.props.item.school}</b>
        </Text>
        <Text
          fontSize={[ 1, 2, 3 ]}>
          Class of {this.props.item.endDate}
        </Text>

      </Card>
    );
  }
}
