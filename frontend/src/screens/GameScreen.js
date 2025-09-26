import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function GamesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎮 Jeux disponibles</Text>
      <TouchableOpacity style={styles.card}>
        <Text>FIFA (Gratuit)</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.card}>
        <Text>Call of Duty (Gratuit)</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.card}>
        <Text>Mortal Kombat (Gratuit)</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 20 },
  card: { backgroundColor: "#f1f1f1", padding: 15, borderRadius: 8, marginBottom: 10 }
});
