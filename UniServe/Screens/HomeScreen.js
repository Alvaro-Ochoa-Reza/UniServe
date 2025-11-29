import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import InicioScreen from './InicioScreen';
import PreguntasScreen from './PreguntasScreen';
import ProgresoScreen from './ProgresoScreen';
import NotificacionesScreen from './NotificacionesScreen';
import ConfiguracionScreen from './ConfiguracionScreen';

const Tab = createBottomTabNavigator();

export default function HomeScreen() {
  return (
    <Tab.Navigator initialRouteName="Inicio">
      <Tab.Screen name="Inicio" component={InicioScreen} />
      <Tab.Screen name="Preguntas" component={PreguntasScreen} />
      <Tab.Screen name="Progreso" component={ProgresoScreen} />
      <Tab.Screen name="Notificaciones" component={NotificacionesScreen} />
      <Tab.Screen name="Configuración" component={ConfiguracionScreen} />
    </Tab.Navigator>
  );
}
