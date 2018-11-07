import * as React from "react";
import { Link } from "react-router-dom";
import { ViewAllergenes } from "@rufrontgen/controller";

export class AllergenesConnector extends React.PureComponent {
  unsubscribe = null;

  render() {
    const {
      match: {
        params: { dishId }
      }
    } = this.props;
    return (
      <ViewAllergenes dishId={dishId}>
        {({ loading, allergenes, deleteAllergene }) => {
          console.log(allergenes);
          if (loading) {
            return <div>...loading</div>;

          }

          return (
            <div>
               {allergenes.map((d, i) => (
                 <Link to={`/allergene/${d.id}/`}>
                <div key={`${i}-lm`}>{d.name} <Link to={`/allergene/${d.id}/edit`}>edit</Link> 
                <button onClick={()=>deleteAllergene({ allergeneId:d.id})}>delete</button>
              </div> 
                </Link>
              ))} 
            </div>
          );
        }}
      </ViewAllergenes>
    );
  }
}
