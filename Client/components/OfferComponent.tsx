import { ImageBackground, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View } from "react-native";

type OfferProps = {
  _id: string;
  title: string;
  discount: number;
  image: ImageSourcePropType;
};

export default function OfferComponent({ _id, title, discount, image }: OfferProps) {
  return (
    <TouchableOpacity style={styles.card}>
      <ImageBackground source={image} style={styles.image} resizeMode="cover" imageStyle={styles.imageStyle}>
        <View style={styles.overlay}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.discount}>{discount}% OFF</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 100,
    height: 150,
    borderRadius: 12,
    overflow: "hidden", // ensures rounded corners apply to image
    marginRight: 12,
    elevation: 4, // Android shadow
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  image: {
    flex: 1,
    justifyContent: "flex-end", // positions text at bottom
  },
  imageStyle: {
    borderRadius: 12,
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.4)",
    padding: 10,
  },
  title: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "500",
  },
  discount: {
    color: "#ffeb3b",
    fontSize: 14,
    fontWeight: "500",
  },
});
