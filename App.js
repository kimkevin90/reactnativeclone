import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "./screens/LoginScreen";
import { createStackNavigator } from "@react-navigation/stack";
import RegisterScreen from "./screens/RegisterScreen";
import HomeScreen from "./screens/HomeScreen";
import AddChatScreen from "./screens/AddChatScreen";
import ChatScreen from "./screens/ChatScreen";

const Stack = createStackNavigator();
// 102
const globalScreenOptions = {
  headerStyle: { backgroundColor: "#2C6BED" },
  headerTitleStyle: { color: "white" },
  headerTintColor: "white",
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        // initialRouteName="Home"
        screenOptions={globalScreenOptions}
      >
        <Stack.Screen
          options={{
            title: "첫RN",
          }}
          name="Login"
          component={LoginScreen}
        />
        <Stack.Screen
          options={{
            title: "첫RN 회원가입",
          }}
          name="Register"
          component={RegisterScreen}
        />
        <Stack.Screen
          options={{
            title: "Home",
          }}
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          options={{
            title: "채팅시작",
          }}
          name="AddChat"
          component={AddChatScreen}
        />
        <Stack.Screen
          options={{
            title: "채팅시작",
          }}
          name="Chat"
          component={ChatScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
