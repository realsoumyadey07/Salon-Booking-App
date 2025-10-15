import React, { useEffect } from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from "react-native";
import Swiper from "react-native-swiper";
import { LinearGradient } from "expo-linear-gradient";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";

const { width, height } = Dimensions.get("window");

const slides = [
  {
    id: 1,
    title: "Welcome to Glamify",
    description:
      "Your personal salon companion. Book appointments anytime, anywhere.",
    image: require("../assets/images/onboarding3.jpg"),
  },
  {
    id: 2,
    title: "Expert Stylists",
    description:
      "Get served by the best professionals with verified experience.",
    image: require("../assets/images/onboarding1.jpg"),
  },
  {
    id: 3,
    title: "Look Stunning!",
    description:
      "Choose from a range of beauty services and glow with confidence.",
    image: require("../assets/images/onboarding2.jpg"),
  },
];

export default function Index() {
  const router = useRouter();
  useEffect(() => {
    const checkLogin = async () => {
      const token = await AsyncStorage.getItem("accessToken");
      if (token) {
        router.replace("/(tabs)/home");
      }
    };
    checkLogin();
  }, [router]);

  return (
    <LinearGradient colors={["#fff", "#fff"]} style={styles.container}>
      <Swiper
        loop={false}
        showsButtons={false}
        dot={<View style={styles.dot} />}
        activeDot={<View style={styles.activeDot} />}
      >
        {slides.map((slide, index) => (
          <View key={slide.id} style={styles.slide}>
            <ImageBackground
              source={slide.image}
              style={styles.imageBackground}
              resizeMode="cover"
            >
              <View style={styles.overlay} />

              <LinearGradient
                colors={["rgba(108, 108, 108, 0)", "rgba(255,255,255,1)"]}
                style={styles.bottomFade}
              />
            </ImageBackground>

            <View style={styles.textContainer}>
              <Text style={styles.title}>{slide.title}</Text>
              <Text style={styles.description}>{slide.description}</Text>

              {index === slides.length - 1 && (
                <TouchableOpacity style={styles.button} onPress={()=> router.push("/(auth)/authentication")}>
                  <Text style={styles.buttonText}>Get Started</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        ))}
      </Swiper>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  slide: {
    flex: 1,
  },
  imageBackground: {
    width: width,
    height: height / 1.5,
    justifyContent: "flex-end",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.25)",
  },
  bottomFade: {
    position: "absolute",
    bottom: 0,
    height: 120,
    width: "100%",
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#333",
    textAlign: "center",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    lineHeight: 22,
  },
  dot: {
    backgroundColor: "#ccc",
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: "#000",
    width: 20,
    height: 8,
    borderRadius: 5,
    marginHorizontal: 4,
  },
  button: {
    backgroundColor: "#000",
    paddingVertical: 14,
    paddingHorizontal: 60,
    borderRadius: 30,
    marginTop: 40,
    elevation: 3,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
