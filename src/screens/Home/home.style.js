import { StyleSheet } from "react-native";
import colors from "../../constant/colors";
const styles = StyleSheet.create({
    flatStyle: {
        flexDirection: "row",
        alignItems: 'center',
        backgroundColor: colors.white,
        padding: 8,
        borderRadius: 8,
        justifyContent: 'space-between',
        flex:1
    },
    container: {
        flex: 1,
    },
    cart: {
        flexDirection: "row",
        width: 88,
        height: 32,
        backgroundColor: colors.teal,
        justifyContent: "center",
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 6,
        borderRadius: 4,
        marginLeft: 16


    },
    txtStyle: {
        color: colors.white,
        fontWeight: 'bold'
    },
    addBtnStyle: {
        marginLeft: 16,
        backgroundColor: colors.black,
        height: 40,
        width: 40,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: "center"
    }
});
export default styles