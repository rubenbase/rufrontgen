import * as React from "react";
import style from "screens/LoginScreen/Login/style.scss";
import { Link } from "react-router-dom";

export default class FooterView extends React.PureComponent {
  render() {
    return (
      <div className="login__footer text-center">
        <ul className="list-unstyled list-inline">
          <li className="list-inline-item">
            <Link to="./legal">Terms of Use</Link>
          </li>
          <li className="active list-inline-item">
            <Link to="./legal">Compliance</Link>
          </li>
          <li className="list-inline-item">
            <Link to="./legal">Confidential Information</Link>
          </li>
          <li className="list-inline-item">
            <Link to="./legal">Support</Link>
          </li>
          <li className="list-inline-item">
            <Link to="./legal">Contacts</Link>
          </li>
        </ul>
      </div>
    );
  }
}
//link
