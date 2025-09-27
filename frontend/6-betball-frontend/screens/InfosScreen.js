import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function InfosScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notifications et événements</Text>
      <Text>Exemple : Claris a lancé un défi de football pour 1000 CDF.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
});
