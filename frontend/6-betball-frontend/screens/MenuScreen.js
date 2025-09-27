import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function MenuScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menu Utilisateur</Text>
      <Button title="Profil" onPress={() => navigation.navigate("Profile")} />
      <Button title="Lancer un défi" onPress={() => alert("Créer un défi...")} />
      <Button title="Devenir joueur officiel" onPress={() => alert("Formulaire JOs")} />
      <Button title="Changer de langue" onPress={() => alert("Langue changée")} />
      <Button title="Déconnexion" onPress={() => navigation.replace("Login")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 18, fontWeight: "bold", marginBottom: 15 },
});
