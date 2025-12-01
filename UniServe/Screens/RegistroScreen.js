import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Switch, ScrollView } from 'react-native';

export default function RegistroScreen({ navigation }) {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [universidad, setUniversidad] = useState('');
  const [carrera, setCarrera] = useState('');
  const [rol, setRol] = useState({general:false, servicio:false, asesor:false});
  const [aceptaTerminos, setAceptaTerminos] = useState(false);

  // Validación de correo
  const validarEmail = (mail) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(mail);
  };

  // Manejo de rol (solo uno activo)
  const toggleRol = (selected) => {
    if(Object.values(rol).some(v=>v) && !rol[selected]){
      Alert.alert('Error','Solo puedes elegir un rol');
      return;
    }
    setRol({...rol, [selected]:!rol[selected]});
  };

  const handleRegister = () => {
    if(!nombre || !email || !password || !confirmPassword || !universidad || !carrera){
      Alert.alert('Error','Completa todos los campos.');
      return;
    }
    if(nombre.length > 70 || !/^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/.test(nombre)){
      Alert.alert('Error','El nombre debe tener máximo 70 caracteres y solo letras.');
      return;
    }
    if(!validarEmail(email)){
      Alert.alert('Error','Ingresa un correo válido.');
      return;
    }
    if(password !== confirmPassword){
      Alert.alert('Error','Las contraseñas no coinciden.');
      return;
    }
    if(!Object.values(rol).some(v=>v)){
      Alert.alert('Error','Selecciona un rol.');
      return;
    }
    if(!aceptaTerminos){
      Alert.alert('Error','Debes aceptar términos y condiciones.');
      return;
    }

    const rolSeleccionado = Object.keys(rol).find(k=>rol[k]);

    // Registro exitoso
    Alert.alert('Registro exitoso', `Usuario registrado como ${rolSeleccionado}`);
    navigation.goBack(); // Vuelve a Login
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>UniServe</Text>

      <TextInput
        style={styles.input}
        placeholder="Nombre completo"
        value={nombre}
        onChangeText={setNombre}
        maxLength={70}
      />
      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Confirmar contraseña"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Universidad / Institución"
        value={universidad}
        onChangeText={setUniversidad}
      />
      <TextInput
        style={styles.input}
        placeholder="Carrera"
        value={carrera}
        onChangeText={setCarrera}
      />

      {/* Switches de roles */}
      <View style={styles.switchContainer}>
        <Text style={styles.switchLabel}>Estudiante general</Text>
        <Switch value={rol.general} onValueChange={()=>toggleRol('general')} trackColor={{false:'#ccc',true:'#1e3a8a'}} thumbColor={rol.general ? '#fff':'#f4f3f4'} />
      </View>
      <View style={styles.switchContainer}>
        <Text style={styles.switchLabel}>Estudiante en servicio</Text>
        <Switch value={rol.servicio} onValueChange={()=>toggleRol('servicio')} trackColor={{false:'#ccc',true:'#1e3a8a'}} thumbColor={rol.servicio ? '#fff':'#f4f3f4'} />
      </View>
      <View style={styles.switchContainer}>
        <Text style={styles.switchLabel}>Asesor académico</Text>
        <Switch value={rol.asesor} onValueChange={()=>toggleRol('asesor')} trackColor={{false:'#ccc',true:'#1e3a8a'}} thumbColor={rol.asesor ? '#fff':'#f4f3f4'} />
      </View>

      {/* Aceptación de términos */}
      <View style={[styles.switchContainer,{marginTop:10}]}>
        <Text style={styles.switchLabel}>Acepto términos y condiciones</Text>
        <Switch value={aceptaTerminos} onValueChange={setAceptaTerminos} trackColor={{false:'#ccc',true:'#1e3a8a'}} thumbColor={aceptaTerminos ? '#fff':'#f4f3f4'} />
      </View>

      <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
        <Text style={styles.buttonText}>Registrar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>navigation.navigate("LoginScreen")} style={{marginTop:10}}>
        <Text style={styles.backText}>Volver a Login</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:{
    flexGrow:1,
    justifyContent:'center',
    alignItems:'center',
    padding:30,
    backgroundColor:'#f0f4f7'
  },
  title:{
    fontSize:48,
    fontWeight:'700',
    color:'#1e3a8a',
    marginBottom:30,
    fontFamily:'sans-serif-light'
  },
  input:{
    width:'100%',
    backgroundColor:'#fff',
    paddingVertical:12,
    paddingHorizontal:20,
    borderRadius:25,
    marginBottom:15,
    fontSize:16,
    shadowColor:'#000',
    shadowOffset:{ width:0, height:2 },
    shadowOpacity:0.1,
    shadowRadius:5,
    elevation:3
  },
  switchContainer:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    width:'100%',
    marginBottom:15
  },
  switchLabel:{
    fontSize:14,
    color:'#333',
    flex:1,
    marginRight:10
  },
  registerButton:{
    width:'100%',
    backgroundColor:'#1e3a8a',
    paddingVertical:15,
    borderRadius:25,
    alignItems:'center',
    marginBottom:10
  },
  buttonText:{
    color:'#fff',
    fontSize:18,
    fontWeight:'bold'
  },
  backText:{
    color:'#1e3a8a',
    fontSize:16,
    fontWeight:'600',
    textAlign:'center'
  }
});
