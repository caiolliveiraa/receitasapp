import React, { useState } from "react";
import { View, Text, Image, ScrollView, KeyboardAvoidingView, Platform } from "react-native";
import { Button, TextInput, withTheme } from 'react-native-paper';
import receitasapp from '../imgs/receitasapp.png';

function Cadastro() {
  const [usuario, setUsuario] = useState('');
  const [textEmail, setTextEmail] = useState('');
  const [textSenha, setTextSenha] = useState('');
  const [confirmaSenha, setConfirmaSenha] = useState('');

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
        <Text style={{ color: 'black', fontSize: 16, textTransform: 'uppercase' }}>E-mail</Text>
        <TextInput
          theme={{ colors: { primary: 'white' } }}
          mode="outlined"
          style={{ width: '100%', backgroundColor: 'white', height: 40, marginBottom: 16 }}
          value={textEmail}
          onChangeText={textEmail => setTextEmail(textEmail)}
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
        <Text style={{ color: 'black', fontSize: 16, textTransform: 'uppercase' }}>Confirme a senha</Text>
        <TextInput
          theme={{ colors: { primary: 'white' } }}
          mode="outlined"
          secureTextEntry
          style={{ width: '100%', backgroundColor: 'white', height: 40, marginBottom: 16 }}
          value={confirmaSenha}
          onChangeText={confirmaSenha => setConfirmaSenha(confirmaSenha)}
        />
        <Button textColor="black" style={{ backgroundColor: '#CFCFCF', paddingHorizontal: 70 }} onPress={() => console.log('Usuário:', usuario, 'E-mail:', textEmail, 'Senha:', textSenha, 'Confirmação de Senha:', confirmaSenha)}>
          Criar conta
        </Button>
      </KeyboardAvoidingView>
      </View>
    </ScrollView>
  );
}

export default withTheme(Cadastro);
