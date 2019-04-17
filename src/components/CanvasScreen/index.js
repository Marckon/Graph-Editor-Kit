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
      console.log(imageObj.width, imageObj.height);
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

  // 被父组件调用的方法
  // 注意：跨域的图片将无法下载
  downloadImage = () => {
    console.log(this.stageRef);
    const a = document.createElement('a');
    a.href = this.stageRef.getStage().toDataURL();
    a.download = `看图${new Date().getTime()}.png`;

    a.click();
  };

  componentDidUpdate(prevProps) {
    if (prevProps.imageUrl !== this.props.imageUrl) {
      this.loadImage();
    }
  }

  componentDidMount() {
    this.loadImage();
    this.props.onRef(this);
  }

  render() {
    const {canvasHeight, canvasWidth, text, className} = this.props;
    return (
      <div className={className}>
        <Stage width={canvasWidth} height={canvasHeight} ref={node => this.stageRef = node}>
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
                fontSize={this.props.fontSize}
                fill={this.props.fontColor}
              />
            </Group>
          </Layer>
        </Stage>
      </div>
    )
  }
}

export default CanvasScreen;