import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Perfil({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Planes de suscripción</Text>
      <Text style={styles.plan}>Prueba gratuita: 1 comparación en una categoría.</Text>
      <Text style={styles.plan}>Ahorro Básico (9,99 €/año): acceso diario a una categoría.</Text>
      <Text style={styles.plan}>Ahorro Total (49,99 €/año): acceso diario a todas las categorías.</Text>
      <Button title='Volver al inicio' onPress={() => navigation.navigate('Inicio')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 20, marginBottom: 20, fontWeight: 'bold', textAlign: 'center' },
  plan: { textAlign: 'center', marginBottom: 10 },
});
