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
                 <div>
                <Link to={`/dish/${d.id}`}>
                <div key={`${i}-lm`}>{d.name} 

                <button onClick={()=>deleteDish({ dishId:d.id})}>delete</button>
              </div> 
              </Link> 
              <Link to={`/dish/${d.id}/edit`}>edit</Link> 
              </div>
              ))} 
            </div>
          );
        }}
      </ViewDishes>
    );
  }
}
