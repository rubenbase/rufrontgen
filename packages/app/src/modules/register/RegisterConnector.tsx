import * as React from "react";
import { Button, WhiteSpace } from "antd-mobile-rn";
import { View } from "react-native";

export default class RegisterConnector extends React.PureComponent<any, any> {
  render() {
    return (
      <View>
        <WhiteSpace size="xs" />
        <Button type="primary">Testing connections between</Button>
      </View>
    );
  }
}
