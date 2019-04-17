import React,{Component} from 'react';

class ToolBar extends Component{
  constructor(props){
    super(props);

  }

  render(){
    return (
      <div {...this.props}>
        <form action="">
          <input type="text" placeholder={"paste image url here"} onChange={e=>this.props.onImageChange(e.target.value)}/>
        </form>
      </div>
    )
  }
}

export default ToolBar;