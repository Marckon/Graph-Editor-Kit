import React, {Component} from 'react';
import './index.scss';
import CanvasScreen from './components/CanvasScreen';
import ToolBar from './components/ToolBar';
import message from 'antd/lib/message';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: '',
      canvasWidth: 600,
      canvasHeight: 600,
      text: '',
      fontSize: 36,
      fontColor: "#000000",
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

  handleFontSizeChange = newFontSize => {
    this.setState({
      fontSize: newFontSize
    })
  };

  handleFontColorChange = (color, event) => {
    this.setState({
      fontColor: color.hex
    })
  };

  handleDownload = () => {
    this.child.downloadImage()
  };

  onRef = ref => {
    this.child = ref;
  };

  // 本地文件上传，不进行网络传输
  handleLocalFileUpload = (file,fileList) => {
    console.log(file);
    fileList=[];
    if (file.type.split("/")[0] !== "image") {
      message.error("您上传的不是图片类型文件");
      return;
    }
    this.setState({
      imageUrl: URL.createObjectURL(file)
    });
    return false;
  };

  handleImageZoom = imageZoomPercent => {
    this.child.zoomImage(imageZoomPercent)
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
          onFontSizeChange={this.handleFontSizeChange}
          onFontColorChange={this.handleFontColorChange}
          onDownload={this.handleDownload}
          onLocalFileUpload={this.handleLocalFileUpload}
          onImageZoom={this.handleImageZoom}
          {...this.state}
        />
      </div>
    )
  }
}

export default App;
