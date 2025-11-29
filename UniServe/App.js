import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';

// Screens
import LoginScreen from './Screens/LoginScreen';
import RegistroScreen from './Screens/RegistroScreen';
import InicioScreen from './Screens/InicioScreen';
import PreguntasScreen from './Screens/PreguntasScreen';
import ProgresoScreen from './Screens/ProgresoScreen';
import NotificacionesScreen from './Screens/NotificacionesScreen';
import ConfiguracionScreen from './Screens/ConfiguracionScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Bottom Tabs
function HomeTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Inicio" component={InicioScreen} />
      <Tab.Screen name="Preguntas" component={PreguntasScreen} />
      <Tab.Screen name="Progreso" component={ProgresoScreen} />
      <Tab.Screen name="Notificaciones" component={NotificacionesScreen} />
      <Tab.Screen name="Configuración" component={ConfiguracionScreen} />
    </Tab.Navigator>
  );
}

// App Navigation
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="RegistroScreen" component={RegistroScreen} />
        <Stack.Screen name="HomeScreen" component={HomeTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
