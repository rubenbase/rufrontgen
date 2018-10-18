import * as React from "react";
import { Card, List } from "antd";
import { withFindMenus } from "@rufrontgen/controller";
import { Link } from "react-router-dom";

const { Meta } = Card;

class C extends React.PureComponent {

  render() {
    const { menus, loading } = this.props;
    return (
      <div>
        <div className="listings-title">Próximos Concursos Literarios</div>
        {loading && <div>...loading</div>}
        <List
          dataSource={menus}
          renderItem={item => (
            <Link to={`/menu/${item.id}`}>
              <List.Item>
                <List.Item.Meta
                  key={`${item.id}-card`}
                  title={item.name}
                />
                <button onClick={()=>this.props.deleteMenu({ menuId:item.id})}>delete</button>
              </List.Item>
            </Link>
          )}
        />
      </div>
    );
  }
}
export const FindMenusConnector = withFindMenus(C);
