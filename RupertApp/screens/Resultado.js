import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Resultado({ navigation, route }) {
  const { data = {}, ofertas = {} } = route.params || {};

  const sumValues = (values) =>
    Object.values(values).reduce((acc, v) => acc + (parseFloat(v) || 0), 0);

  const totalActual = sumValues(data).toFixed(2);
  const totalOferta = sumValues(ofertas).toFixed(2);
  const ahorro = (totalActual - totalOferta).toFixed(2);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Resumen de ahorro</Text>
      <Text>Total actual: {totalActual} €/mes</Text>
      <Text>Total con ofertas: {totalOferta} €/mes</Text>
      <Text>Ahorro estimado: {ahorro} €/mes</Text>
      <Button title='Ir a Perfil' onPress={() => navigation.navigate('Perfil')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 20, marginBottom: 20 },
});
