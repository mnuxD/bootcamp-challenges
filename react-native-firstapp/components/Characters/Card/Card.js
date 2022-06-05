import { Image, View, Text } from "react-native";
import { styles } from "./Style";
const { card, imageItem, textItem } = styles;

const Card = ({ name, image }) => {
  return (
    <View style={card}>
      <Image style={imageItem} source={{ uri: image }} />
      <Text style={textItem}>{name}</Text>
    </View>
  );
};

export default Card;
