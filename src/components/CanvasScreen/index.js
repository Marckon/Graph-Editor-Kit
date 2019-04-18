import React, {Component} from 'react';
import {Stage, Layer, Image, Text, Group} from 'react-konva';

class CanvasScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageObj: null,
    }
  };

  loadImage = () => {
    const imageObj = new window.Image();
    imageObj.src = this.props.imageUrl;
    imageObj.onload = () => {
      this.setState({
        imageObj,
      })
    }
  };


  // 被父组件调用的方法
  // 注意：跨域的图片将无法下载
  downloadImage = () => {
    console.log(this.stageRef);
    const a = document.createElement('a');
    a.href = this.stageRef.getStage().toDataURL();
    a.download = `banner-${new Date().getTime()}.png`;

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
    const {canvasHeight, canvasWidth, text, className, imageWidth, imageHeight} = this.props;
    return (
      <div className={className}>
        <Stage width={canvasWidth} height={canvasHeight} ref={node => this.stageRef = node}>
          <Layer>
            <Group
              x={0}
              y={0}
            >
              <Image
                width={imageWidth}
                height={imageHeight}
                image={this.state.imageObj}
              />
            </Group>
          </Layer>
          <Layer>
            <Group>
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