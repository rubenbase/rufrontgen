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
        {({ loading, dishes, deleteDish }) => {
          if (loading) {
            return <div>...loading</div>;

          }

          return (
            <div>
               {dishes.map((d, i) => (
                <div key={`${i}-lm`}>{d.name} <Link to={`/dish/${d.id}/edit`}>edit</Link> 
                <button onClick={()=>deleteDish({ dishId:d.id})}>delete</button>
              </div> 
                
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
