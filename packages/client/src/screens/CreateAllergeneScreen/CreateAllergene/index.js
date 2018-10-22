import React from "react";
import MainMenu from "../../../modules/LayoutComponents/MainMenu/index";
import { CreateAllergeneConnector } from "./CreateAllergeneForm/createAllergeneConnector";
class CreateAllergene extends React.Component {
  
  render() {

    return (
      <div className="login login--fullscreen">
        <MainMenu />
        <div className="login__block mb-5">
          <div className="row">
            <div className="col-xl-12">
              <div className="login__block__inner">
                <div className="login__block__form">
                  <CreateAllergeneConnector {...this.props}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateAllergene;
