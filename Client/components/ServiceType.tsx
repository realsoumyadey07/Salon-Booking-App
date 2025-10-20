import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

type ServiceProp = {
  image: ImageSourcePropType;
  title: string;
};

export default function ServiceType({ image, title }: ServiceProp) {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.8}>
      <Image source={image} style={styles.image} accessibilityLabel={title} />
      <View>
        <Text style={styles.text}>{title}</Text>
        <Text style={{ color: "#000000ff", fontWeight: "600" }}>₹4000</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 170,
    height: 70,
    backgroundColor: "#424242ff",
    borderRadius: 10,
    padding: 5,
    borderColor: "#6e6e6eff",
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 55,
    height: 55,
    marginRight: 10,
    borderRadius: 10,
  },
  text: {
    color: "white",
    fontSize: 16,
    fontFamily: "BBHSansBogle-Regular",
  },
});
