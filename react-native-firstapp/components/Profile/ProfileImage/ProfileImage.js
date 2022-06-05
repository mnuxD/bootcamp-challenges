import { Image, View } from "react-native";
import { styles } from "./Style";
const { profileImage, profileImageContainer } = styles;
const ProfileImage = ({ sourceImg }) => {
  return (
    <View style={profileImageContainer}>
      <Image style={profileImage} source={{ uri: sourceImg }} />
    </View>
  );
};

export default ProfileImage;
