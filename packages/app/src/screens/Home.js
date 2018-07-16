import React from "react";
import { ScrollView, Text, Linking, View } from "react-native";

const images = [
  {
    key: 1,
    name: "Nathan Anderson",
    url: "https://unsplash.com/photos/C9t94JC4_L8"
  },
  {
    key: 2,
    name: "Jamison McAndie",
    url: "https://unsplash.com/photos/waZEHLRP98s"
  },
  {
    key: 3,
    name: "Alberto Restifo",
    url: "https://unsplash.com/photos/cFplR9ZGnAk"
  },
  {
    key: 4,
    name: "John Towner",
    url: "https://unsplash.com/photos/89PFnHKg8HE"
  }
];

export default () => (
  <View style={{ flex: 1 }}>
    <ScrollView contentContainerStyle={{ paddingVertical: 20 }}>
      {images.map(({ name, url, key }) => (
        <Text style={{ marginBottom: 10 }}>Photo by {name}.</Text>
      ))}
    </ScrollView>
  </View>
);
