import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Alert, Modal, TextInput } from 'react-native';

export default function PreguntasScreen() {
  const [preguntas, setPreguntas] = useState([
    {id:'1', pregunta:'¿Cómo instalar Node.js?', respuestas:['Descarga desde la web oficial.','Usa nvm para manejar versiones.']},
    {id:'2', pregunta:'¿Qué es React Native?', respuestas:['Framework para apps móviles.','Permite usar JS y componentes nativos.']},
    {id:'3', pregunta:'¿Cómo subir documentos a la plataforma?', respuestas:['Usa el botón "Subir" en tu perfil.']},
  ]);

  const [modalVisible, setModalVisible] = useState(false);
  const [respuesta, setRespuesta] = useState('');
  const [preguntaSeleccionada, setPreguntaSeleccionada] = useState(null);

  const handleResponder = (item) => {
    setPreguntaSeleccionada(item);
    setModalVisible(true);
  };

  const enviarRespuesta = () => {
    const updatedPreguntas = preguntas.map(p => {
      if(p.id === preguntaSeleccionada.id){
        return {...p, respuestas:[...p.respuestas, respuesta]};
      }
      return p;
    });
    setPreguntas(updatedPreguntas);

    Alert.alert('Respuesta enviada', `Tu respuesta: ${respuesta}`);
    setRespuesta('');
    setPreguntaSeleccionada(null);
    setModalVisible(false);
  };

  const renderItem = ({item}) => (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{item.pregunta}</Text>
      {item.respuestas && item.respuestas.map((r,i)=>(
        <Text key={i} style={styles.cardRespuesta}>- {r}</Text>
      ))}
      <TouchableOpacity style={styles.responderButton} onPress={()=>handleResponder(item)}>
        <Text style={styles.responderText}>Responder</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Etiqueta de pestaña uniforme */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Preguntas</Text>
      </View>

      <FlatList
        data={preguntas}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
        columnWrapperStyle={{justifyContent:'space-between', marginBottom:15}}
        contentContainerStyle={{padding:10, paddingBottom:20}}
      />

      {/* Modal para responder */}
      <Modal visible={modalVisible} animationType="slide" transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>{preguntaSeleccionada?.pregunta}</Text>
            <TextInput
              style={styles.input}
              placeholder="Escribe tu respuesta..."
              value={respuesta}
              onChangeText={setRespuesta}
              multiline
            />
            <TouchableOpacity style={styles.sendButton} onPress={enviarRespuesta}>
              <Text style={styles.sendText}>Enviar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{marginTop:10}} onPress={()=>setModalVisible(false)}>
              <Text style={styles.cancelText}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#f0f4f7'
  },
  header:{
    padding:15,
    backgroundColor:'#1e3a8a',
    alignItems:'center',
    borderRadius:15,
    margin:10
  },
  headerText:{
    color:'#fff',
    fontSize:20,
    fontWeight:'700'
  },
  card:{
    flex:0.48,
    backgroundColor:'#fff',
    padding:15,
    borderRadius:20,
    shadowColor:'#000',
    shadowOffset:{width:0,height:2},
    shadowOpacity:0.1,
    shadowRadius:5,
    elevation:3,
    marginBottom:10
  },
  cardTitle:{
    fontSize:16,
    fontWeight:'700',
    color:'#1e3a8a',
    marginBottom:5
  },
  cardRespuesta:{
    fontSize:14,
    color:'#333',
    marginBottom:3
  },
  responderButton:{
    marginTop:10,
    backgroundColor:'#1e3a8a',
    paddingVertical:8,
    borderRadius:15,
    alignItems:'center'
  },
  responderText:{
    color:'#fff',
    fontWeight:'700'
  },
  modalContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'rgba(0,0,0,0.5)'
  },
  modalContent:{
    width:'90%',
    backgroundColor:'#fff',
    borderRadius:20,
    padding:20
  },
  modalTitle:{
    fontSize:18,
    fontWeight:'700',
    color:'#1e3a8a',
    marginBottom:15
  },
  input:{
    height:100,
    borderColor:'#ccc',
    borderWidth:1,
    borderRadius:15,
    padding:10,
    marginBottom:15,
    textAlignVertical:'top'
  },
  sendButton:{
    backgroundColor:'#1e3a8a',
    paddingVertical:12,
    borderRadius:20,
    alignItems:'center'
  },
  sendText:{
    color:'#fff',
    fontWeight:'700',
    fontSize:16
  },
  cancelText:{
    color:'#1e3a8a',
    fontWeight:'600',
    textAlign:'center'
  }
});
