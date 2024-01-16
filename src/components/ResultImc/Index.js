import React from "react"
import { View, Text, TouchableOpacity, Share } from "react-native"
import styles from "./style"

const ResultIMC = (props) => {
    const onShare = () => {
        Share.share({ message: `Meu imc hoje é: ${props.resultImc}`, })
    }

    return (
        <View>
            <Text style={{ textAlign: 'center', }}>{props.messageResultImc}</Text>
            <Text style={styles.numberImc}>{props.resultImc}</Text>
            <View style={styles.boxShare}>
                <TouchableOpacity style={styles.shareButton} onPress={() => onShare()}>
                    <Text style={styles.shareText}>Compartilhar</Text>
                </TouchableOpacity>
            </View>
        </View>

    )
}
export default ResultIMC