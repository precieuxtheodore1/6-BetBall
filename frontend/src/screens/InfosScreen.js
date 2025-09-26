import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function InfosScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🔔 Notifications</Text>
      <Text>- Claris a lancé un défi FIFA de 1000 CDF</Text>
      <Text>- 12 équipes participent au championnat d'Europe</Text>
      <Text>- Votre solde est passé à 12,590 CDF</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 20 }
});
