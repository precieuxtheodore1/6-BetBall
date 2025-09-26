import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>👤 Mon Profil</Text>

      <Image source={require("../../assets/logo.png")} style={styles.avatar} />
      <Text style={styles.username}>Pseudo: JoueurX</Text>
      <Text>Email: joueur@example.com</Text>
      <Text>Téléphone: +243 000 000 000</Text>
      <Text>Pays: RDC</Text>
      <Text>Statut: Privé</Text>

      <Text style={styles.section}>💰 Portefeuille</Text>
      <Text>Solde: 12,590 CDF</Text>
      <View style={styles.row}>
        <TouchableOpacity style={styles.button}><Text>Dépôt</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button}><Text>Retrait</Text></TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.button}><Text>Financer</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button}><Text>Prêter</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button}><Text>Emprunter</Text></TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff", alignItems: "center" },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 20 },
  avatar: { width: 100, height: 100, borderRadius: 50, marginBottom: 10 },
  username: { fontSize: 16, fontWeight: "bold", marginBottom: 10 },
  section: { marginTop: 20, fontSize: 18, fontWeight: "bold" },
  row: { flexDirection: "row", marginTop: 10 },
  button: { backgroundColor: "#f1f1f1", padding: 10, marginHorizontal: 5, borderRadius: 6 }
});
