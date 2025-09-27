import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from "react-native";

export default function RegisterScreen({ navigation }) {
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    accountType: "Personnel",
    country: "",
    province: "",
    password: "",
    confirmPassword: "",
    paymentMethod: "",
  });

  const handleChange = (key, value) => {
    setForm({ ...form, [key]: value });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Remplir les informations</Text>

      <TextInput placeholder="Nom complet" style={styles.input} onChangeText={(v) => handleChange("fullName", v)} />
      <TextInput placeholder="Numéro de téléphone" style={styles.input} onChangeText={(v) => handleChange("phone", v)} />
      <TextInput placeholder="Email" style={styles.input} onChangeText={(v) => handleChange("email", v)} />
      <TextInput placeholder="Type de compte (ex: Personnel)" style={styles.input} onChangeText={(v) => handleChange("accountType", v)} />
      <TextInput placeholder="Pays" style={styles.input} onChangeText={(v) => handleChange("country", v)} />
      <TextInput placeholder="Province" style={styles.input} onChangeText={(v) => handleChange("province", v)} />
      <TextInput placeholder="Mot de passe" style={styles.input} secureTextEntry onChangeText={(v) => handleChange("password", v)} />
      <TextInput placeholder="Confirmer le mot de passe" style={styles.input} secureTextEntry onChangeText={(v) => handleChange("confirmPassword", v)} />
      <TextInput placeholder="Mode de paiement (Mobile Money, Crypto...)" style={styles.input} onChangeText={(v) => handleChange("paymentMethod", v)} />

      <Button title="Confirmer l'inscription" onPress={() => navigation.replace("Home")} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 18, fontWeight: "bold", marginBottom: 15 },
  input: { borderWidth: 1, padding: 10, marginBottom: 10, borderRadius: 5 },
});
