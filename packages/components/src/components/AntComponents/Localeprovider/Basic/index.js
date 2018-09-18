import React from 'react'
import './style.scss'
import { Pagination, LocaleProvider } from 'antd'

import enUS from 'antd/lib/locale-provider/en_US'

export default function(ReactDOM, mountNode) {
  const App = () => (
    <div>
      <Pagination defaultCurrent={1} total={50} showSizeChanger />
    </div>
  )

  ReactDOM.render(
    <LocaleProvider locale={enUS}>
      <App />
    </LocaleProvider>,
    mountNode,
  )
}
