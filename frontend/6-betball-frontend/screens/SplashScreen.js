import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("Login");
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.ribbon}>BIENVENUE SUR 6-BETBALL</Text>
      <Image source={require("../assets/logo.png")} style={styles.logo} />
      <Text style={styles.message}>
        "Servez-vous de ce que vous avez, afin d'obtenir ce que vous voulez"
      </Text>
      <Button title="Connexion" onPress={() => navigation.navigate("Login")} />
      <Button title="Inscription" onPress={() => navigation.navigate("Register")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  ribbon: { fontSize: 18, fontWeight: "bold", marginBottom: 20 },
  logo: { width: 120, height: 120, marginBottom: 20 },
  message: { fontStyle: "italic", marginVertical: 20, textAlign: "center" },
});
