import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function LiveScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Matchs en direct</Text>
      <Text>Regardez les matchs avec un montant demandé par les joueurs.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
});
