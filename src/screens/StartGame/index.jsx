import {
  View,
  Text,
  Button,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import Card from "../../components/Card";
import Input from "../../components/Input";
import styles from "./styles";
import colors from "../../constants/colors";

const StartGame = ({onStartGame}) => {
  const [value, setValue] = useState("");
  const [confirm, setConfirm] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState("");

  const handleInput = (text) => {
    setValue(text.replace(/[^0-9]/g, ""));
  };

  const clearInput = () => {
    setValue("");
    setConfirm(false);
  };

  const handleConfirmation = () => {
    const newValue = parseInt(value);
    if (isNaN(newValue) || newValue <= 0 || newValue > 99) return;
  
    setConfirm(true);
    setSelectedNumber(newValue);
    setValue("");
  }

  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <Card>
            <Text style={styles.title}>Piensa un numero</Text>
            <Input
              keyboardType="numeric"
              placeholder="Escribelo aqui"
              maxLength={2}
              newProperty="new"
              value={value}
              onChangeText={handleInput}
            />
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.eliminarButton}
                onPress={clearInput}
              >
                <Text style={{ color: colors.white }}>Eliminar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.confirmarButton}
                onPress={handleConfirmation}
              >
                <Text style={{ color: colors.white }}>Confirmar</Text>
              </TouchableOpacity>
            </View>
          </Card>
          {confirm && (
            <Card otherStyles={styles.selectedCard}>
              <Text style={colors.white}>Tu numero es: </Text>
              <Text style={{fontSize: 50}}>{selectedNumber}</Text>
              <View>
                <Button title='Empezar' color={colors.black} onPress={() => onStartGame(selectedNumber)}/>
              </View>
            </Card>
          )}
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default StartGame;
