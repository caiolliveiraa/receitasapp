import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Entrada from '../telas/Entrada';
import Cadastro from '../telas/Cadastro';

const Stack = createNativeStackNavigator();

function MeuMenuStack() {
  return (
    <Stack.Navigator
    initialRouteName='Login'
    screenOptions={{
      headerShown: false,
    }}
    >
      <Stack.Screen name="Entrada" component={Entrada} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
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