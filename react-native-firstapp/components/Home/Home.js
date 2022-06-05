import { View, Text, Button } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { Characters } from "../Characters";
import { Profile } from "../Profile";
import { PushNotificationScreen } from "../PushNotificationScreen";

// Routes Names
const characterName = "character";
const profileName = "profile";
const pushNotiName = "pushNotificationScreen";

const Tab = createBottomTabNavigator();

const Home = ({ navigation }) => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;
          if (rn === characterName) {
            iconName = focused ? "view-list" : "view-list-outline";
          } else if (rn === profileName) {
            iconName = focused
              ? "account-arrow-left"
              : "account-arrow-left-outline";
          } else if (rn === pushNotiName) {
            iconName = "view-list";
          }
          return (
            <MaterialCommunityIcons name={iconName} color={color} size={size} />
          );
        },
        tabBarActiveTintColor: "red",
        tabBarInactiveTintColor: "grey",
        tabBarLabelStyle: { paddingBottom: 10, fontSize: 15 },
        tabBarStyle: { padding: 10, height: 70 },
      })}
    >
      <Tab.Screen
        name={characterName}
        options={{
          tabBarLabel: "Characters",
        }}
        component={Characters}
      />
      <Tab.Screen
        name={profileName}
        options={{
          tabBarLabel: "Profile",
        }}
        component={Profile}
      />
      <Tab.Screen
        name={pushNotiName}
        options={{
          tabBarLabel: "Notification",
        }}
        component={PushNotificationScreen}
      />
      {/* <Text>HOME</Text>
      <Button
        title="Go to Jane's profile"
        onPress={() => navigation.navigate("Profile", { name: "Jane" })}
      />
      <Button
        title="Go to Characters Rick and Morty"
        onPress={() =>
          navigation.navigate("Characters", { name: "Rick and Morty" })
        }
      /> */}
    </Tab.Navigator>
  );
};

export default Home;
