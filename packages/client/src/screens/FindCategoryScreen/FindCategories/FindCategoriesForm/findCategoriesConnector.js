import * as React from "react";
import { List } from "antd";
import { withFindCategories } from "@rufrontgen/controller";
import { Link } from "react-router-dom";

class C extends React.PureComponent {
  render() {
    const { categories, loading } = this.props;
    return (
      <div>
        <div className="categories-title">Busque su categoria</div>
        {loading && <div>...loading</div>}
        <List
          dataSource={categories}
          renderItem={item => (
            <Link to={`\categories/${item.id}`}>
              <List.Item>
                <List.Item.Meta key={`${item.id}-card`} title={item.name} />
              </List.Item>
            </Link>
          )}
        />
      </div>
    );
  }
}

export const FindCategoriesConnector = withFindCategories(C);
