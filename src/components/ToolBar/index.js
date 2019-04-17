import React, {Component} from 'react';
import Form from 'antd/lib/form';
import Input from 'antd/lib/input';

class ToolBar extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    let {Item} = Form;

    let {getFieldDecorator} = this.props.form;

    const formItemLayout = {
      labelCol: {
        xs: {span: 24},
        sm: {span: 8},
      },
      wrapperCol: {
        xs: {span: 24},
        sm: {span: 16},
      },
    };

    return (
      <div className={this.props.className}>
        <Form {...formItemLayout}>
          <Item
            label={"图片链接"}
          >
            {
              getFieldDecorator('imageUrl', {})(
                <Input
                  type="text"
                  size={"large"}
                  placeholder={"paste image url here"}
                  onChange={e => this.props.onImageChange(e.target.value)}
                />)
            }
          </Item>
          <Item
            label={"输入文字"}
          >
            {
              getFieldDecorator('text', {})(
                <Input
                  type={"text"}
                  size={"large"}
                  placeholder={"input text"}
                  onChange={e => this.props.onTextChange(e.target.value)}
                />
              )
            }
          </Item>
        </Form>
      </div>
    )
  }
}

export default Form.create()(ToolBar);