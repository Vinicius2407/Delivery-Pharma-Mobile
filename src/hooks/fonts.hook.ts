import * as Font from "expo-font";

export async function useFonts() {
  await Font.loadAsync({
    "gelion-regular": require("../assets/fonts/gelion/gelion-regular.ttf"),
    "gelion-medium": require("../assets/fonts/gelion/gelion-medium.ttf"),
    "gelion-bold": require("../assets/fonts/gelion/gelion-bold.ttf"),
  });
}
