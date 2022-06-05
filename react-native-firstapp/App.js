import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Layout } from "./components/Layout";
import { Home } from "./components/Home";
import { Profile } from "./components/Profile";
import { Characters } from "./components/Characters";
import { Login } from "./components/Login";

import { useEffect } from "react";
import useAuth from "./hooks/useAuth";

const Stack = createNativeStackNavigator();
const App = () => {
  const { isAuthenticated } = useAuth();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isAuthenticated ? (
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ title: "Login" }}
          />
        ) : (
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ title: "Welcome" }}
          />
        )}

        {/* <Stack.Screen name="Profile" component={Profile} /> */}
        {/* <Stack.Screen
        name="Characters"
        component={Characters}
        options={{ title: "Rick and Morty" }}
      /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
