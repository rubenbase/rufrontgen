import React from "react";
import PropTypes from "prop-types";
import { graphql, compose } from "react-apollo";

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

  shouldComponentUpdate(nextProps: { isUpdatingContent: boolean }) {
    if (this.props.isUpdatingContent && !nextProps.isUpdatingContent) {
      console.log("_______ALIBABA shouldComponentUpdate IS FALSE ");
      return false;
    }
    console.log("_______ALIBABA shouldComponentUpdate IS TRUE ");

    return true;
  }

  componentDidUpdate() {
    console.log("_______ALIBABA componentDidUpdate  ");

    const { isUpdatingContent, dispatch } = this.props;
    if (isUpdatingContent) {
      dispatch(setUpdatingContent(false));
    }
  }

  render() {
    const { getContentBuffer } = this.context;
    console.log("ALIBABA EN PAGE CONTENT THIS CONTEXT IS => ", this.context);
    const { pathName, content } = getContentBuffer();
    const result = getContentBuffer();
    console.log("ALIBABA THIS RESULT IS ->>", result);

    console.log("ALIBABA EN PAGE CONTENT PATHNAME is => ", pathName);
    console.log("ALIBABA & CONTENT ARE => ", content);

    return isEmpty(content) ? (
      // <div className="utils__loadingPage" />
      <div>hola</div>
    ) : (
      <div className="utils__content">
        <Breadcrumb name={pathName} {...this.props} />
        {content}
      </div>
    );
  }
}

export default compose(
  graphql(setCurrentLanguage, { name: "setCurrentLanguage" }),
  graphql(getCurrentLanguage, {
    props: ({ data: { currentLanguage, loading, error } }) => ({
      currentLanguage,
      loading,
      error
    })
  })
)(AppContent);
