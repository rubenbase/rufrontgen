import React from "react";
import MainMenu from "../../../modules/LayoutComponents/MainMenu/index";
import { EditDishConnector } from "./EditDishForm/editDishConnector";
class EditDish extends React.Component {
  
  render() {

    return (
      <div className="login login--fullscreen">
        <MainMenu />
        <div className="login__block mb-5">
          <div className="row">
            <div className="col-xl-12">
              <div className="login__block__inner">
                <div className="login__block__form">
                  <EditDishConnector {...this.props}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EditDish;
