import * as React from "react";
import { Card, List, Avatar } from "antd";
import { withFindListings } from "@rufrontgen/controller";

const { Meta } = Card;

class C extends React.PureComponent {
  render() {
    const { listings, loading } = this.props;
    return (
      <div>
        <div className="listings-title">Próximos Concursos Literarios</div>

        {loading && <div>...loading</div>}
        {listings.map(l => (
          <List
            key={`${l.id}-card`}
            dataSource={listings}
            cover={l.pictureUrl && <img alt={l.name} src={l.pictureUrl} />}
            renderItem={item => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar src={item.pictureUrl} />}
                  title={<a href="./">{item.name}</a>}
                  description={item.owner.email}
                />
              </List.Item>
            )}
          />
        ))}
      </div>
    );
  }
}
export const FindListingsConnector = withFindListings(C);
