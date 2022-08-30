import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function App() {

  const [img, setImg] = useState(require("./src/images/biscoito.png"))
  const[textoFrase, setTextoFrase] = useState("")

  let frases= [
    'Siga os bons e aprenda com eles.', 
    'O bom-senso vale mais do que muito conhecimento.', 
    'O riso é a menor distância entre duas pessoas.', 
    'Deixe de lado as preocupações e seja feliz.',
    'Realize o óbvio, pense no improvável e conquiste o impossível.',
    'Acredite em milagres, mas não dependa deles.',
    'A maior barreira para o sucesso é o medo do fracasso.'
  ]

  function reiniciarBiscoito(){
    setTextoFrase('')
    setImg(require("./src/images/biscoito.png"))
  }

  function quebrabiscoito(){
    let aleatorio = Math.floor(Math.random()* frases.length)
    setTextoFrase('"' + frases[aleatorio]+ '"')
    setImg(require("./src/images/biscoitoAberto.png"))
  }

  return (
    <View style={styles.container}>
      <Image source={img} 
      style={styles.image}
      />
      <Text style={styles.text}>{textoFrase}</Text>
      
      <TouchableOpacity style={styles.button} onPress={quebrabiscoito}>
        <View style={styles.btnArea}>
          <Text style={styles.btnText}>Quebrar Biscoito</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, {marginTop: 15, borderColor: "#121212"}]} onPress={reiniciarBiscoito}>
        <View style={styles.btnArea}>
          <Text style={[styles.btnText, {color: "#121212"}]}>Reiniciar Biscoito</Text>
        </View>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image:{
    width: 230,
    height: 230,
  },
  text:{
    fontSize:20,
    color: "#dd7b22",
    margin: 30,
    fontStyle: "italic",
    textAlign: "center",
  },
  button:{
    width: 230,
    height: 50,
    borderColor: "#dd7b22",
    borderWidth: 2,
    borderRadius: 25
  },
  btnArea:{
    flex: 1,
    justifyContent: "center",
    alignItems:"center"
  },
  btnText:{
    fontSize: 17,
    fontWeight: "bold",
    color: "#dd7b22"
  },
});
