import React from 'react';
import { View, Text, Button } from 'react-native';

export default function Comparacion({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Comparación de Ofertas</Text>
      <Button title='Ver resultado diario' onPress={() => navigation.navigate('Resultado')} />
    </View>
  );
}