import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Alert, TextInput } from 'react-native';

export default function ConfiguracionScreen({ navigation }) {
  const [correo, setCorreo] = useState('usuario@email.com');
  const [contraseña, setContraseña] = useState('');
  const [notificacionesActivas, setNotificacionesActivas] = useState(true);

  const handleActualizarCorreo = () => {
    Alert.alert('Correo actualizado', `Nuevo correo: ${correo}`);
  };

  const handleCambiarContraseña = () => {
    if(contraseña.length < 6){
      Alert.alert('Error','La contraseña debe tener al menos 6 caracteres');
    } else {
      Alert.alert('Contraseña actualizada', 'Tu contraseña ha sido cambiada');
      setContraseña('');
    }
  };

  const toggleNotificaciones = () => {
    setNotificacionesActivas(!notificacionesActivas);
    Alert.alert('Notificaciones', notificacionesActivas ? 'Desactivadas' : 'Activadas');
  };

  const handleCerrarSesion = () => {
    // Navega a LoginScreen para cerrar sesión
    navigation.reset({
      index:0,
      routes:[{name:'LoginScreen'}]
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Encabezado uniforme */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Configuración</Text>
      </View>

      {/* Cambiar contraseña */}
      <View style={styles.optionCard}>
        <Text style={styles.optionTitle}>Cambiar contraseña</Text>
        <TextInput
          style={styles.input}
          placeholder="Nueva contraseña"
          value={contraseña}
          onChangeText={setContraseña}
          secureTextEntry
        />
        <TouchableOpacity style={styles.button} onPress={handleCambiarContraseña}>
          <Text style={styles.buttonText}>Actualizar</Text>
        </TouchableOpacity>
      </View>

      {/* Actualizar correo */}
      <View style={styles.optionCard}>
        <Text style={styles.optionTitle}>Actualizar correo</Text>
        <TextInput
          style={styles.input}
          placeholder="Nuevo correo"
          value={correo}
          onChangeText={setCorreo}
          keyboardType="email-address"
        />
        <TouchableOpacity style={styles.button} onPress={handleActualizarCorreo}>
          <Text style={styles.buttonText}>Actualizar</Text>
        </TouchableOpacity>
      </View>

      {/* Notificaciones */}
      <View style={styles.optionCard}>
        <Text style={styles.optionTitle}>Notificaciones</Text>
        <TouchableOpacity style={styles.button} onPress={toggleNotificaciones}>
          <Text style={styles.buttonText}>{notificacionesActivas ? 'Desactivar' : 'Activar'}</Text>
        </TouchableOpacity>
      </View>

      {/* Botón de cerrar sesión */}
      <TouchableOpacity style={styles.logoutButton} onPress={handleCerrarSesion}>
        <Text style={styles.logoutText}>Cerrar sesión</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:{
    flexGrow:1,
    padding:15,
    backgroundColor:'#f0f4f7'
  },
  header:{
    padding:15,
    backgroundColor:'#1e3a8a',
    alignItems:'center',
    borderRadius:15,
    marginBottom:20
  },
  headerText:{
    color:'#fff',
    fontSize:20,
    fontWeight:'700'
  },
  optionCard:{
    backgroundColor:'#fff',
    padding:15,
    borderRadius:15,
    marginBottom:15,
    shadowColor:'#000',
    shadowOffset:{width:0,height:2},
    shadowOpacity:0.1,
    shadowRadius:5,
    elevation:3
  },
  optionTitle:{
    fontSize:16,
    fontWeight:'600',
    color:'#1e3a8a',
    marginBottom:10
  },
  input:{
    borderWidth:1,
    borderColor:'#ccc',
    borderRadius:15,
    padding:10,
    marginBottom:10
  },
  button:{
    backgroundColor:'#1e3a8a',
    paddingVertical:10,
    borderRadius:15,
    alignItems:'center'
  },
  buttonText:{
    color:'#fff',
    fontWeight:'700'
  },
  logoutButton:{
    marginTop:20,
    backgroundColor:'#ef4444',
    paddingVertical:12,
    borderRadius:20,
    alignItems:'center'
  },
  logoutText:{
    color:'#fff',
    fontWeight:'700',
    fontSize:16
  }
});
