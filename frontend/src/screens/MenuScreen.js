import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";

export default function MenuScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>📂 Menu</Text>

      <TouchableOpacity style={styles.item} onPress={() => navigation.navigate("Challenges")}>
        <Text>Lancer un défi</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <Text>Devenir Joueur Officiel</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <Text>État de la compétition</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <Text>Missions à accomplir</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <Text>Discussion instantanée</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item} onPress={() => navigation.navigate("Profile")}>
        <Text>Profil</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, backgroundColor: "#fff", padding: 20 },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 20 },
  item: { backgroundColor: "#f1f1f1", padding: 15, borderRadius: 8, marginBottom: 10 }
});
