import React from "react"
import { View, Text } from "react-native"
import styles from "./style"

const ResultIMC = (props) => {
    return (
        <View>
            <Text>{props.messageResultImc}</Text>
            <Text style={styles.numberImc}>{props.resultImc}</Text>
        </View>

    )
}
export default ResultIMC