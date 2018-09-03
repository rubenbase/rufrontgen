import * as React from "react";
import { Card, List, Avatar } from "antd";
import { withFindListings } from "@rufrontgen/controller";
import { Link } from "react-router-dom";

const { Meta } = Card;

class C extends React.PureComponent {
  render() {
    const { listings, loading } = this.props;
    return (
      <div>
        <div className="listings-title">Próximos Concursos Literarios</div>
        {loading && <div>...loading</div>}
        <List
          dataSource={listings}
          renderItem={item => (
            <Link to={`/listing/${item.id}`}>
              <List.Item>
                <List.Item.Meta
                  key={`${item.id}-card`}
                  avatar={<Avatar src={item.pictureUrl} />}
                  title={item.name}
                  description={item.owner.email}
                />
              </List.Item>
            </Link>
          )}
        />
      </div>
    );
  }
}
export const FindListingsConnector = withFindListings(C);
