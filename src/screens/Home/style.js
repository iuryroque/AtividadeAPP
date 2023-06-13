import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
    },

    activityForm: {
        backgroundColor: "#323B1D",
        padding: 10,
        marginBottom: 20,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    activity: {
        fontSize: 20,
        fontWeight: 'bold',
        color: "#F5E7D9"
    },

    description: {
        fontSize: 18,
        color: "#F5E7D9"
    },

    btnCreate: {
        backgroundColor: '#323B1D',
        width: 60,
        height: 60,
        borderRadius: 50,
        position: 'absolute',
        bottom: 20,
        right: 20,
        justifyContent: 'center',
        alignContent: 'center'
    },

    btnTextCreate: {
        fontSize: 24,
        textAlign: 'center',
        color: '#F5E7D9'
    },

    functionsBtn: {
        flexDirection: "row",
    }
});

export default styles