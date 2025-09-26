import React from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from "react-native";

export default function RegisterScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Remplir les informations</Text>

      <TextInput placeholder="Nom complet" style={styles.input} />
      <TextInput placeholder="Téléphone" style={styles.input} keyboardType="phone-pad" />
      <TextInput placeholder="Email" style={styles.input} keyboardType="email-address" />
      <TextInput placeholder="Type de compte (ex: Personnel)" style={styles.input} />
      <TextInput placeholder="Pays/Province" style={styles.input} />
      <TextInput placeholder="Mot de passe" secureTextEntry style={styles.input} />
      <TextInput placeholder="Confirmer mot de passe" secureTextEntry style={styles.input} />
      <TextInput placeholder="Mode de paiement (Mobile Money, Crypto...)" style={styles.input} />

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Home")}>
        <Text style={styles.buttonText}>Valider inscription</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#fff", padding: 20 },
  title: { fontSize: 18, fontWeight: "bold", marginBottom: 20 },
  input: { borderWidth: 1, borderColor: "#ccc", padding: 10, marginBottom: 15, borderRadius: 8, width: "100%" },
  button: { backgroundColor: "#28a745", padding: 12, borderRadius: 8, width: "100%", alignItems: "center" },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "bold" }
});
