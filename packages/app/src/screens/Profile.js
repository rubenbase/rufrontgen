import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  Platform,
  StatusBar,
  SafeAreaView
} from "react-native";

import { ButtonGroup } from "react-native-elements";
import Icon from "react-native-vector-icons/Ionicons";

class Explore extends Component {
  constructor() {
    super();
    this.state = {
      selectedIndex: 2
    };
    this.updateIndex = this.updateIndex.bind(this);
  }

  updateIndex(selectedIndex) {
    this.setState({ selectedIndex });
  }
  componentWillMount() {
    this.startHeaderHeight = 80;
    if (Platform.OS == "android") {
      this.startHeaderHeight = 100 + StatusBar.currentHeight;
    }
  }

  render() {
    const buttons = ["Hoy", "Semana", "Mes"];
    const { selectedIndex } = this.state;

    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.Container}>
          <View style={styles.Content}>
            <Text style={styles.ImagePlaceholder}>Placeholder </Text>
            <View style={styles.Promo}>
              <View style={styles.PromoTextContainer}>
                <Text style={styles.PromoText}>Space for promotion</Text>
                <Text style={[styles.PromoText, styles.TextBold]}>
                  websiteofpromo.com
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              paddingHorizontal: 20,
              backgroundColor: "white",
              paddingTop: 30
            }}
          >
            <View
              style={{
                flexDirection: "row"
              }}
            >
              <View>
                <Text
                  style={{
                    fontSize: 20,
                    marginRight: 10
                  }}
                >
                  Hello,
                  <Text
                    style={{
                      fontSize: 24,
                      fontWeight: "700"
                    }}
                  >
                    {" "}
                    Ruben Costa
                  </Text>
                </Text>
              </View>
              <View style={styles.ButtonContainer}>
                <View style={[styles.Button, styles.UtilityButton]}>
                  <Text style={[styles.ButtonText, styles.UtilityButtonText]}>
                    Edit
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                marginTop: 20
              }}
            >
              <View>
                <ButtonGroup
                  onPress={this.updateIndex}
                  selectedIndex={selectedIndex}
                  buttons={buttons}
                  containerStyle={{ height: 50 }}
                />
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignSelf: "stretch"
  },
  Button: {
    flexDirection: "row",
    padding: 8,
    borderRadius: 6,
    justifyContent: "space-between",
    width: 60
  },
  ButtonText: {
    color: "white"
  },
  PromoTextContainer: {
    flex: 1,
    alignItems: "flex-end"
  },

  Content: {
    height: 300,
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
    marginTop: Platform.OS == "android" ? 30 : null
  },
  ImagePlaceholder: {
    backgroundColor: "#1e1e1e",
    color: "white",
    padding: 15,
    fontWeight: "bold",
    flex: 1,
    alignItems: "flex-end",
    fontSize: 20,
    alignSelf: "stretch",
    borderRadius: 6
  },
  Promo: {
    height: 60,
    flexDirection: "row",
    paddingTop: 16,
    paddingRight: 8,
    paddingBottom: 16,
    paddingLeft: 8
  },
  UtilityButton: {
    backgroundColor: "#ECECEC",
    alignItems: "center",
    justifyContent: "center"
  },
  UtilityButtonText: {
    color: "black"
  },
  TextBold: {
    fontWeight: "bold"
  }
});
export default Explore;
