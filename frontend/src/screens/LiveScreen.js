import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function LiveScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>📺 Matchs en direct</Text>
      <TouchableOpacity style={styles.card}>
        <Text>Match FIFA - Entrée 500 CDF</Text>
        <Text style={styles.watch}>Regarder</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 20 },
  card: { backgroundColor: "#f1f1f1", padding: 15, borderRadius: 8, marginBottom: 10 },
  watch: { color: "#007bff", marginTop: 5 }
});
