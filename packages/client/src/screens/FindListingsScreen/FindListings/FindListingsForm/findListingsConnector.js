import * as React from "react";
import { Card, List, Avatar } from "antd";
import { withFindListings } from "@rufrontgen/controller";
import "./style.scss";

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
            hoverable={true}
            itemLayout="horizontal"
            renderItem={item => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar src={l.pictureUrl} />}
                  title={<a href="./">{l.name}</a>}
                  description={l.owner.email}
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
