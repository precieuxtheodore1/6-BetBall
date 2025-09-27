import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "../screens/SplashScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import HomeScreen from "../screens/HomeScreen";
import GamesScreen from "../screens/GamesScreen";
import DefisScreen from "../screens/DefisScreen";
import LiveScreen from "../screens/LiveScreen";
import CompetitionsScreen from "../screens/CompetitionsScreen";
import InfosScreen from "../screens/InfosScreen";
import MenuScreen from "../screens/MenuScreen";
import ProfileScreen from "../screens/ProfileScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Games" component={GamesScreen} />
      <Stack.Screen name="Defis" component={DefisScreen} />
      <Stack.Screen name="Live" component={LiveScreen} />
      <Stack.Screen name="Competitions" component={CompetitionsScreen} />
      <Stack.Screen name="Infos" component={InfosScreen} />
      <Stack.Screen name="Menu" component={MenuScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
    }
