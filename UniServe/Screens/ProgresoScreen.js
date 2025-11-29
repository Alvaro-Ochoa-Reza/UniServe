import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function ProgresoScreen() {
  // Datos de ejemplo de progreso
  const horasCompletadas = 120;
  const horasTotales = 480;
  const porcentaje = (horasCompletadas / horasTotales) * 100;

  const observaciones = [
    {id:'1', comentario:'Excelente avance esta semana.'},
    {id:'2', comentario:'Recuerda responder las preguntas pendientes del lunes.'},
    {id:'3', comentario:'Puedes enviar tu informe mensual a partir del viernes.'}
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Encabezado de pestaña */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Progreso</Text>
      </View>

      {/* Barra de progreso */}
      <View style={styles.progressContainer}>
        <View style={styles.progressBarBackground}>
          <View style={[styles.progressBarFill, {width:`${porcentaje}%`}]} />
        </View>
        <Text style={styles.progressText}>{horasCompletadas} / {horasTotales} horas completadas</Text>
      </View>

      {/* Observaciones del asesor */}
      <Text style={styles.subHeader}>Observaciones del asesor académico</Text>
      {observaciones.map(obs => (
        <View key={obs.id} style={styles.observationCard}>
          <Text style={styles.observationText}>{obs.comentario}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:{
    flexGrow:1,
    padding:20,
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
  progressContainer:{
    marginBottom:30
  },
  progressBarBackground:{
    height:25,
    backgroundColor:'#ccc',
    borderRadius:15,
    overflow:'hidden'
  },
  progressBarFill:{
    height:25,
    backgroundColor:'#1e3a8a',
    borderRadius:15
  },
  progressText:{
    marginTop:8,
    fontSize:16,
    fontWeight:'600',
    color:'#333'
  },
  subHeader:{
    fontSize:20,
    fontWeight:'700',
    color:'#1e3a8a',
    marginBottom:10
  },
  observationCard:{
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
  observationText:{
    fontSize:16,
    color:'#333'
  }
});
