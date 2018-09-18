// @flow
import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { menuData } from '../Menu/MenuLeft'
import { reduce } from 'lodash'
import './style.scss'

@withRouter
class Breadcrumb extends React.Component {
  state = {
    breadcrumb: [],
  }

  getPath(data, url, parents = []) {
    let items = reduce(
      data,
      (result, entry) => {
        if (result.length) {
          return result
        } else if (entry.url === url) {
          return [entry].concat(parents)
        } else if (entry.children) {
          let nested = this.getPath(entry.children, url, [entry].concat(parents))
          return nested ? nested : result
        }
        return result
      },
      [],
    )
    return items.length > 0 ? items : false
  }

  getBreadcrumb = (props, items) => {
    let { breadcrumb } = this.state
    let url = props.location.pathname
    let [activeMenuItem, ...path] = this.getPath(items, url)
    if (activeMenuItem && path.length) {
      breadcrumb = path.reverse().map((item, index) => {
        if (index === path.length - 1) {
          return (
            <span key={item.key}>
              <span className="breadcrumbBar__arrow text-muted" />
              <span className="text-muted">{item.title}</span>
              <span className="breadcrumbBar__arrow" />
              <strong>{activeMenuItem.title}</strong>
            </span>
          )
        } else {
          return (
            <span key={item.key}>
              <span className="breadcrumbBar__arrow text-muted" />
              <span className="text-muted">{item.title}</span>
            </span>
          )
        }
      })
    } else {
      breadcrumb = (
        <span>
          <span className="breadcrumbBar__arrow" />
          <strong>{props.name}</strong>
        </span>
      )
    }
    return breadcrumb
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      breadcrumb: this.getBreadcrumb(newProps, menuData),
    })
  }

  componentDidMount() {
    this.setState({
      breadcrumb: this.getBreadcrumb(this.props, menuData),
    })
  }

  render() {
    let { breadcrumb } = this.state
    return (
      <div className="breadcrumbBar">
        <div className="breadcrumbBar__path">
          <Link to={`/dashboard/alpha`} className="text-muted">
            Home
          </Link>
          {breadcrumb}
        </div>
      </div>
    )
  }
}

export default Breadcrumb
