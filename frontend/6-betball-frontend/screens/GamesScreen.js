import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function GamesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tous les jeux vidéo intégrés dans 6-BetBall</Text>
      <Text style={styles.sub}>Les utilisateurs peuvent jouer gratuitement sans mise.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  text: { fontSize: 18, fontWeight: "bold" },
  sub: { marginTop: 10, fontStyle: "italic" },
});
