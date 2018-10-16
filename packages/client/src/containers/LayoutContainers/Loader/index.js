import React from "react";
// import { connect } from 'react-redux'

// const mapStateToProps = (state, props) => ({
//   isHideLogin: state.app.isHideLogin,
// })

// @connect(mapStateToProps)
class Loader extends React.Component {
  render() {
    //TODO: El true de isHideLogin esta hardcodeado.
    const { isHideLogin = true } = this.props;
    if (!isHideLogin) return null;
    return <div className="utils__loadingPage" />;
  }
}

export default Loader;
