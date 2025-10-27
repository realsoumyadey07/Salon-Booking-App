import OfferComponent from "@/components/OfferComponent";
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Feather from "@expo/vector-icons/Feather";
import { useRouter } from "expo-router";
import ServiceType from "@/components/ServiceType";
import ServiceComponent from "@/components/ServiceComponent";

const discountData = [
  {
    _id: "dfgd",
    title: "Normal Haircutt",
    discount: 30,
    image: require("../../assets/images/onboarding1.jpg"),
  },
  {
    _id: "dfgf",
    title: "Speasial Hiar Spa",
    discount: 50,
    image: require("../../assets/images/onboarding2.jpg"),
  },
  {
    _id: "dfgj",
    title: "Hair Straightning",
    discount: 80,
    image: require("../../assets/images/onboarding3.jpg"),
  },
];

const serviceData = [
  {
    id: "dfgd",
    image: require("../../assets/images/onboarding1.jpg"),
    title: "Haircut",
  },
  {
    id: "dfgd",
    image: require("../../assets/images/onboarding1.jpg"),
    title: "Hairspa",
  },
  {
    id: "dfgd",
    image: require("../../assets/images/onboarding1.jpg"),
    title: "Body massage",
  },
];

export default function HomeScreen() {
  const router = useRouter();
  return (
    <>
      <SafeAreaView style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flexGrow: 1, paddingBottom: 80 }}
        >
          <View style={styles.headerSection}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                paddingHorizontal: 10,
                paddingVertical: 8,
              }}
            >
              <TouchableOpacity
                onPress={() => router.push("/notification/[id]")}
              >
                <Ionicons name="notifications" size={24} color="#aaaaaaff" />
              </TouchableOpacity>
              <Text
                style={{
                  fontSize: 15,
                  fontFamily: "BBHSansBogle-Regular",
                  color: "#aaaaaaff",
                }}
              >
                {new Date().toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </Text>
              <TouchableOpacity onPress={() => router.push("/cart/[id]")}>
                <FontAwesome name="opencart" size={24} color="#aaaaaaff" />
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                padding: 10,
                paddingVertical: 15,
              }}
            >
              <Text
                style={{
                  fontSize: 35,
                  fontWeight: "600",
                  color: "#ffffffff",
                  fontFamily: "BBHSansBogle-Regular",
                }}
              >
                HEY
              </Text>
              <Text
                style={{
                  fontSize: 35,
                  fontWeight: "600",
                  color: "#fff",
                  fontFamily: "BBHSansBogle-Regular",
                }}
              >
                SOUMYADIP DEY
              </Text>
            </View>
            <View style={styles.searchBar}>
              <Feather
                style={{
                  position: "absolute",
                  zIndex: 100,
                  left: 30,
                  top: 15,
                }}
                name="search"
                size={24}
                color="#ffeb3b"
              />

              <TouchableOpacity activeOpacity={0.8} onPress={() => router.push("/search")}>
                <View style={styles.input}>
                  <Text style={{ color: "#b1b1b1ff" }}>Search here</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ padding: 10, paddingVertical: 20 }}>
            <Text style={styles.sectionHeading}>Explore all services</Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                paddingVertical: 10,
                gap: 10,
              }}
            >
              {serviceData.map((s, i) => (
                <ServiceType key={i} image={s.image} title={s.title} />
              ))}
            </ScrollView>
          </View>
          <View style={{ padding: 10 }}>
            <Text style={styles.sectionHeading}>Explore all offers</Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.offerContainer}
            >
              {discountData.map((d, i) => (
                <OfferComponent
                  key={i}
                  _id={d._id}
                  title={d.title}
                  discount={d.discount}
                  image={d.image}
                />
              ))}
            </ScrollView>
          </View>
          <View style={{ padding: 10 }}>
            <Text style={styles.sectionHeading}>Book an appointment</Text>
            
            <ScrollView
              horizontal
              contentContainerStyle={{
                paddingVertical: 10,
                gap: 10,
              }}
            >
              <ServiceComponent
                id="erge"
                title="Normail haircut"
                thumbnail={require("../../assets/images/onboarding1.jpg")}
              />
              <ServiceComponent
                id="erge"
                title="Normail haircut"
                thumbnail={require("../../assets/images/onboarding1.jpg")}
              />
              <ServiceComponent
                id="erge"
                title="Normail haircut"
                thumbnail={require("../../assets/images/onboarding1.jpg")}
              />
            </ScrollView>
          </View>
        </ScrollView>
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
  headerSection: {
    width: "100%",
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
    paddingHorizontal: 50,
    backgroundColor: "#4a4a4aff",
  },
  sectionHeading: {
    fontSize: 15,
    fontWeight: "500",
    color: "#6b6b6bff",
    fontFamily: "BBHSansBogle-Regular",
  },
  bottomFade: {
    position: "absolute",
    bottom: 0,
    height: 120,
    width: "100%",
  },
  offerContainer: {
    paddingVertical: 10,
    gap: 10,
  },
});
