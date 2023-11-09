import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { PaperProvider } from 'react-native-paper';

import Menu from './src/menu';

export default function App() {
  const theme = {
       myOwnColor: '#BADA55',
       branco: '#FFFFFF'
  };
  
  return (
    <PaperProvider theme={theme}>
      <Menu />
    </PaperProvider>
  );
}
