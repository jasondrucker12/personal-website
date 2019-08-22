import React from 'react';
import { picary, restary } from '../data/pictures/index.js';
import { bwpicary, bwrestary} from '../data/bwpictures/index.js';
import { Image, Flex, Box } from 'rebass';
import { ImageCell } from './ImageCell.js';

export default class PhotoWall extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      curPhotos: picary,
      restPhotos: restary,
      bwCurPhotos: bwpicary,
      bwRestPhotos: bwrestary
    }
  }

  componentDidMount(){

      let i = 0;
      const intervalChange = setInterval(() => {

        let rest =  this.state.bwRestPhotos;
        let photos =  this.state.bwCurPhotos;

        rest.push(photos[i]);
        photos[i] = rest.shift();
        this.setState({
          bwCurPhotos: photos,
          bwRestPhotos: rest
        });

        rest = this.state.restPhotos;
        photos = this.state.curPhotos;

        rest.push(photos[i]);
        photos[i] = rest.shift();
        this.setState({
          curPhotos: photos,
          restPhotos: rest
        });

        if(i < 5)
          i++;
        else
          i = 0;
      }, 2000);
  }

  render(){
    const imagecells = [];
    for(let i = 0; i<6; i++){
      imagecells.push(
                      <ImageCell
                        w={1/3}
                        id={i}
                        srcary={[this.state.bwCurPhotos[i], this.state.curPhotos[i]]}
                        />
      )
    }

    return(
      <Flex flexWrap='wrap'>
        {imagecells}
      </Flex>
    );
  }
}
