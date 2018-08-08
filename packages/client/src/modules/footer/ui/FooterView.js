import * as React from "react";
import style from "screens/LoginScreen/Login/style.scss";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class FooterView extends React.PureComponent {
  render() {
    return (
      <div className="login__footer text-center">
        <ul className="list-unstyled list-inline">
          <li className="list-inline-item">
            <Link to="javascript: void(0);">Terms of Use</Link>
          </li>
          <li className="active list-inline-item">
            <Link to="javascript: void(0);">Compliance</Link>
          </li>
          <li className="list-inline-item">
            <Link to="javascript: void(0);">Confidential Information</Link>
          </li>
          <li className="list-inline-item">
            <Link to="javascript: void(0);">Support</Link>
          </li>
          <li className="list-inline-item">
            <Link to="javascript: void(0);">Contacts</Link>
          </li>
        </ul>
      </div>
    );
  }
}
//link
