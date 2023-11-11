import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { PaperProvider } from 'react-native-paper';

import Menu from './src/menu';
import { UsuarioProvider } from './src/contexts/useContext';
import {
  SafeAreaView,
  SafeAreaProvider,
  SafeAreaInsetsContext,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

export default function App() {
  const theme = {
    myOwnColor: '#BADA55',
    branco: '#FFFFFF'
  };

  return (
    <UsuarioProvider>
      <PaperProvider theme={theme}>
        <SafeAreaProvider>
          <Menu />
        </SafeAreaProvider>
      </PaperProvider>
    </UsuarioProvider>

  );
}
