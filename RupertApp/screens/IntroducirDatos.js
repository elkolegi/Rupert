import React from 'react';
import { View, Text, Button } from 'react-native';

export default function IntroducirDatos({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Introducir Datos</Text>
      <Button title='Comparar' onPress={() => navigation.navigate('Comparacion')} />
    </View>
  );
}