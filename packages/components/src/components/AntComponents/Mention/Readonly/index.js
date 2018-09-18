import React from 'react'
import './style.scss'
import { Mention } from 'antd'

export default function(ReactDOM, mountNode) {
  const { toString } = Mention

  function onChange(editorState) {
    console.log(toString(editorState))
  }

  const users = ['afc163', 'benjycui', 'yiminghe', 'jljsj33', 'dqaria', 'RaoHai']

  function App() {
    return (
      <div>
        <div style={{ marginBottom: 10 }}>
          <Mention
            style={{ width: '100%' }}
            onChange={onChange}
            placeholder="this is disabled Mention"
            suggestions={users}
            disabled
          />
        </div>
        <Mention
          style={{ width: '100%' }}
          onChange={onChange}
          placeholder="this is readOnly Mention"
          suggestions={users}
          readOnly
        />
      </div>
    )
  }

  ReactDOM.render(<App />, mountNode)
}
