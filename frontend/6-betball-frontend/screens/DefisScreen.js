import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function DefisScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Défis disponibles</Text>
      <Text>Exemple : Défi FIFA pour 1000 CDF</Text>
      <Button title="Accepter et jouer" onPress={() => alert("Défi accepté !")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
});
