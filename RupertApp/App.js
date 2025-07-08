import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Inicio from './screens/Inicio';
import IntroducirDatos from './screens/IntroducirDatos';
import Comparacion from './screens/Comparacion';
import Resultado from './screens/Resultado';
import Perfil from './screens/Perfil';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio">
        <Stack.Screen name="Inicio" component={Inicio} />
        <Stack.Screen name="IntroducirDatos" component={IntroducirDatos} />
        <Stack.Screen name="Comparacion" component={Comparacion} />
        <Stack.Screen name="Resultado" component={Resultado} />
        <Stack.Screen name="Perfil" component={Perfil} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
