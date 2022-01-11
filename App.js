import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CarouselScreen from "./src/screen/CarouselScreen";

export default function App() {
  return <CarouselScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
