import React from "react";
import Helmet from "react-helmet";
import PersonPage from "./PersonPage";

class PersonTestScreen extends React.Component {

  render() {    
    
    return (

      <div>
        <Helmet title = "Person Test" />
        <PersonPage />
      </div>

    );
  }
  
}

export default PersonTestScreen;
