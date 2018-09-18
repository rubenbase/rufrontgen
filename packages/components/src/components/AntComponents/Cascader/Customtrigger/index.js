import React from 'react'
import './style.scss'
import { Cascader } from 'antd'

export default function(ReactDOM, mountNode) {
  const options = [
    {
      value: 'zhejiang',
      label: 'Zhejiang',
      children: [
        {
          value: 'hangzhou',
          label: 'Hangzhou',
        },
      ],
    },
    {
      value: 'jiangsu',
      label: 'Jiangsu',
      children: [
        {
          value: 'nanjing',
          label: 'Nanjing',
        },
      ],
    },
  ]

  class CitySwitcher extends React.Component {
    state = {
      text: 'Unselect',
    }

    onChange = (value, selectedOptions) => {
      this.setState({
        text: selectedOptions.map(o => o.label).join(', '),
      })
    }
    render() {
      return (
        <span>
          {this.state.text}
          &nbsp;
          <Cascader options={options} onChange={this.onChange}>
            <a href="javascript: void(0);">Change city</a>
          </Cascader>
        </span>
      )
    }
  }

  ReactDOM.render(<CitySwitcher />, mountNode)
}
