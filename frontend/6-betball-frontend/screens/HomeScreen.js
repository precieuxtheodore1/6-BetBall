import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tableau de Bord 6-BetBall</Text>
      <Button title="Jeux" onPress={() => navigation.navigate("Games")} />
      <Button title="Défis" onPress={() => navigation.navigate("Defis")} />
      <Button title="Live" onPress={() => navigation.navigate("Live")} />
      <Button title="Compétitions" onPress={() => navigation.navigate("Competitions")} />
      <Button title="Infos" onPress={() => navigation.navigate("Infos")} />
      <Button title="Menu" onPress={() => navigation.navigate("Menu")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: "center" },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 20, textAlign: "center" },
});
