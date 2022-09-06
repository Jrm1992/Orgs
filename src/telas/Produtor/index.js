import {useRoute} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, FlatList, View, Image, Text} from 'react-native';
import useTextos from '../../hooks/useTextos';

import Topo from '../../componentes/Topo';
import Cesta from './componentes/Cesta';

import topo from '../../assets/produtores/topo.png';

export function Produtor() {
  const route = useRoute();
  const {cestas, nome, imagem} = route.params;
  const {tituloProdutor, tituloCestas} = useTextos();

  const TopoLista = () => {
    return (
      <>
        <Topo titulo={tituloProdutor} imagem={topo} altura={150} />
        <View style={estilos.conteudo}>
          <View style={estilos.logo}>
            <Image source={imagem} style={estilos.produtorImage} />
            <Text style={estilos.produtor}>{nome}</Text>
          </View>
          <Text style={estilos.cestas}>{tituloCestas}</Text>
        </View>
      </>
    );
  };

  return (
    <FlatList
      ListHeaderComponent={TopoLista}
      data={cestas}
      renderItem={({item}) => <Cesta {...item} produtor={{nome, imagem}} />}
      style={estilos.lista}
    />
  );
}

const estilos = StyleSheet.create({
  lista: {
    backgroundColor: '#ffffff',
  },
  conteudo: {
    paddingHorizontal: 16,
  },
  logo: {
    flexDirection: 'row',
  },
  produtorImage: {
    width: 62,
    height: 62,

    marginTop: -23,

    borderRadius: 6,
  },
  produtor: {
    color: '#464646',
    fontSize: 20,
    lineHeight: 32,
    fontWeight: 'bold',
    marginLeft: 16,
  },
  cestas: {
    color: '#464646',
    fontSize: 20,
    lineHeight: 32,
    fontWeight: 'bold',
    marginTop: 32,
  },
});
