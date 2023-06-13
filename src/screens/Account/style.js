import { StyleSheet } from "react-native";

const styles = StyleSheet.create(
    {
        login: {
            backgroundColor: "#F5E7D9",
            flex: 1,
            padding: 30,
            alignItems: "center",
            justifyContent: "center"
        },

        logo: {
            width: 500,
            height: 300,
            marginBottom: 30
        },

        alert: {
            fontSize: 18,
            color: "#FFF",
            textAlign: "center",
            marginBottom: 20
        },

        formInput: {
            fontSize: 18,
            borderRadius: 10,
            backgroundColor: "#FFF",
            padding: 20,
            marginBottom: 20,
            width: "100%"
        },

        logoutButton: {
            backgroundColor: "#323B1D",
            padding: 10,
            borderRadius: 10,
            marginBottom: 20,
            width: "80%",
            alignSelf:'center'
        },

        textButton: {
            color: "#FFF",
            fontSize: 24,
            textAlign: "center"
        },

        btnCreate: {
            marginBottom: 10,
        },

        btnCreateText: {
            color: "#FFF"
        },

        formButton: {
            backgroundColor: "#323B1D",
            padding: 10,
            borderRadius: 10,
            marginBottom: 20,
            marginTop: 15,
            width: "100%"
        },

        textButton: {
            fontSize: 24,
            textAlign: "center",
            color: "#F5E7D9"
        }
    }
);

export default styles