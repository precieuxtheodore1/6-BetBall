import React, { useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      // On peut rediriger automatiquement après 3s
      // navigation.replace("Login");
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.ribbon}>BIENVENUE SUR 6-BETBALL</Text>
      <Image source={require("../../assets/logo.png")} style={styles.logo} />
      
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.buttonText}>Connexion</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: "#28a745" }]}
        onPress={() => navigation.navigate("Register")}
      >
        <Text style={styles.buttonText}>Inscription</Text>
      </TouchableOpacity>

      <Text style={styles.footer}>
        Servez-vous de ce que vous avez, afin d'obtenir ce que vous voulez
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#f4f4f4" },
  ribbon: { fontSize: 20, fontWeight: "bold", color: "#007bff", marginBottom: 20 },
  logo: { width: 120, height: 120, marginBottom: 30 },
  button: { backgroundColor: "#007bff", padding: 12, marginVertical: 10, borderRadius: 8, width: 200, alignItems: "center" },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
  footer: { marginTop: 40, fontStyle: "italic", textAlign: "center", paddingHorizontal: 20 }
});
