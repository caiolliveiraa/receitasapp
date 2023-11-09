import React, { useState } from "react";
import { View, Text, Image, ScrollView, KeyboardAvoidingView, Platform, TouchableOpacity } from "react-native";
import { Button, TextInput, withTheme } from 'react-native-paper';
import receitasapp from '../imgs/receitasapp.png';

function Entrada({navigation}) {
  const [usuario, setUsuario] = useState('');
  const [textSenha, setTextSenha] = useState('');

  const irPraCadastro = () => {
    navigation.navigate('Cadastro');
  };


  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={{flex: 1,}}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ backgroundColor: '#47A5C2', flex: 1, alignItems: 'center', justifyContent: 'center', padding: 16 }}
      >
        <Image source={receitasapp} style={{ marginBottom: 40 }} />
        <Text style={{ color: 'black', fontSize: 16, textTransform: 'uppercase' }}>Usuário</Text>
        <TextInput
          theme={{ colors: { primary: 'white' } }}
          mode="outlined"
          style={{ width: '100%', backgroundColor: 'white', height: 40, marginBottom: 16 }}
          value={usuario}
          onChangeText={usuario => setUsuario(usuario)}
        />      
        <Text style={{ color: 'black', fontSize: 16, textTransform: 'uppercase' }}>Senha</Text>
        <TextInput
          theme={{ colors: { primary: 'white' } }}
          mode="outlined"
          secureTextEntry
          style={{ width: '100%', backgroundColor: 'white', height: 40, marginBottom: 16 }}
          value={textSenha}
          onChangeText={textSenha => setTextSenha(textSenha)}
        />
        <Button textColor="black" style={{ backgroundColor: '#CFCFCF', paddingHorizontal: 70 }} onPress={() => console.log('Usuário:', usuario, 'E-mail:', textEmail, 'Senha:', textSenha, 'Confirmação de Senha:', confirmaSenha)}>
          Entrar
        </Button>
        <Text style={{ color: 'black', fontSize: 12, textTransform: 'uppercase', marginTop: 10, }}>Não possui uma conta? </Text>
        <TouchableOpacity onPress={() => irPraCadastro()}>
          <Text>Crie uma agora.</Text>
          </TouchableOpacity>
        
      </KeyboardAvoidingView>
      </View>
    </ScrollView>
  );
}

export default withTheme(Entrada);
