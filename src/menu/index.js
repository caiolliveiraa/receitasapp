import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons'; 

import Entrada from '../telas/Entrada';
import Cadastro from '../telas/Cadastro';
import Inicio from '../telas/Inicio';
import Receitas from '../telas/Receitas';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen 
        name="Inicio"
        options={{
          tabBarLabel: 'Inicio',
          tabBarLabelStyle: { color: '#47A5C2' },
          tabBarIcon: ({}) => (
            <Feather name="home" size={24} color={'#47A5C2'} />
          ),
        }}
        component={Inicio} />
      <Tab.Screen
        name="Receitas"
        options={{
          tabBarLabel: 'Receitas',
          tabBarLabelStyle: { color: '#47A5C2' },
          tabBarIcon: ({}) => (
            <Feather name="book-open" size={24} color={'#47A5C2'} />
          ),
        }}
        component={Receitas} />
    </Tab.Navigator>
  );
}



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
      <Stack.Screen name="MyTabs" component={MyTabs} />

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