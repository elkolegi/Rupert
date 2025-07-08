import React from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';

export default function Inicio({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <Text style={styles.title}>Controla. Compara. Ahorra.</Text>
      <Button
        title='Empezar'
        onPress={() => navigation.navigate('IntroducirDatos')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20 },
  title: { fontSize: 22, marginVertical: 20, textAlign: 'center' },
  logo: { width: 100, height: 100, marginBottom: 20 },
});