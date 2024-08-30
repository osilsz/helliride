import { FontAwesome, FontAwesome6, Fontisto } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function Layout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "blue" }}>
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          title: "chat",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="cog" color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="ride"
        options={{
          title: "ride",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Fontisto name="helicopter-ambulance" size={32} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "profile",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome6 name="user-large" size={28} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
