import React from 'react';
import {StatusBar, SafeAreaView} from 'react-native';
import AppRotas from './src/rotas/AppRotas';

export default function App() {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <SafeAreaView style={{flex: 1}}>
      <StatusBar />
      <AppRotas />
    </SafeAreaView>
  );
}
