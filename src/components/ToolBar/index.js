import React, {Component} from 'react';
import Form from 'antd/lib/form';
import Input from 'antd/lib/input';
import Slider from 'antd/lib/slider';
import InputNumber from 'antd/lib/input-number';
import {ChromePicker} from 'react-color';

const MAX_FONTSIZE = 800;
const MIN_FONTSIZE = 1;

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
        sm: {span: 6},
      },
      wrapperCol: {
        xs: {span: 24},
        sm: {span: 18},
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
          <Item
            label={"字体大小"}
          >
            {
              getFieldDecorator('fontSize', {})(
                <div>
                  <InputNumber
                    min={MIN_FONTSIZE}
                    max={MAX_FONTSIZE}
                    onChange={this.props.onFontSizeChange}
                    value={this.props.fontSize}
                  />
                  <Slider
                    min={MIN_FONTSIZE}
                    max={MAX_FONTSIZE}
                    onChange={this.props.onFontSizeChange}
                    value={this.props.fontSize}
                  />
                </div>
              )
            }
          </Item>
          <Item
            label={"文字颜色"}
          >
            {
              getFieldDecorator('fontColor',{})(
                <ChromePicker
                  color={this.props.fontColor}
                  onChange={this.props.onFontColorChange}
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