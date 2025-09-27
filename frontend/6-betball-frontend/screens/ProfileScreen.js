import React from "react";
import { View, Text, Image, Button, StyleSheet } from "react-native";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenue dans votre profil</Text>
      <Image source={require("../assets/logo.png")} style={styles.avatar} />
      <Text>Nom d'utilisateur : Théophile</Text>
      <Text>Email : user@example.com</Text>
      <Text>Pays : RDC</Text>
      <Text>Statut : Joueur Privé</Text>
      <Button title="Modifier les infos" onPress={() => alert("Modification...")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, alignItems: "center" },
  title: { fontSize: 18, fontWeight: "bold", marginBottom: 15 },
  avatar: { width: 100, height: 100, marginBottom: 15 },
});
