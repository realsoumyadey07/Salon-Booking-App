import { StatusBar, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function CartId() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <Text>CartId</Text>
      </SafeAreaView>
      <StatusBar
        backgroundColor="transparent"
        translucent
        barStyle="light-content"
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000ff",
  },
});
