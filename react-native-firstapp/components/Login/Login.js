import { View, Text, Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { useState } from "react";
import { Input } from "../Input";

import useAuth from "../../hooks/useAuth";

import { loginAsync } from "../api/user";

const Login = ({ navigation }) => {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const { storeData } = useAuth();

  const handleChangeInput = (tag, value) => {
    setForm((state) => ({ ...state, [tag]: value }));
  };

  const login = async () => {
    const isAuthenticated = await loginAsync(form);
    console.log("isAuthenticated", isAuthenticated);

    // Persist
    storeData(isAuthenticated);

    console.log("navigation", navigation);

    // isAuthenticated && navigation.navigate("Home");
  };

  return (
    <View>
      <Text>LOGIN</Text>
      <Input
        name="username"
        label="USERNAME:"
        value={form.username}
        handleChange={handleChangeInput}
      />
      <Input
        name="password"
        label="PASSWORD:"
        value={form.password}
        handleChange={handleChangeInput}
      />
      <Button title="Login" onPress={login} />
    </View>
  );
};

export default Login;
