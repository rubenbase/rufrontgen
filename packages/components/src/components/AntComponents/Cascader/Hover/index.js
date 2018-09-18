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
          children: [
            {
              value: 'xihu',
              label: 'West Lake',
            },
          ],
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
          children: [
            {
              value: 'zhonghuamen',
              label: 'Zhong Hua Men',
            },
          ],
        },
      ],
    },
  ]

  function onChange(value) {
    console.log(value)
  }

  // Just show the latest item.
  function displayRender(label) {
    return label[label.length - 1]
  }

  ReactDOM.render(
    <Cascader
      options={options}
      expandTrigger="hover"
      displayRender={displayRender}
      onChange={onChange}
    />,
    mountNode,
  )
}
