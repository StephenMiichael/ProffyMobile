import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Landing from './src/pages/Landing';
import { AppLoading } from 'expo';
import { Archivo_400Regular, Archivo_700Bold, useFonts } from '@expo-google-fonts/archivo'
import { Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/poppins'
import AppStack from './src/routes/AppStack';

//Para carregar as fontes.
export default function App() {
  let [fontsLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold,
  });

  //Enquantos as fontes não forem carregadas, irá apresentar o Loading do Expo.
  if (!fontsLoaded) {
    return <AppLoading />
  }
  else {
    return (
      //No ReactNative, não posso passar dois elementos um em baixo do outro. Precisam ter algo em volta
      //Um alternativa é colocar uma <View> ao redor deles, porém isso carrega mesmo uma view.
      //Uma outra alternativa é envoltar eles com <> </>. Pois não gera uma view.
      <>
        <AppStack />
        <StatusBar style="light" />
      </>
    );
  }
}