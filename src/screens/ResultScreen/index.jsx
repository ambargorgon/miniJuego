import { View, Text, SafeAreaView, Image } from "react-native";
import React, { useState, useEffect } from "react";
import Card from "../../components/Card";
import styles from "./styles";

import win from "../../assets/images/win.png"
import lose from "../../assets/images/lose.png";

const ResultScreen = ({result}) => {
  const [image, setImage] = useState("");

  useEffect(() => {
    handleImage();
  }, []);

  const handleImage = () => {
    if (result === "win") {
      setImage(win);
      return;
    }
    setImage(lose);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Card>
          <Text>{`Tu ${result}`} </Text>
        </Card>
        <Image style={styles.imageContainer} source={image} />
      </View>
    </SafeAreaView>
  );
};

export default ResultScreen;
