import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Feather from "@expo/vector-icons/Feather";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

export default function SearchScreen() {
  const recentData = [
    {
      id: "hjdfgdf",
      title: "Salon Prime",
    },
    {
      id: "hjdfgdf",
      title: "Salon Prime",
    },
    {
      id: "hjdfgdf",
      title: "Salon Prime",
    },
  ];

  const treandingSearch = [
    {
      id: "hdfgddf",
      title: "Professional bathroom cleaning",
    },
    {
      id: "hdfgddf",
      title: "Salon",
    },
    {
      id: "hdfgddf",
      title: "Professional kitchen cleaning",
    },
    {
      id: "hdfgddf",
      title: "Washing machine repair",
    },
    {
      id: "hdfgddf",
      title: "TV repair",
    },
    {
      id: "hdfgddf",
      title: "Full home cleaning",
    },
  ];
  return (
    <>
      <SafeAreaView style={styles.container}>
        <Text style={styles.headerText}>Search</Text>
        <View style={styles.searchBar}>
          <TextInput
            placeholderTextColor={"#b1b1b1ff"}
            style={styles.input}
            placeholder="Search here..."
          />
          <TouchableOpacity
            style={{
              position: "absolute",
              zIndex: 100,
              right: 25,
              top: 15,
            }}
          >
            <Feather
              pointerEvents="none"
              name="search"
              size={24}
              color="#9e9e9eff"
            />
          </TouchableOpacity>
        </View>
        {recentData && (
          <View>
            <Text style={[styles.headerText, { fontSize: 20 }]}>Recents</Text>
            <ScrollView
              contentContainerStyle={{
                padding: 10,
                gap: 10,
              }}
            >
              {recentData.map((r, i) => (
                <TouchableOpacity
                  key={i}
                  style={{
                    flexDirection: "row",
                    padding: 10,
                    backgroundColor: "#4b4b4bff",
                    borderRadius: 10,
                    gap: 10,
                    alignItems: "center",
                  }}
                >
                  <MaterialIcons name="cached" size={24} color="#9e9e9eff" />
                  <Text style={{ color: "#b1b1b1ff" }}>{r.title}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        )}
        {treandingSearch && (
          <View>
            <Text style={[styles.headerText, { fontSize: 20 }]}>
              Trending search
            </Text>
            <View
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
                gap: 10,
                padding: 10,
              }}
            >
              {treandingSearch.map((t, i) => (
                <TouchableOpacity
                  key={i}
                  style={{
                    backgroundColor: "#4b4b4bff",
                    paddingVertical: 10,
                    paddingHorizontal: 15,
                    borderRadius: 20,
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <FontAwesome6
                    name="arrow-trend-up"
                    size={15}
                    color="#9e9e9eff"
                  />
                  <Text style={{ color: "#9e9e9eff", fontSize: 14 }}>
                    {t.title}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        )}
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
  headerText: {
    fontFamily: "BBHSansBogle-Regular",
    fontSize: 30,
    color: "#9d9d9dff",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  searchBar: {
    width: "100%",
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#6d6d6dff",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: "#4a4a4aff",
    color: "#b1b1b1ff",
  },
});
