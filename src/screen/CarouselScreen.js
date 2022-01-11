import React, { Component } from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";
import Carousel from "react-native-snap-carousel"; // 3.4.0

/*

If FirstItem is small (3), activeSlideAlignment works correctly. In other words,
the slide is centered in the viewport and the previous and next slides are visible.

If FirstItem is large (20), the slides are aligned to the left...

 */

let FirstItem = 3;
// FirstItem = 20;  // <----- UNCOMMENT THIS

const SliderWidth = Dimensions.get("screen").width;
const ItemWidth = 250.0;
const ItemHeight = 400.0;

const NumItems = 5;
const Items = [];
for (var i = 0; i < NumItems; i++) {
  Items.push(i);
}

export default class CarouselScreen extends Component {
  constructor(props) {
    super(props);
    this._renderItem = this._renderItem.bind(this);
  }

  _renderItem({ item }) {
    return (
      <View
        style={{
          width: ItemWidth,
          height: ItemHeight,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "purple",
        }}
      >
        <Text style={{ color: "white", fontSize: 40 }}>{item}</Text>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Carousel
          data={Items}
          firstItem={FirstItem}
          itemWidth={ItemWidth}
          sliderWidth={SliderWidth}
          activeSlideAlignment="center"
          renderItem={this._renderItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 50,
    backgroundColor: "#ecf0f1",
  },
});
