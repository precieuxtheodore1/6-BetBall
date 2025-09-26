import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tableau de Bord</Text>

      <View style={styles.row}>
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("Games")}>
          <Text>🎮 Jeux</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("Challenges")}>
          <Text>⚔️ Défis</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("Live")}>
          <Text>📺 Live</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("Competitions")}>
          <Text>🏆 Compétition</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("Infos")}>
          <Text>🔔 Infos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("Menu")}>
          <Text>📂 Menu</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#f8f9fa" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 30 },
  row: { flexDirection: "row" },
  card: { backgroundColor: "#e9ecef", margin: 10, padding: 20, borderRadius: 8, alignItems: "center" }
});
