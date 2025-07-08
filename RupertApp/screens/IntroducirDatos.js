import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet, ScrollView } from 'react-native';

export default function IntroducirDatos({ navigation }) {
  const [car1, setCar1] = useState('');
  const [car2, setCar2] = useState('');
  const [home, setHome] = useState('');
  const [life, setLife] = useState('');
  const [mortgage, setMortgage] = useState('');

  const handleSubmit = () => {
    const data = {
      car1: parseFloat(car1) || 0,
      car2: parseFloat(car2) || 0,
      home: parseFloat(home) || 0,
      life: parseFloat(life) || 0,
      mortgage: parseFloat(mortgage) || 0,
    };
    navigation.navigate('Comparacion', { data });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Introduce tus pagos actuales</Text>
      <TextInput
        placeholder="Seguro de coche 1"
        keyboardType="numeric"
        value={car1}
        onChangeText={setCar1}
        style={styles.input}
      />
      <TextInput
        placeholder="Seguro de coche 2 (opcional)"
        keyboardType="numeric"
        value={car2}
        onChangeText={setCar2}
        style={styles.input}
      />
      <TextInput
        placeholder="Seguro de hogar"
        keyboardType="numeric"
        value={home}
        onChangeText={setHome}
        style={styles.input}
      />
      <TextInput
        placeholder="Seguro de vida"
        keyboardType="numeric"
        value={life}
        onChangeText={setLife}
        style={styles.input}
      />
      <TextInput
        placeholder="Hipoteca"
        keyboardType="numeric"
        value={mortgage}
        onChangeText={setMortgage}
        style={styles.input}
      />
      <Button title="Comparar" onPress={handleSubmit} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, alignItems: 'center', justifyContent: 'center', padding: 20 },
  title: { fontSize: 20, marginBottom: 20 },
  input: {
    width: '80%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginVertical: 5,
  },
});
