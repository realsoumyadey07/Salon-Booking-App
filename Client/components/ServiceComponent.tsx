import { Image, TouchableOpacity, View, Text, StyleSheet } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

type ServiceProps = {
  id: string;
  thumbnail: string;
  title: string;
  rating?: number;
  distance?: string;
  onPress?: () => void;
};

export default function ServiceComponent({
  id,
  thumbnail,
  title,
  rating = 4.8,
  distance = "0.7 km",
  onPress,
}: ServiceProps) {
  return (
    <TouchableOpacity style={styles.card} activeOpacity={0.8} onPress={onPress}>
      <Image
        source={typeof thumbnail === "string" ? { uri: thumbnail } : thumbnail}
        style={styles.thumbnail}
      />

      <View style={styles.infoContainer}>
        <View style={styles.headerRow}>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.ratingContainer}>
            <FontAwesome name="star" size={12} color="#ffeb3b" />
            <Text style={styles.ratingText}>{rating}</Text>
          </View>
        </View>

        <View style={styles.footerRow}>
          <Text style={styles.distance}>{distance}</Text>
          <TouchableOpacity style={styles.bookButton}>
            <Text style={styles.bookText}>BOOK NOW</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 220,
    backgroundColor: "#111",
    borderRadius: 10,
    overflow: "hidden",
    marginRight: 16,
  },
  thumbnail: {
    width: "100%",
    height: 120,
  },
  infoContainer: {
    padding: 12,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 14,
    flex: 1,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  ratingText: {
    color: "#fff",
    fontSize: 12,
    marginLeft: 4,
  },
  footerRow: {
    marginTop: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  distance: {
    color: "#aaa",
    fontSize: 12,
  },
  bookButton: {
    backgroundColor: "#ffeb3b",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  bookText: {
    fontSize: 12,
    fontWeight: "700",
    color: "#000",
  },
});
