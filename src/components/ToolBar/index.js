import React, {Component} from 'react';
import Form from 'antd/lib/form';
import Input from 'antd/lib/input';

class ToolBar extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className={this.props.className}>
        <Form action="">
          <Input
            type="text"
            placeholder={"paste image url here"}
            onChange={e => this.props.onImageChange(e.target.value)}
          />
          <Input
            type={"text"}
            placeholder={"input text"}
            onChange={e => this.props.onTextChange(e.target.value)}
          />
        </Form>
      </div>
    )
  }
}

export default ToolBar;