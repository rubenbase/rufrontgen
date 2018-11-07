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
        <Link to={`/create-menu`}>Create Menu</Link>
        {loading && <div>...loading</div>}
        <List
          dataSource={menus}
          renderItem={item => (<div>
            <Link to={`/menu/${item.id}`}>
              <List.Item>
                <List.Item.Meta
                  key={`${item.id}-card`}
                  title={item.name}
                />
                <button onClick={()=>this.props.deleteMenu({ menuId:item.id})}>delete</button>
              </List.Item>
            </Link>
            <Link to={`/menu/${item.id}/edit`}>edit</Link>
          </div>)}
        />
      </div>
    );
  }
}
export const FindMenusConnector = withFindMenus(C);
