import * as React from "react";
import { ViewDish } from "@rufrontgen/controller";
import { AllergenesConnector } from "modules/Allergenes";
export default class ViewMenuConnector extends React.PureComponent {
  render() {
    const {
      match: {
        params: { dishId }
      }
    } = this.props;
    return (
      <ViewDish dishId={dishId}>
        {data => {
          console.log(data);

          if (!data.dish) {
            return <div>...loading</div>;
          }

          return (
            <div>
              {data.dish.name}
              <AllergenesConnector {...this.props} />
            </div>
          );
        }}
      </ViewDish>
    );
  }
}
