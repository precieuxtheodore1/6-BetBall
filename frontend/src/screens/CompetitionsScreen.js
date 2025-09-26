import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function CompetitionsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🏆 Compétitions</Text>
      <TouchableOpacity style={styles.card}>
        <Text>Tournoi FIFA - Frais 5000 CDF</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.card}>
        <Text>Tournoi COD - Frais 3000 CDF</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 20 },
  card: { backgroundColor: "#f8f9fa", padding: 15, borderRadius: 8, marginBottom: 10 }
});
