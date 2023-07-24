import React from "react";

import { StyleSheet, Text, TextInput, View } from "react-native";

import { Picker } from "@react-native-picker/picker";
import PrimaryBtn from "./PrimaryBtn";
import SecondaryBtn from "./SecondaryBtn";

export default function FormContract() {
  const inputs = [
    { label: "Nome do paciente", isTextInput: true },
    { label: "Dia", isTextInput: false },
    { label: "Hora", isTextInput: false },
  ];

  const [selectedValues, setSelectedValues] = React.useState([1, null, null]);
  const handlePickerChange = (index, value) => {
    const newSelectedValues = [...selectedValues];
    newSelectedValues[index] = value;
    setSelectedValues(newSelectedValues);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textPattern}>
        Selecione o dia e horário para o plantão
      </Text>

      {/* FORM AREA */}
      <View style={styles.formArea}>
        {inputs.map((input, index) => {
          return (
            <View
              key={index}
              style={[
                styles.inputWrapper,
                index === 0 ? styles.firstInputWrapper : null,
                index === inputs.length - 1 ? styles.lastInputWrapper : null,
              ]}
            >
              {input.isTextInput ? (
                <TextInput style={styles.inputText} placeholder={input.label} />
              ) : (
                <Picker
                  style={styles.inputPicker}
                  selectedValue={selectedValues[index]}
                  onValueChange={(itemValue) =>
                    handlePickerChange(index, itemValue)
                  }
                >
                  {/* OPTIONS */}
                  <Picker.Item label={input.label} />
                  <Picker.Item label="1" value="1" />
                  <Picker.Item label="2" value="2" />
                  <Picker.Item label="3" value="3" />
                </Picker>
              )}
            </View>
          );
        })}
        <PrimaryBtn text="Continuar" />
        <SecondaryBtn text="Voltar" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 80,
  },

  // INPUTS STYLES
  textPattern: {
    fontSize: 18,
    color: "#373737",
    marginBottom: 20,
  },
  inputWrapper: {
    borderColor: "#ccc",
    borderWidth: 1,
  },
  inputWrapperPicker: {
    borderColor: "#ccc",
    borderWidth: 1,
  },
  firstInputWrapper: {
    borderTopStartRadius: 5,
    borderTopEndRadius: 5,
    borderBottomStartRadius: 0,
    borderBottomEndRadius: 0,
  },
  lastInputWrapper: {
    borderTopStartRadius: 0,
    borderTopEndRadius: 0,
    borderBottomStartRadius: 5,
    borderBottomEndRadius: 5,
  },
  inputText: {
    padding: 13,
  },
  inputPicker: {
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
  },
});
