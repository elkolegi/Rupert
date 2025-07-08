import React from 'react';
import { View, Text, Button } from 'react-native';

export default function Resultado({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Resultado Diario</Text>
      <Button title='Ir a Perfil' onPress={() => navigation.navigate('Perfil')} />
    </View>
  );
}