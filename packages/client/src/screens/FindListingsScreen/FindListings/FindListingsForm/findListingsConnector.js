import * as React from "react";
import { Card } from "antd";
import { withFindListings } from "@rufrontgen/controller";

const { Meta } = Card;

class C extends React.PureComponent {
  render() {
    const { listings, loading } = this.props;
    return (
      <div>
        {loading && <div>...loading</div>}
        {listings.map(l => (
          <Card
            key={`${l.id}-card`}
            hoverable={true}
            style={{ width: 240 }}
            cover={
              <img
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
            }
          >
            <Meta title={l.name} description="add description here" />
          </Card>
        ))}
      </div>
    );
  }
}
export const FindListingsConnector = withFindListings(C);
