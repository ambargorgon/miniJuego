import { View, Text, TouchableOpacity, } from "react-native";
import React, { useEffect, useState } from "react";
import Card from "../../components/Card";
import styles from "./style";
import colors from "../../constants/colors";

const GameScreen = ({handleResult}) => {
  const [currentGuess, setCurrentGuess] = useState();

  useEffect(() => {
    setCurrentGuess(Math.floor(Math.random() * (99 - 1) + 1));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.textColor}>La suposicion del oponente es: </Text>
      <Text style={styles.number}>{currentGuess}</Text>
      <Card otherStyles={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleResult('lower', currentGuess)}
        >
          <Text style={{ color: colors.white }}>Mas Bajo</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleResult('higher', currentGuess)}
        >
          <Text style={{ color: colors.white }}>Mas Alto</Text>
        </TouchableOpacity>
      </Card>
    </View>
  );
};

export default GameScreen;
