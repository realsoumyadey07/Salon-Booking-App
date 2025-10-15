import {
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import CustomButton from "@//components/CustomButton";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

const registerSchema = yup.object({
  username: yup.string().required("Username is required!"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[0-9]/, "Password must contain at least one numeric digit")
    .matches(
      /[!@#$%^&*(),.?\":{}|<>]/,
      "Password must contain at least one special character"
    ),
});

const loginSchema = yup.object({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[0-9]/, "Password must contain at least one numeric digit")
    .matches(
      /[!@#$%^&*(),.?\":{}|<>]/,
      "Password must contain at least one special character"
    ),
});

export default function Authentication() {
  const [screen, setScreen] = useState<"Login" | "Registration">("Login");
  const router = useRouter();

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<{ username?: string; email: string; password: string }>({
    resolver: yupResolver(
      screen === "Registration" ? registerSchema : loginSchema
    ),
  });

  useEffect(() => {
    const checkLogin = async () => {
      const token = await AsyncStorage.getItem("accessToken");
      if (token) {
        router.replace("/(tabs)/home");
      }
    };
    checkLogin();
  }, [router]);

  useEffect(() => {
    reset({
      username: "",
      email: "",
      password: "",
    });
  }, [screen, reset]);

  const handleLogin = (data: any) => {};
  const handleRegistration = (data: any) => {};

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../../assets/images/login.jpg")}
        style={styles.image}
      >
        <LinearGradient
          colors={[
            "transparent",
            "rgba(255, 255, 255, 0.7)",
            "rgba(255, 255, 255, 1)",
          ]}
          style={styles.gradient}
        />
      </ImageBackground>
      <View style={styles.buttonContainer}>
        <Text style={styles.heading}>Glamify</Text>
        <Text style={styles.text}>
          A perfect destination for your looks.....
        </Text>
        {screen === "Login" && (
          <View style={{ width: "100%" }}>
            <View style={{ marginTop: 20 }}>
              <Controller
                control={control}
                name="email"
                render={({ field: { onChange, value } }) => (
                  <>
                    <TextInput
                      placeholder="Enter your email here..."
                      onChangeText={onChange}
                      value={value}
                      style={styles.input}
                    />
                    {errors.email && (
                      <Text style={styles.errorText}>
                        {errors.email.message}
                      </Text>
                    )}
                  </>
                )}
              />
              <Controller
                control={control}
                name="password"
                render={({ field: { onChange, value } }) => (
                  <>
                    <TextInput
                      placeholder="Enter your password here..."
                      secureTextEntry
                      onChangeText={onChange}
                      value={value}
                      style={styles.input}
                    />
                    {errors.password && (
                      <Text style={styles.errorText}>
                        {errors.password.message}
                      </Text>
                    )}
                  </>
                )}
              />
            </View>
            <CustomButton
              title="Login"
              handleSubmit={handleSubmit(handleLogin)}
              textStyle={styles.buttonText}
              buttonStyle={styles.buttonStyle}
            />
            <TouchableOpacity
              onPress={() => setScreen("Registration")}
              style={{ marginTop: 10 }}
            >
              <Text style={{ color: "blue" }}>Don&apos;t have an account?</Text>
            </TouchableOpacity>
          </View>
        )}
        {screen === "Registration" && (
          <>
            <View style={{ marginTop: 20 }}>
              <Controller
                control={control}
                name="username"
                render={({ field: { onChange, value } }) => (
                  <>
                    <TextInput
                      placeholder="Enter your username here..."
                      onChangeText={onChange}
                      value={value}
                      style={styles.input}
                    />
                    {errors.username && (
                      <Text style={styles.errorText}>
                        {errors.username.message}
                      </Text>
                    )}
                  </>
                )}
              />

              <Controller
                control={control}
                name="email"
                render={({ field: { onChange, value } }) => (
                  <>
                    <TextInput
                      placeholder="Enter your email here..."
                      onChangeText={onChange}
                      value={value}
                      style={styles.input}
                    />
                    {errors.email && (
                      <Text style={styles.errorText}>
                        {errors.email.message}
                      </Text>
                    )}
                  </>
                )}
              />

              <Controller
                control={control}
                name="password"
                render={({ field: { onChange, value } }) => (
                  <>
                    <TextInput
                      placeholder="Enter your password here..."
                      secureTextEntry
                      onChangeText={onChange}
                      value={value}
                      style={styles.input}
                    />
                    {errors.password && (
                      <Text style={styles.errorText}>
                        {errors.password.message}
                      </Text>
                    )}
                  </>
                )}
              />
            </View>

            <CustomButton
              title="Signup"
              handleSubmit={handleSubmit(handleRegistration)}
              textStyle={styles.buttonText}
              buttonStyle={styles.buttonStyle}
            />

            <TouchableOpacity
              onPress={() => setScreen("Login")}
              style={{ marginTop: 10 }}
            >
              <Text style={{ color: "blue" }}>Do you have an account?</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    width: 400,
    height: 400,
    position: "absolute",
    top: 0,
  },
  gradient: {
    flex: 1,
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "30%", // Adjust the height to control the blur area
  },
  buttonContainer: {
    marginTop: 40,
    paddingHorizontal: 20,
    width: "100%",
  },
  heading: {
    fontWeight: 600,
    fontSize: 24,
    color: "#3b3b3b",
  },
  text: {
    color: "#474747",
    fontSize: 15,
  },
  buttonStyle: {
    backgroundColor: "#141414",
    paddingVertical: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
  input: {
    width: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    borderRadius: 5,
    padding: 15,
    marginBottom: 20,
    color: "gray",
    borderWidth: 1,
    borderColor: "gray",
  },
  errorText: {
    color: "red",
    marginBottom: 10,
  },
});
