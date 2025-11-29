import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export default function InicioScreen() {
  const usuario = "Alvaro"; // Se cambiaría dinámicamente cuando haya backend, mi nombre es ejemplo

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Encabezado uniforme */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Inicio</Text>
      </View>

      {/* Mensaje de bienvenida */}
      <Text style={styles.welcomeText}>¡Bienvenido, {usuario}!</Text>
      <Text style={styles.subWelcomeText}>Aquí puedes ver tu progreso y acceder a tus preguntas y notificaciones.</Text>

      {/* Cards verticales */}
      <View style={styles.cardsContainer}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Horas Completadas</Text>
          <Text style={styles.cardNumber}>120/480</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Preguntas Respondidas</Text>
          <Text style={styles.cardNumber}>15</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Notificaciones</Text>
          <Text style={styles.cardNumber}>3</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:{
    flexGrow:1,
    backgroundColor:'#f0f4f7',
    padding:15
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
  welcomeText:{
    fontSize:22,
    fontWeight:'700',
    color:'#1e3a8a',
    marginBottom:5
  },
  subWelcomeText:{
    fontSize:16,
    color:'#333',
    marginBottom:20
  },
  cardsContainer:{
    flexDirection:'column',
    marginBottom:20
  },
  card:{
    backgroundColor:'#fff',
    padding:15,
    borderRadius:20,
    marginBottom:15,
    alignItems:'center',
    shadowColor:'#000',
    shadowOffset:{width:0,height:2},
    shadowOpacity:0.1,
    shadowRadius:5,
    elevation:3
  },
  cardTitle:{
    fontSize:16,
    fontWeight:'700',
    color:'#1e3a8a',
    marginBottom:5
  },
  cardNumber:{
    fontSize:20,
    fontWeight:'700',
    color:'#333'
  },
  buttonsContainer:{
    flexDirection:'row',
    justifyContent:'space-between'
  },
  button:{
    backgroundColor:'#1e3a8a',
    paddingVertical:12,
    paddingHorizontal:15,
    borderRadius:20,
    alignItems:'center',
    flex:0.48
  },
  buttonText:{
    color:'#fff',
    fontWeight:'700'
  }
});
