import React from "react";
import PropTypes from "prop-types";
// import { connect } from "react-redux";
// import { setUpdatingContent } from "ducks/app";
import { isEmpty } from "lodash";
import Breadcrumb from "containers/LayoutContainers/Breadcrumb";

// const mapStateToProps = (state, props) => ({
//   isUpdatingContent: state.app.isUpdatingContent
// });

// @connect(mapStateToProps)
class AppContent extends React.Component {
  static contextTypes = {
    getContentBuffer: PropTypes.func
  };

  //   node: HTMLElement;

  shouldComponentUpdate(nextProps) {
    if (this.props.isUpdatingContent && !nextProps.isUpdatingContent) {
      return false;
    }
    return true;
  }

  componentDidUpdate() {
    const { isUpdatingContent, dispatch } = this.props;
    if (isUpdatingContent) {
      //   dispatch(setUpdatingContent(false));
      //   setUpdatingContent(false);
    }
  }

  render() {
    const { getContentBuffer } = this.context;
    const { pathName, content } = getContentBuffer();
    return isEmpty(content) ? (
      // <div className="utils__loadingPage" />
      <div>hola</div>
    ) : (
      <div className="utils__content">
        <Breadcrumb name={pathName} />
        {content}
      </div>
    );
  }
}

export default AppContent;
