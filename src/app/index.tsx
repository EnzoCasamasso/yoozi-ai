import { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'tamagui';

export default function Index() {
  const [name, setName] = useState<string>('Enzo Casamasso')

  useEffect(() => {
    console.log("APP INICIOU")
  })

  function handleName(): void {
    if (name === 'Enzo Casamasso') {
      setName('Bobão apertou!');
    } else {
      setName('Enzo Casamasso');
    }
  }

  return (
    <View style={style.container}>
      <Text style={style.text}>{name}</Text>
      <Button onPress={handleName}>Butão</Button>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
    gap: 15
  },
  text: {
    color: '#fff',
  }
})
