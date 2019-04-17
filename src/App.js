import React, {Component} from 'react';
import './index.scss';
import CanvasScreen from './components/CanvasScreen';
import ToolBar from './components/ToolBar';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: '',
      canvasWidth: 600,
      canvasHeight: 600,
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

  render() {
    return (
      <div className={'main'}>
        <CanvasScreen
          className={'canvas-screen'}
          {...this.state}
        />
        <ToolBar
          className={'toolbar'}
          onImageChange={this.handleImageChange}
          onTextChange={this.handleTextChange}
          {...this.state}
        />
      </div>
    )
  }
}

export default App;
