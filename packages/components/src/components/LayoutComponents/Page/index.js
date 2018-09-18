import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { initAuth, setLoading, setUpdatingContent, resetHideLogin } from 'ducks/app'
import axios from 'axios'
import NotFoundPage from 'pages/DefaultPages/NotFoundPage'

let source = null

const mapStateToProps = (state, props) => ({
  isLoading: state.app.isLoading,
})

type FunctionOnMounted = () => Promise<any>

@connect(mapStateToProps)
class Page extends React.Component {
  props: {
    roles: Array<string>,
    pathName: any,
    onMounted: ?FunctionOnMounted,
    isNotFound: boolean,
    children: any,
    isLoading: boolean,
    dispatch: Function,
  }

  static propTypes = {
    roles: PropTypes.array,
    pathName: PropTypes.any,
    isNotFound: PropTypes.bool,
    onMounted: PropTypes.func,
    children: PropTypes.any,
    // from connect
    isLoading: PropTypes.bool,
    dispatch: PropTypes.func,
  }

  static contextTypes = {
    setContentBuffer: PropTypes.func,
  }

  static defaultProps = {
    roles: [],
    pathName: null,
    isNotFound: false,
    onMounted: null,
    isLoading: false,
    dispatch: () => {},
  }

  isFirstContent = true
  _onMounted = null
  timeoutId = null
  isStartLoading = false
  source = null

  updateContent = () => {
    const { setContentBuffer } = this.context
    const { isNotFound, pathName, children, dispatch } = this.props
    setContentBuffer({ pathName, content: isNotFound ? <NotFoundPage /> : children })
    dispatch(setUpdatingContent(true))
    if (this.isFirstContent) {
      this.isFirstContent = false
      setTimeout(() => window.scrollTo(0, 0))
    }
  }

  stopLoading = () => {
    if (this.isStartLoading) {
      this.isStartLoading = false
      const { dispatch } = this.props
      setTimeout(() => {
        dispatch(setLoading(false))
        dispatch(resetHideLogin())
      })
    }
  }

  componentDidMount() {
    if (source) {
      source.cancel()
    }
    // FIXME https://github.com/axios/axios/issues/978
    source = axios.CancelToken.source()
    source.token.throwIfRequested = source.token.throwIfRequested
    source.token.promise.then = source.token.promise.then.bind(source.token.promise)
    source.token.promise.catch = source.token.promise.catch.bind(source.token.promise)
    axios.defaults.cancelToken = source.token
    const { onMounted, roles, dispatch } = this.props
    if (roles.length > 0) {
      this._onMounted = () => {
        return dispatch(initAuth(roles)).then(response => {
          if (response && onMounted) {
            return onMounted()
          }
        })
      }
    } else {
      this._onMounted = onMounted
    }
    if (this._onMounted) {
      dispatch(setLoading(true))
      this.isStartLoading = true
      let isResolve = false
      this.timeoutId = setTimeout(() => {
        this.timeoutId = null
        if (isResolve) {
          this.stopLoading()
        }
      }, 0) // show state.app.isLoading equal or more then 0ms
      if (this._onMounted) {
        this._onMounted()
          .catch(error => {
            if (axios.isCancel(error)) {
              // nothing
            } else {
              //console.log('error', error)
            }
          })
          .then(() => {
            isResolve = true
            if (!this.timeoutId) {
              this.stopLoading()
            }
          })
      }
    } else {
      this.updateContent()
    }
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId)
    }
    this.stopLoading()
  }

  componentDidUpdate() {
    const { isLoading } = this.props
    if (this._onMounted && !isLoading) {
      this.updateContent()
    }
  }

  render() {
    return null
  }
}

export default Page
