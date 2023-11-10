import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Entrada from '../telas/Entrada';
import Cadastro from '../telas/Cadastro';
import Inicio from '../telas/Inicio';

const Stack = createNativeStackNavigator();

function MeuMenuStack() {
  return (
    <Stack.Navigator
    initialRouteName='Inicio'
    screenOptions={{
      headerShown: false,
    }}
    >
      <Stack.Screen name="Entrada" component={Entrada} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
      <Stack.Screen name="Inicio" component={Inicio} />

    </Stack.Navigator>
  );
}

export default function Menu() {
  return (
    <NavigationContainer>
      <MeuMenuStack />
    </NavigationContainer>
  );
}