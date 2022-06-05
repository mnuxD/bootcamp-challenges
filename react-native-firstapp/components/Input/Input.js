import { Text, TextInput, View } from "react-native";

import { styles } from "./Style";
const { input, inputContainer } = styles;

const Input = ({ name, label, value, handleChange }) => {
  const handleChangeText = (value) => {
    // console.log("handlechangetext", value);
    handleChange(name, value);
  };
  return (
    <View style={inputContainer}>
      <Text>{label}</Text>
      <TextInput style={input} value={value} onChangeText={handleChangeText} />
    </View>
  );
};

export default Input;
