import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function PrimaryBtn({ text }) {
  return (
    <TouchableOpacity style={styles.primaryBtn}>
      <Text style={styles.primaryTextButton}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  // BUTTONS STYLES
  primaryBtn: {
    backgroundColor: "#07689F",
    padding: 15,
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
    borderRadius: 5,
  },
  primaryTextButton: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
