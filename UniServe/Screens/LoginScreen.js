import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [correo, setCorreo] = useState('');
  const [contraseña, setContraseña] = useState('');

  const validarCorreo = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleLogin = () => {
    if(!correo || !contraseña){
      Alert.alert('Error','Debes llenar todos los campos');
      return;
    }

    if(!validarCorreo(correo)){
      Alert.alert('Error','Ingresa un correo válido');
      return;
    }

    if(contraseña.length < 6){
      Alert.alert('Error','Contraseña Incorrecta');
      return;
    }

    // Login exitoso (simulado)
    Alert.alert('Login exitoso', `Bienvenido ${correo}`);
    navigation.reset({
      index:0,
      routes:[{name:'HomeScreen'}] // Redirige al Home
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>UniServe</Text>

      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        keyboardType="email-address"
        value={correo}
        onChangeText={setCorreo}
      />

      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry
        value={contraseña}
        onChangeText={setContraseña}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Iniciar sesión</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>navigation.navigate('RegistroScreen')}>
        <Text style={styles.linkText}>¿No tienes cuenta? Regístrate</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#f0f4f7',
    padding:20
  },
  title:{
    fontSize:32,
    fontWeight:'700',
    color:'#1e3a8a',
    marginBottom:40
  },
  input:{
    width:'100%',
    borderWidth:1,
    borderColor:'#ccc',
    borderRadius:15,
    padding:12,
    marginBottom:15,
    backgroundColor:'#fff'
  },
  button:{
    width:'100%',
    backgroundColor:'#1e3a8a',
    padding:15,
    borderRadius:20,
    alignItems:'center',
    marginBottom:15
  },
  buttonText:{
    color:'#fff',
    fontWeight:'700',
    fontSize:16
  },
  linkText:{
    color:'#1e3a8a',
    fontWeight:'600',
    marginTop:10
  }
});
