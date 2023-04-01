import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { styles } from './styles';

export default function App(){
  const [valor, setValor] = useState()
  const [valorDe, setValorDe] = useState()
  const [valorPara, setValorPara] = useState()
  const [valorCambiado, setValorCambiado] = useState()

  function calcular() {
    if (valorDe == 'Real' && valorPara == 'Dólar'){
      setValorCambiado(valor*5.06)
    }
    else if (valorDe == 'Real' && valorPara == 'Euro'){
      setValorCambiado(valor*5.50)
    }
    else if (valorDe == 'Dólar' && valorPara == 'Euro'){
      setValorCambiado(valor*0.92)
    }
    else if (valorDe == 'Euro' && valorPara == 'Dólar'){
      setValorCambiado(valor*1.09)
    }
    else if (valorDe == 'Dólar' && valorPara == 'Real'){
      setValorCambiado(valor*0.2)
    }
    else {
      setValorCambiado(valor)
    }
  }

  let moedas = [
        {id: 0, nome: ''},
        {id: 1, nome: 'Real'},
        {id: 2, nome: 'Dólar'},
        {id: 3, nome: 'Euro'}
  ]

  let moedasItem = moedas.map( (valor, chave) => {
    return <Picker.Item key={chave} value={valor.nome} label={valor.nome}/>
  })

  return(
    <View style={styles.container}>

      <Text style={styles.titulo}>Conversor de Real, Dólar e Euro</Text>

      <View style={styles.row}>
        <Text style={styles.campos}>Valor: </Text>
        <TextInput
          style={styles.input}
          onChangeText={ (valor) => setValor(valor) }
        />
      </View>
      <View style={styles.row}>
        <Text style={styles.campos}>De: </Text>
        <Picker
          selectedValue={valorDe}
          onValueChange={ (itemValue, itemIndex) => setValorDe(itemValue) }
          >
          {moedasItem}
        </Picker>
      </View>
      <View style={styles.row}>
        <Text style={styles.campos}>Para: </Text>
        <Picker
          selectedValue={valorPara}
          onValueChange={ (itemValue, itemIndex) => setValorPara(itemValue) }
          >
          {moedasItem}
        </Picker>
      </View>

      <Button title="Converter" onPress={calcular} />
      <Text style={styles.texto}>Resultado: {valorCambiado}</Text>
    </View>
  )
}