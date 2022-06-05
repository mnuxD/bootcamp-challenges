import {
  View,
  Text,
  Image,
  TextInput,
  Button,
  Alert,
  ScrollView,
} from "react-native";
import { useState } from "react";
import { Input } from "../Input";
import { ProfileImage } from "./ProfileImage";

import { styles } from "./Style";

const { profileForm, profileScreen, profileTitle, profileTitleText } = styles;

const Profile = () => {
  const [form, setForm] = useState({
    email: "",
    name: "",
    lastname: "",
  });

  const handleChangeInput = (tag, value) => {
    setForm((state) => ({ ...state, [tag]: value }));
  };

  const saveProfile = () => {
    console.log("FORM", form);
    const { email, name, lastname } = form;
    Alert.alert(`Su perfil es: ${name} ${lastname} ${email}`);
  };
  return (
    <ScrollView style={profileScreen}>
      <ProfileImage sourceImg="https://picsum.photos/200/200" />
      <View style={profileTitle}>
        <Text style={profileTitleText}>YOUR PROFILE</Text>
      </View>
      <View style={profileForm}>
        <Input
          name="email"
          label="Email: "
          value={form.email}
          handleChange={handleChangeInput}
        />
        <Input
          name="name"
          label="Name: "
          value={form.name}
          handleChange={handleChangeInput}
        />
        <Input
          name="lastname"
          label="Lastname: "
          value={form.lastname}
          handleChange={handleChangeInput}
        />
        <Button title="save" onPress={saveProfile} />
      </View>
    </ScrollView>
  );
};

export default Profile;
