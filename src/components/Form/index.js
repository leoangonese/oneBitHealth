import React, { useState } from "react"
import { TextInput, View, Text, TouchableOpacity } from "react-native"
import ResultIMC from "../ResultImc/Index"
import styles from "./style"

const Form = () => {
    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [messageImc, setMessageImc] = useState('Preencha o peso e altura!')
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState('Calcular')

    const imcCalculator = () => {
        const numericWeight = parseFloat(weight.replace(',', '.'));
        const numericHeight = parseFloat(height.replace(',', '.'));
        return setImc((numericWeight / (numericHeight * numericHeight)).toFixed(2))
    }

    const validationImc = () => {
        if (weight != null && height != null) {
            imcCalculator()
            setHeight(null)
            setWeight(null)
            setMessageImc('Seu imc é igual:* ', imc)
            setTextButton('Calcular Novamente!')
            return
        }
        setImc(null)
        setTextButton('Calcular')
        setMessageImc('Preencha o peso e altura!')
    }

    return (
        <View style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>Altura:* </Text>
                <TextInput style={styles.input} onChangeText={setHeight} value={height} placeholder="EX> 1.75" keyboardType="numeric" />
                <Text style={styles.formLabel}>Peso:* </Text>
                <TextInput style={styles.input} onChangeText={setWeight} value={weight} placeholder="EX> 80" keyboardType="numeric" />
                <TouchableOpacity style={styles.buttonCalculator} onPress={() => validationImc()}>
                    <Text style={styles.textButtonCalculator}>{textButton}</Text>
                </TouchableOpacity>
            </View>
            <ResultIMC messageResultImc={messageImc} resultImc={imc} />
        </View >
    )

}
export default Form