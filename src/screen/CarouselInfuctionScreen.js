import React from "react";
import { StyleSheet, Text, View, Dimensions, Pressable } from "react-native";
import Carousel from "react-native-snap-carousel"; // 3.4.0

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

const CarouselInfuctionScreen = () => {
  const renderItem = ({ item }) => {
    return (
      <Pressable onPress={() => console.log(item)}>
        <View
          style={{
            width: ItemWidth,
            height: ItemHeight,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "blue",
          }}
        >
          <Text style={{ color: "white", fontSize: 40 }}>{item}</Text>
        </View>
      </Pressable>
    );
  };
  return (
    <View style={styles.container}>
      <Carousel
        layout={"stack"}
        data={Items}
        firstItem={FirstItem}
        itemWidth={ItemWidth}
        sliderWidth={SliderWidth}
        activeSlideAlignment="end"
        renderItem={renderItem}
      />
    </View>
  );
};

export default CarouselInfuctionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 50,
    backgroundColor: "#ecf0f1",
  },
});
