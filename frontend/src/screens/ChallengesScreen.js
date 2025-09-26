import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function ChallengesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>⚔️ Défis disponibles</Text>
      <TouchableOpacity style={styles.card}>
        <Text>Défi FIFA - Mise 1000 CDF</Text>
        <Text style={styles.accept}>Accepter</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.card}>
        <Text>Défi COD - Mise 2000 CDF</Text>
        <Text style={styles.accept}>Accepter</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 20 },
  card: { backgroundColor: "#f8f9fa", padding: 15, borderRadius: 8, marginBottom: 10 },
  accept: { color: "#28a745", marginTop: 5 }
});
