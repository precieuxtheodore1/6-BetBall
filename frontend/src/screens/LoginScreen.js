import React from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from "react-native";

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/logo.png")} style={styles.logo} />

      <TextInput placeholder="Email" style={styles.input} />
      <TextInput placeholder="Mot de passe" secureTextEntry style={styles.input} />

      <TouchableOpacity style={styles.button} onPress={() => navigation.replace("Home")}>
        <Text style={styles.buttonText}>Connexion</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Register")}>
        <Text style={styles.link}>Créer un compte ? Inscription</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#fff" },
  logo: { width: 100, height: 100, marginBottom: 30 },
  input: { borderWidth: 1, borderColor: "#ccc", padding: 10, marginBottom: 15, borderRadius: 8, width: "80%" },
  button: { backgroundColor: "#007bff", padding: 12, borderRadius: 8, width: "80%", alignItems: "center" },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
  link: { marginTop: 20, color: "#007bff" }
});
