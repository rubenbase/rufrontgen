import * as React from "react";
import { Card } from "antd";
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
          <Card
            key={`${l.id}-card`}
            hoverable={true}
            style={{ width: 240 }}
            cover={l.pictureUrl && <img alt={l.name} src={l.pictureUrl} />}
          >
            <Meta title={l.name} description={l.owner.email} />>
          </Card>
        ))}
      </div>
    );
  }
}
export const FindListingsConnector = withFindListings(C);
