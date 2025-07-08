import React from 'react';
import { View, Text, Button } from 'react-native';

export default function Perfil({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Perfil / Suscripción</Text>
      <Button title='Volver al inicio' onPress={() => navigation.navigate('Inicio')} />
    </View>
  );
}