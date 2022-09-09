import {useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Texto from '../../componentes/Texto';

import sucesso from '../../assets/sucesso.png';

import useTextos from '../../hooks/useTextos';
import Topo from '../../componentes/Topo';

export default function SucessoCompra() {
  const navigation = useNavigation();
  const route = useRoute();
  const {mensagemCompra} = useTextos();
  const {botaoHome, botaoProdutor} = useTextos();

  const nomeCompra = route.params?.compra.nome;
  const mensagemCompleta = mensagemCompra?.replace('$NOME', nomeCompra);

  return (
    <SafeAreaView>
      <Topo titulo={'Pedido feito com sucesso!'} imagem={sucesso} />
      <View style={estilos.corpo}>
        <Text style={estilos.titulo}>Parabens!</Text>
        <Text style={estilos.compra}>{mensagemCompleta}</Text>
        <TouchableOpacity
          style={estilos.botao}
          onPress={() => navigation.navigate('Home')}>
          <Texto style={estilos.textoBotao}>{botaoHome}</Texto>
        </TouchableOpacity>
        <TouchableOpacity
          style={estilos.botaoProdutor}
          onPress={() => navigation.pop(2)}>
          <Texto style={estilos.textoBotaoProdutor}>{botaoProdutor}</Texto>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  image: {
    height: 300,
    width: 'auto',
  },
  titulo: {
    fontSize: 26,
    lineHeight: 42,
    color: '#464646',
    fontWeight: 'bold',
  },
  corpo: {
    padding: 16,
  },
  compra: {
    paddingVertical: 16,
    color: '#a3a3a3',
    fontSize: 16,
    lineHeight: 26,
  },
  botao: {
    marginTop: 16,
    backgroundColor: '#2A9F85',
    paddingVertical: 16,
    borderRadius: 6,
  },
  textoBotao: {
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 16,
    lineHeight: 26,
    fontWeight: 'bold',
  },
  botaoProdutor: {
    marginTop: 16,
    backgroundColor: '#fff',
    paddingVertical: 16,
    borderRadius: 6,
    borderColor: '#ECECEC',
    borderWidth: 1,
  },
  textoBotaoProdutor: {
    textAlign: 'center',
    color: '#464646',
    fontSize: 16,
    lineHeight: 26,
    fontWeight: 'bold',
  },
});
