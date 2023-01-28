
import './src/lib/dayjs';

import {StatusBar } from 'react-native';

import {useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
} from '@expo-google-fonts/inter'
import { Loading } from './src/components/Loading';
import { Home } from './src/screens/Home';
import { Routes } from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold
  });

  if(!fontsLoaded){
    return (
      <Loading/>
    );
  } // Garante que as fontes estejam disponíveis quando carregar


  return (
    <>
      <Routes/>
      <StatusBar barStyle={'light-content'} backgroundColor='transparent' translucent/>
    </>
    
  );
}

