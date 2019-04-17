import React, {Component} from 'react';
import {Stage, Layer, Image, Text} from 'react-konva';

class CanvasScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageObj: null
    }
  };

  loadImage = () => {
    const imageObj = new window.Image();
    imageObj.src = this.props.imageUrl;
    imageObj.onload = () =>{
      this.setState({
        imageObj
      })
    }
  };

  componentDidUpdate(prevProps) {
    if (prevProps.imageUrl !== this.props.imageUrl) {
      this.loadImage();
    }
  }

  componentDidMount() {
    this.loadImage();
  }

  render() {
    const {canvasHeight, canvasWidth, imageUrl, className} = this.props;
    return (
      <div className={className}>
        <Stage width={canvasWidth} height={canvasHeight}>
          <Layer>
            <Image
              width={canvasWidth}
              height={canvasHeight}
              image={this.state.imageObj}
              x={0}
              y={0}
            />
          </Layer>
          <Layer>
            <Text
              text={imageUrl}
            />
          </Layer>
        </Stage>
      </div>
    )
  }
}

export default CanvasScreen;