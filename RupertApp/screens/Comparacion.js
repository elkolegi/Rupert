import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Comparacion({ navigation, route }) {
  const { data } = route.params || {};

  const ofertas = {
    car1: data?.car1 ? (data.car1 * 0.9).toFixed(2) : null,
    car2: data?.car2 ? (data.car2 * 0.9).toFixed(2) : null,
    home: data?.home ? (data.home * 0.9).toFixed(2) : null,
    life: data?.life ? (data.life * 0.9).toFixed(2) : null,
    mortgage: data?.mortgage ? (data.mortgage * 0.9).toFixed(2) : null,
  };

  const handleResult = () => {
    navigation.navigate('Resultado', { data, ofertas });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mejores ofertas</Text>
      {ofertas.car1 && <Text>Seguro coche 1: {ofertas.car1} €/mes</Text>}
      {ofertas.car2 && <Text>Seguro coche 2: {ofertas.car2} €/mes</Text>}
      {ofertas.home && <Text>Seguro hogar: {ofertas.home} €/mes</Text>}
      {ofertas.life && <Text>Seguro vida: {ofertas.life} €/mes</Text>}
      {ofertas.mortgage && <Text>Hipoteca: {ofertas.mortgage} €/mes</Text>}
      <Button title='Ver resultado diario' onPress={handleResult} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 20, marginBottom: 20 },
});
