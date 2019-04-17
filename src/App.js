import React, {Component} from 'react';
import './index.scss';
import CanvasScreen from './components/CanvasScreen';
import ToolBar from './components/ToolBar';

/*class App extends Component {
  constructor(props) {
    super(props);
    this.canvas = React.createRef();
    this.state = {
      text: '',
      textSize: '',
      coordinate: [0, 0],
      canvasState: []
    };
    this.handleDrawClock = this.handleDrawClock.bind(this);
    this.handleUndo = this.handleUndo.bind(this);
  }

  drawClock(context) {
    context.beginPath();


    context.arc(250, 250, 100, 0, 2 * Math.PI, true);
    context.moveTo(250 + 95, 250);
    context.arc(250, 250, 95, 0, 2 * Math.PI, true);

    context.moveTo(250, 250);
    context.lineTo(250, 250 + 90);

    context.moveTo(250, 250);
    context.lineTo(180, 250 + 15);

    context.stroke();
  }

  drawText(context) {
    context.font = "bold 14px Arial";
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.fillText("six", 250, 250 + 90);

    context.textAlign = "start";
    context.fillText("sixg", 250, 250 + 80);
  }

  async handleTextChange(e) {
    e.preventDefault();
    console.log(e.target.form.tsize.value);
    await this.setState({
      text: e.target.form.tcontent.value,
      textSize: e.target.form.tsize.value,
      coordinate: [e.target.form.tx.value, e.target.form.ty.value],
    });
    this.drawDetailText(this.canvas.current.getContext("2d"));
  }

  drawDetailText(context) {
    console.log(this.state)
    let fontSize = 0;
    let textContent = this.state.text;
    let targetWidth = this.state.textSize;
    context.font = fontSize + "px Arial";
    while (context.measureText(textContent).width < targetWidth) {
      fontSize++;
      context.font = `${fontSize}px Arial`;
    }
    context.fillText(textContent, this.state.coordinate[0], this.state.coordinate[1]);
    console.log(context.measureText(textContent));
  }

  componentDidMount() {

  }

  handleDrawClock(e) {
    e.preventDefault();
    const drawing = this.canvas.current;
    let context = drawing.getContext("2d");
    this.drawClock(context);
    this.drawText(context);
    this.setState({
      canvasState: this.state.canvasState.concat(context.save())
    });
  }

  handleUndo(e) {
    e.preventDefault();
    let context = this.canvas.current.getContext("2d");
    context.restore()
  }

  render() {
    return (
      <div className={'container'}>
        <canvas width={500} height={500} ref={this.canvas}>

        </canvas>
        <form className={'form'}>
          <div>
            <input type="text" placeholder={"text content"} name={"tcontent"}/>
            <input type="text" placeholder={"text width"} name={"tsize"}/>
            <input type="text" placeholder={"text x position"} name={"tx"}/>
            <input type="text" placeholder={"text y position"} name={"ty"}/>
            <input type={"submit"} onClick={e => this.handleTextChange(e)} value={"confirm"}/>
          </div>
          <div>
            <button onClick={this.handleDrawClock}>draw clock</button>
          </div>
          <div>
            <button onClick={this.handleUndo}>undo</button>
          </div>
        </form>
      </div>
    );
  }
}*/


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: '',
      canvasWidth: 800,
      canvasHeight: 800,
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
        />
      </div>
    )
  }
}

export default App;
