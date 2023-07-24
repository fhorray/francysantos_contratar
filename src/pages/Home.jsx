import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FormContract from "../components/FormContract";

export default function Contract() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      {/* HEADER */}
      <SafeAreaView style={styles.header}>
        <MaterialIcons name="arrow-back" size={35} style={{ color: "#fff" }} />
        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerTitle}>Contratar</Text>
        </View>
      </SafeAreaView>

      {/* FORM AREA */}
      <FormContract />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  header: {
    width: "100%",
    height: 100,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#006557",
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    paddingTop: 40,
  },
  headerTitleContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  headerTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginEnd: 30,
  },
});
