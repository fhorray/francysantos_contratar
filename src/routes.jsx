import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./pages/Home";
import Duty from "./pages/Duty";
import Favorites from "./pages/Favorites";
import MyAccount from "./pages/MyAccount";

import { Entypo, Feather } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function Router() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: true,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          position: "absolute",
          backgroundColor: "#fff",
          borderTopWidth: 1,
          borderTopColor: "#ccc",
          paddingTop: 20,
          paddingBottom: 20,
          height: 80,
          flex: 1,
          flexDirection: "row",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => {
            return <Entypo name="home" color={color} size={size}></Entypo>;
          },
        }}
      />

      <Tab.Screen
        name="Plantões"
        component={Duty}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Feather name="clipboard" color={color} size={size}></Feather>
            );
          },
        }}
      />

      <Tab.Screen
        name="Favoritos"
        component={Favorites}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Entypo name="heart-outlined" color={color} size={size}></Entypo>
            );
          },
        }}
      />
      <Tab.Screen
        name="Minha conta"
        component={MyAccount}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => {
            return <Feather name="user" color={color} size={size}></Feather>;
          },
        }}
      />
    </Tab.Navigator>
  );
}
