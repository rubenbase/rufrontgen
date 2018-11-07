import * as React from "react";
import { ViewMenu } from "@rufrontgen/controller";
import { DishConnector } from "modules/Dishes";
import { Link } from "react-router-dom";

export default class ViewMenuConnector extends React.PureComponent {
  render() {
    const {
      match: {
        params: { menuId }
      }
    } = this.props;
    return (
      <ViewMenu menuId={menuId}>
        {data => {
          console.log(data);

          if (!data.menu) {
            return <div>...loading</div>;
          }

          return (
            <div>
              {data.menu.name}
              <div>
                <Link to={`/menu/${menuId}/create-dish`}>Create Dish</Link>
              </div>
              <DishConnector {...this.props} />
            </div>
          );
        }}
      </ViewMenu>
    );
  }
}
