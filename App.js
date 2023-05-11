import { StyleSheet, View , Text} from "react-native";
import Header from "./src/components/Header";
import StartGame from "./src/screens/StartGame";
import GameScreen from "./src/screens/GameScreen";
import ResultScreen from "./src/screens/ResultScreen";
import { useState } from "react";
import { useFonts } from "expo-font";
import colors from "./src/constants/colors";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [winOrLose, setWindOrLose] = useState(false);
  const [result, setResult] = useState("");
  
  const [loaded] = useFonts({
    StaatlichesRegular: require("./src/assets/fonts/Staatliches-Regular.ttf"),
  });
  if (!loaded) return
  


  const handleStartGame = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };

  const handleGameResult = (selection, number) => {
    if (
      (selection === "lower" && userNumber < number) ||
      (selection === "higher" && userNumber > number)
    ) {
      setResult("Ganaste");
    } else {
      setResult("Perdiste");
    }

    setWindOrLose(true);
  };

  let content = <StartGame onStartGame={handleStartGame} />;

  if (userNumber && winOrLose === true) {
    content = <ResultScreen result={result}/>
  }else if(userNumber){
    content = <GameScreen handleResult={handleGameResult}/>;
  }

  return (
    <View style={styles.container}>
      <Header title={"Adivina el Numero"} newStyles={styles.headerTitle} />
      {content}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerTitle: {
    color: colors.terciary,
    fontFamily: "StaatlichesRegular",
  },
});
