import React, {Component} from 'react';
import {Stage, Layer, Image, Text, Group} from 'react-konva';

class CanvasScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageObj: null,
      imageHeight: 0,
      imageWidth: 0,
      imagePosition: [0, 0],
      textPosition: [0, 0],
    }
  };

  loadImage = () => {
    const imageObj = new window.Image();
    imageObj.src = this.props.imageUrl;
    imageObj.onload = () => {
      console.log(imageObj.width, imageObj.height)
      this.setState({
        imageObj,
        imageHeight: imageObj.height,
        imageWidth: imageObj.width,
      })
    }
  };

  onImageDrag = (pos) => {
    this.setState({
      imagePosition: [pos.x, pos.y]
    });
    return {
      x: pos.x,
      y: pos.y
    };
  };

  onTextDrag = pos => {
    this.setState({
      textPosition: [pos.x, pos.y]
    });
    return {
      x: pos.x,
      y: pos.y
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
    const {canvasHeight, canvasWidth, text, className} = this.props;
    return (
      <div className={className}>
        <Stage width={canvasWidth} height={canvasHeight}>
          <Layer>
            <Group
              draggable={true}
              dragBoundFunc={this.onImageDrag}
              x={this.state.imagePosition[0]}
              y={this.state.imagePosition[1]}
            >
              <Image
                width={this.state.imageWidth}
                height={this.state.imageHeight}
                image={this.state.imageObj}
              />
            </Group>

          </Layer>
          <Layer>
            <Group
              draggable={true}
              dragBoundFunc={this.onTextDrag}
            >
              <Text
                text={text}
              />
            </Group>
          </Layer>
        </Stage>
      </div>
    )
  }
}

export default CanvasScreen;