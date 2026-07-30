import { Image, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.screen}>
      <Image
        source={require("../assets/images/mascots/chrysalis-cocoon.png")}
        style={styles.logo}
      />
      <Text style={styles.hello}>Hello! 👋</Text>
      <Text style={styles.title}>Welcome to Chrysalis</Text>
      <Text style={styles.subtitle}>Let&apos;s build your first app.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  hello: {
    fontSize: 28,
    marginBottom: 12,
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 18,
    marginTop: 12,
    textAlign: "center",
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 24,
  },
});
