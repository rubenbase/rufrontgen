import React from 'react'
import './style.scss'
import { Mention } from 'antd'

export default function(ReactDOM, mountNode) {
  const { toContentState } = Mention

  class App extends React.Component {
    state = {
      value: toContentState('@afc163'),
    }
    componentDidMount() {
      this.mention.focus()
    }
    handleChange = editorState => {
      this.setState({
        value: editorState,
      })
    }
    render() {
      return (
        <Mention
          ref={ele => (this.mention = ele)}
          suggestions={['afc163', 'benjycui', 'yiminghe', 'RaoHai', '中文', 'にほんご']}
          value={this.state.value}
          onChange={this.handleChange}
        />
      )
    }
  }

  ReactDOM.render(<App />, mountNode)
}
