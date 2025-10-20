import { Stack } from "expo-router";
import "react-native-reanimated";
import { useFonts } from "expo-font";


export const unstable_settings = {
  anchor: "(tabs)",
};

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    "BBHSansBogle-Regular": require("../assets/fonts/BBHSansBogle-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null; // or a loading screen
  }

  return (
    <>
      <Stack initialRouteName="(tabs)">
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="cart/[id]" options={{ headerShown: false }} />
        <Stack.Screen name="notification/[id]" options={{ headerShown: false }} />
        <Stack.Screen
          name="modal"
          options={{ presentation: "modal", title: "Modal" }}
        />
      </Stack>
    </>
  );
}
