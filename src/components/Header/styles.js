import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        color: colors.white,
    },
    header: {
        backgroundColor: colors.secondary,
        height: 100,
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 50,
    }
})

export default styles