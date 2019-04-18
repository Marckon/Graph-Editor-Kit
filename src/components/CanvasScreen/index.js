import React, {Component} from 'react';
import {Stage, Layer, Image, Text, Group, Rect} from 'react-konva';

class CanvasScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageObj: null,
      textX: 0,
      textY: 0,
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
      /*console.log(this.stageRef.getStage().scale());
      this.stageRef.getStage().scale({
        x: 1 / 3,
        y: 1 / 3
      });
      this.stageRef.getStage().draw()*/
    const a = document.createElement('a');
    a.href = this.stageRef.getStage().toDataURL();
    a.download = `banner-${new Date().getTime()}.png`;

    a.click();
  };

  // 更改文本位置，使其居中
  changeTextPosition = () => {
    this.setState({
      textX: (this.props.canvasWidth - this.textRef.getTextWidth()) / 2,
      textY: (this.props.canvasHeight - this.textRef.getTextHeight()) / 2
    })
  };

  componentDidUpdate(prevProps) {
    if (prevProps.imageUrl !== this.props.imageUrl) {
      this.loadImage();
    }
    if (prevProps.text !== this.props.text) {
      this.changeTextPosition();
    }
  }

  componentDidMount() {
    this.loadImage();
    this.props.onRef(this);
  }

  render() {
    const {canvasHeight, canvasWidth, text, className, imageWidth, imageHeight, fontSize, fontColor} = this.props;
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
            <Rect
              width={canvasWidth}
              height={canvasHeight}
              fill={this.props.wrapperColor}
            />
          </Layer>
          <Layer>
            <Group>
              <Text
                x={this.state.textX}
                y={this.state.textY}
                text={text}
                fontSize={fontSize}
                fill={fontColor}
                align={"center"}
                verticalAlign={"middle"}
                ref={node => this.textRef = node}
              />
            </Group>
          </Layer>
        </Stage>
      </div>
    )
  }
}

export default CanvasScreen;