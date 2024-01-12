import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    formContext: {
        width: '100%',
        height: '100%',
        bottom: 0,
        backgroundColor: '#fff',
        alignItems: 'center',
        marginTop: 30,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30
    },
    form: {
        width: '100%',
        height: 'auto',
        marginTop: 30,
        padding: 10,
    },
    formLabel: {
        color: '#000',
        fontSize: 18,
        paddingLeft: 20,
        fontWeight: "600"
    },
    input: {
        width: '90%',
        borderColor: '#FF0043',
        borderWidth: 1.5,
        borderRadius: 50,
        backgroundColor: '#f6f6f6',
        height: 40,
        margin: 12,
        paddingLeft: 10
    },
    buttonCalculator: {
        borderRadius: 50,
        alignItems: "center",
        width: '90%',
        backgroundColor: "#ff0430",
        paddingBottom: 14,
        paddingTop: 14,
        marginLeft: 12,
        margin: 30
    },
    textButtonCalculator: {
        fontSize: 20,
        color: '#ffffff'
    }

})
export default styles