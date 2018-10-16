import * as React from "react";
import { ViewCategory } from "@rufrontgen/controller";
import { MessageConnector } from "containers/Messages";

export default class ViewCategoryConnector extends React.PureComponent {
  render() {
    const {
      match: {
        params: { categoryId }
      }
    } = this.props;
    return (
      <ViewCategory categoryId={categoryId}>
        {data => {
          console.log(data);

          if (!data.category) {
            return <div>...loading</div>;
          }

          return (
            <div>
              {data.category.name}
              <MessageConnector {...this.props} />
            </div>
          );
        }}
      </ViewCategory>
    );
  }
}
