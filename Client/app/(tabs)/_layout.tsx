import { Tabs } from "expo-router";
import React from "react";
import { HapticTab } from "@/components/haptic-tab";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarShowLabel: true,
        tabBarActiveTintColor: "#ffffffff", // iOS blue style
        tabBarInactiveTintColor: "#8e8e93",
        tabBarStyle: {
          position: "absolute",
          backgroundColor: "#030303ff",
          borderTopWidth: 0,
          height: 65,
          shadowColor: "#3f3f3fff",
          shadowOpacity: 0.1,
          shadowOffset: { width: 0, height: 5 },
          shadowRadius: 10,
          elevation: 10,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "600",
          marginBottom: 6,
        },
        tabBarIconStyle: {
          marginTop: 6,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <MaterialIcons
              name="home"
              size={24}
              color={focused ? "#fff" : color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          tabBarIcon: ({ color, focused }) => (
            <Feather name="search" size={24} color={focused ? "#fff" : color} />
          ),
        }}
      />
      <Tabs.Screen
        name="booking"
        options={{
          title: "Bookings",
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome5
              name={focused ? "bookmark" : "bookmark"}
              size={20}
              color={focused ? "#fff" : color}
              solid={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="user"
        options={{
          title: "User",
          tabBarIcon: ({ color, focused }) => (
            <Feather
              name={focused ? "user" : "user"}
              size={24}
              color={focused ? "#fff" : color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
