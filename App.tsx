import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Landing from './src/pages/Landing';
import { StyleSheet, Text, View } from 'react-native';


export default function App() {
  return (
    //No ReactNative, não posso passar dois elementos um em baixo do outro. Precisam ter algo em volta
    //Um alternativa é colocar uma <View> ao redor deles, porém isso carrega mesmo uma view.
    //Uma outra alternativa é envoltar eles com <> </>. Pois não gera uma view.
    <>
      <Landing />
      <StatusBar style="auto" />
    </>
  );
}