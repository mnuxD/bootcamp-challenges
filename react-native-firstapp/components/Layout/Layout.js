import { SafeAreaView, Text } from "react-native";
import styles from "./Style";

const Layout = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={[styles.text, { flex: 1 }]}>Layout 1...</Text>
      <Text style={[styles.text, { flex: 2 }]}>Layout 2...</Text>
      <Text style={[styles.text, { flex: 3 }]}>Layout 2...</Text>
    </SafeAreaView>
  );
};

export default Layout;
