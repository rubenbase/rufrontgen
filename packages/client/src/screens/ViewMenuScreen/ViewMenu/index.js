import * as React from "react";
import { ViewMenu } from "@rufrontgen/controller";
import { DishConnector } from "modules/Dishes";
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
              <DishConnector {...this.props} />
            </div>
          );
        }}
      </ViewMenu>
    );
  }
}
