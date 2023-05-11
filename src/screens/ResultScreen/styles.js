import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center",
    backgroundColor: colors.primary,
  },
 imageContainer: {
    width: 320,
    marginTop: 10,
 }
});

export default styles;
