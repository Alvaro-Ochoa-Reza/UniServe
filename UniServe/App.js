import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

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

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,

        tabBarIcon: ({ color, size }) => {
          if (route.name === 'Inicio') {
            return <Ionicons name="home-outline" size={size} color={color} />;
          }
          if (route.name === 'Preguntas') {
            return <Ionicons name="help-circle-outline" size={size} color={color} />;
          }
          if (route.name === 'Progreso') {
            return <MaterialIcons name="analytics" size={size} color={color} />;
          }
          if (route.name === 'Notificaciones') {
            return <Ionicons name="notifications-outline" size={size} color={color} />;
          }
          if (route.name === 'Configuración') {
            return <Ionicons name="settings-outline" size={size} color={color} />;
          }
        },

        tabBarActiveTintColor: '#1e3a8a',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Inicio" component={InicioScreen} />
      <Tab.Screen name="Preguntas" component={PreguntasScreen} />
      <Tab.Screen name="Progreso" component={ProgresoScreen} />
      <Tab.Screen name="Notificaciones" component={NotificacionesScreen} />
      <Tab.Screen name="Configuración" component={ConfiguracionScreen} />
    </Tab.Navigator>
  );
}

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
