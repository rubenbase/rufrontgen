import * as React from "react";
import { Card, List, Avatar } from "antd";
import { withFindListings } from "@rufrontgen/controller";

const { Meta } = Card;
const data = [
  {
    title: "Ant Design Title 1"
  },
  {
    title: "Ant Design Title 2"
  },
  {
    title: "Ant Design Title 3"
  },
  {
    title: "Ant Design Title 4"
  }
];

class C extends React.PureComponent {
  render() {
    const { listings, loading } = this.props;
    return (
      <div>
        {loading && <div>...loading</div>}
        {listings.map(l => (
          <List
            itemLayout="horizontal"
            renderItem={item => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar alt={l.name} src={l.pictureUrl} />}
                  title={l.name}
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
