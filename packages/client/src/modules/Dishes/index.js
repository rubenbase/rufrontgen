import * as React from "react";
import { Link } from "react-router-dom";
import { ViewDishes } from "@rufrontgen/controller";

export class DishConnector extends React.PureComponent {
  unsubscribe = null;

  render() {
    const {
      match: {
        params: { menuId }
      }
    } = this.props;
    return (
      <ViewDishes menuId={menuId}>
        {({ loading, dishes }) => {
          alert(JSON.stringify(menuId))
          if (loading) {
            return <div>...loading</div>;
          }

          return (
            <div>
               {dishes.map((d, i) => (
                <div key={`${i}-lm`}>{d.name}</div>
              ))} 
              <div>
                <Link to={`/menu/${menuId}/edit`}>edit</Link>
              </div>
            </div>
          );
        }}
      </ViewDishes>
    );
  }
}
