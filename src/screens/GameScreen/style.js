import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop: 30,
    alignItems: "center",
    backgroundColor: colors.primary,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    width: "80%",
  },
  textColor: {
    color: colors.white,
    fontSize: 20,
  },
  number:{
    color: colors.white,
    fontSize: 50,
    fontWeight: 'bold'
  }, 
  button: {
    borderRadius: 5,
    padding: 8,
    backgroundColor: colors.terciary,
    shadowColor: colors.black,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 14,
    shadowOpacity: 1,
    elevation: 5,
  }
});

export default styles;
