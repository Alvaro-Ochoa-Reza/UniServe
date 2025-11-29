import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function NotificacionesScreen() {
  const [notificaciones] = useState([
    {id:'1', texto:'Tu respuesta a la pregunta de Node.js fue aprobada.'},
    {id:'2', texto:'Recuerda completar tu informe mensual.'},
    {id:'3', texto:'Nueva pregunta disponible para responder.'}
  ]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Encabezado uniforme */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Notificaciones</Text>
      </View>

      {/* Listado de notificaciones */}
      {notificaciones.map(n => (
        <View key={n.id} style={styles.card}>
          <Text style={styles.cardText}>{n.texto}</Text>
        </View>
      ))}
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
  card:{
    backgroundColor:'#fff',
    padding:15,
    borderRadius:15,
    marginBottom:10,
    shadowColor:'#000',
    shadowOffset:{width:0,height:2},
    shadowOpacity:0.1,
    shadowRadius:5,
    elevation:3
  },
  cardText:{
    fontSize:16,
    color:'#333'
  }
});
