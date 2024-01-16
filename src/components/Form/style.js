import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    formContext: {
        marginTop: 30,
        width: '100%',
        height: '100%',
        backgroundColor: '#ffffff',
        alignItems: 'center',
        paddingTop: 30,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30
    },
    form: {
        width: '100%',
        height: 'auto',
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
    },
    errorMessage: {
        fontSize: 12,
        color: 'red',
        fontWeight: 'bold',
        paddingLeft: 20
    },
    exibitonResult: {
        width: '100%',
        height: '50%'
    },
    resultImcItem: {
        fontSize: 24,
        height: 50,
        width: '100%',
        paddingRight: 20
    },
    textResultItemList: {
        fontSize: 28,
        color: 'red'
    }

})
export default styles