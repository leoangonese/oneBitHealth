import React, { useState } from "react"
import { TextInput, View, Text, TouchableOpacity, Vibration, Pressable, Keyboard, FlatList } from "react-native"
import ResultIMC from "../ResultImc/Index"
import styles from "./style"

const Form = () => {
    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [messageImc, setMessageImc] = useState('Preencha o peso e altura!')
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState('Calcular')
    const [errorMessage, setErrorMessage] = useState('')
    const [imcList, setImcList] = useState([])

    const imcCalculator = () => {
        const numericWeight = weight.replace(',', '.');
        const numericHeight = height.replace(',', '.');
        let totalImc = (numericWeight / (numericHeight * numericHeight)).toFixed(2)
        setImcList((arr) => [...arr, { id: new Date().getTime(), imc: totalImc }])
        setImc(totalImc)
    }

    const verificationImc = () => {
        if (imc === null) {
            Vibration.vibrate();
            setErrorMessage('Campo obrigatório!')
        }
    }

    const validationImc = () => {
        if (weight != null && height != null) {
            imcCalculator()
            setHeight(null)
            setWeight(null)
            setMessageImc('Seu imc é igual:* ', imc)
            setTextButton('Calcular Novamente!')
            setErrorMessage(null)
        }
        else {
            verificationImc()
            setImc(null)
            setTextButton('Calcular')
            setMessageImc('Preencha o peso e altura!')
        }
    }

    return (
        <View style={styles.formContext}>
            {imc === null ?
                <Pressable onPress={Keyboard.dismiss} style={styles.form}>
                    <Text style={styles.formLabel}>Altura:* </Text>
                    <Text style={styles.errorMessage}>{errorMessage}</Text>
                    <TextInput style={styles.input} onChangeText={setHeight} value={height} placeholder="EX> 1.75" keyboardType="numeric" />
                    <Text style={styles.formLabel}>Peso:* </Text>
                    <Text style={styles.errorMessage}>{errorMessage}</Text>
                    <TextInput style={styles.input} onChangeText={setWeight} value={weight} placeholder="EX> 80" keyboardType="numeric" />
                    <TouchableOpacity style={styles.buttonCalculator} onPress={() => validationImc()}>
                        <Text style={styles.textButtonCalculator}>{textButton}</Text>
                    </TouchableOpacity>
                </Pressable >
                :
                <View style={styles.exibitonResult}>
                    <ResultIMC messageResultImc={messageImc} resultImc={imc} />
                    <TouchableOpacity style={styles.buttonCalculator} onPress={() => validationImc()}>
                        <Text style={styles.textButtonCalculator}>{textButton}</Text>
                    </TouchableOpacity>
                </View>
            }
            <FlatList data={imcList.reverse()}
                showsVerticalScrollIndicator={true}
                renderItem={({ item }) => {
                    return (
                        <Text style={styles.resultImcItem}>
                            Resultado IMC:
                            <Text style={styles.textResultItemList}>{' ' + item.imc}</Text>
                        </Text>
                    )
                }}
                keyExtractor={(item) => { item.id }}
            />
        </View>
    )

}
export default Form