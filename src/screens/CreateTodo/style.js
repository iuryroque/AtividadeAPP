import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
        alignItems: "center",
        justifyContent: "center"
    },

    alert: {
        fontSize: 18,
        textAlign: "center",
        color: "#F5E7D9",
        marginBottom: 20
    },

    formInput: {
        fontSize: 18,
        borderRadius: 10,
        backgroundColor: "#DDD",
        padding: 20,
        marginBottom: 20,
        width: "100%"
    },

    formBtn: {
        backgroundColor: "#323B1D",
        padding: 10,
        borderRadius: 10,
        marginBottom: 20,
        width: "100%"
    },

    textBtn: {
        color: "#DDD",
        fontSize: 24,
        textAlign: "center"
    },
});

export default styles