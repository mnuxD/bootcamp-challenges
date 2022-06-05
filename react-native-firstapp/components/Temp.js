import {
  Text,
  View,
  StyleSheet,
  Button,
  Alert,
  TouchableOpacity,
  Image,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
// import { Alert } from "react-native-web";
import { useState } from "react";

const Temp = () => {
  const [image, setImage] = useState("https://picsum.photos/200/300");
  const handleClick = async () => {
    // Alert.alert("Alertaaaa");
    const permissions = await ImagePicker.requestMediaLibraryPermissionsAsync();
    // console.log("permissions", permissions);

    if (!permissions.granted) {
      Alert.alert("Necesita permisos");
    }
    const pickerResult = await ImagePicker.launchImageLibraryAsync();

    console.log("pickerResult", pickerResult);
    setImage(pickerResult.uri);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>React Native App</Text>
      <TouchableOpacity style={styles.button} onPress={handleClick}>
        <Text style={styles.textButton}>Change image</Text>
      </TouchableOpacity>
      <Image style={styles.image} source={{ uri: image }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 30,
  },
  button: {
    width: 150,
    backgroundColor: "cyan",
    padding: 5,
    borderRadius: 10,
    marginTop: 15,
  },
  textButton: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
});

export default Temp;
