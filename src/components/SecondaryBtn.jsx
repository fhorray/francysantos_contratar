import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function SecondaryBtn({ text }) {
  return (
    <TouchableOpacity style={styles.secondaryBtn}>
      <Text style={styles.secondaryTextButton}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  // BUTTONS STYLES
  secondaryBtn: {
    padding: 15,
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  secondaryTextButton: {
    color: "#07689F",
    fontSize: 18,
    fontWeight: "bold",
  },
});
