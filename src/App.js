import React, {Component} from 'react';
import './index.scss';
import CanvasScreen from './components/CanvasScreen';
import ToolBar from './components/ToolBar';
import message from 'antd/lib/message';

const CANVAS_WIDTH = 630;
const CANVAS_HEIGHT = 270;
const IMAGE_WIDTH = 630;
const IMAGE_HEIGHT = 270;
const FONT_SIZE = 60;
const FONT_COLOR = '#ffffff';
const TEXT_MAXLENGTH = 12;
const WRAPPER_COLOR = 'rgba(0,0,0,0.5)';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: '',
      canvasWidth: CANVAS_WIDTH,
      canvasHeight: CANVAS_HEIGHT,
      imageWidth: IMAGE_WIDTH,
      imageHeight: IMAGE_HEIGHT,
      fontSize: FONT_SIZE,
      fontColor: FONT_COLOR,
      textMaxLength: TEXT_MAXLENGTH,
      wrapperColor:WRAPPER_COLOR,
      text: ''
    }
  }

  handleImageChange = (url) => {
    this.setState({
      imageUrl: url
    })
  };

  handleTextChange = text => {
    this.setState({
      text
    })
  };

  handleDownload = () => {
    this.child.downloadImage()
  };

  onRef = ref => {
    this.child = ref;
  };

  // 本地文件上传，不进行网络传输
  handleLocalFileUpload = file => {
    console.log(file);
    if (file.type.split("/")[0] !== "image") {
      message.error("您上传的不是图片类型文件");
      return;
    }
    this.setState({
      imageUrl: URL.createObjectURL(file)
    });
    return false;
  };

  render() {
    return (
      <div className={'main'}>
        <CanvasScreen
          className={'canvas-screen'}
          // 双向绑定
          onRef={this.onRef}
          {...this.state}
        />
        <ToolBar
          className={'toolbar'}
          onImageChange={this.handleImageChange}
          onTextChange={this.handleTextChange}
          onDownload={this.handleDownload}
          onLocalFileUpload={this.handleLocalFileUpload}
          {...this.state}
        />
      </div>
    )
  }
}

export default App;
