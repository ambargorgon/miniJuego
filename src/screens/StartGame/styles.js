import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    backgroundColor: colors.primary,
  },
  title: {
    color: "black",
    fontSize: 20,
  },
  eliminarButton: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: colors.disabledColor,
  },
  confirmarButton: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: colors.actionColor,
  },
  buttonContainer: {
    gap: 13,
    flexDirection: "row",
  },
  selectedCard: {
    marginTop: 50,
    width: "70%",
  }
});

export default styles;
