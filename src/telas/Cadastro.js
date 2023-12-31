import React, { useState } from "react";
import { View, Text, Image, ScrollView, KeyboardAvoidingView, Platform } from "react-native";
import { Button, TextInput, withTheme } from 'react-native-paper';
import receitasapp from '../imgs/receitasapp.png';

function Cadastro() {
  const apiUrl = process.env.EXPO_PUBLIC_API_URL;

  const [usuario, setUsuario] = useState('');
  const [textEmail, setTextEmail] = useState('');
  const [textSenha, setTextSenha] = useState('');
  const [confirmSenha, setConfirmSenha] = useState(''); // Mudei o nome da variável para evitar confusão

  const handleCreateUsuario = () => {
    if (textSenha !== confirmSenha) {
      alert('As senhas não coincidem. Por favor, verifique.');
      return;
    }

    const data = {
      usuario: usuario,
      email: textEmail,
      senha: textSenha,
      confirmasenha: confirmSenha,
    };

    fetch(`${apiUrl}/usuario`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then(() => {
        setUsuario('');
        setTextEmail('');
        setTextSenha('');
        setConfirmSenha('');
        alert('Usuário criado com sucesso.');
      })
      .catch((error) => console.error('Erro ao criar usuário:', error));
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={{ flex: 1 }}>
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
            onChangeText={(text) => setUsuario(text)}
          />
          <Text style={{ color: 'black', fontSize: 16, textTransform: 'uppercase' }}>E-mail</Text>
          <TextInput
            theme={{ colors: { primary: 'white' } }}
            mode="outlined"
            style={{ width: '100%', backgroundColor: 'white', height: 40, marginBottom: 16 }}
            value={textEmail}
            onChangeText={(text) => setTextEmail(text)}
          />
          <Text style={{ color: 'black', fontSize: 16, textTransform: 'uppercase' }}>Senha</Text>
          <TextInput
            theme={{ colors: { primary: 'white' } }}
            mode="outlined"
            secureTextEntry
            style={{ width: '100%', backgroundColor: 'white', height: 40, marginBottom: 16 }}
            value={textSenha}
            onChangeText={(text) => setTextSenha(text)}
          />
          <Text style={{ color: 'black', fontSize: 16, textTransform: 'uppercase' }}>Confirme a senha</Text>
          <TextInput
            theme={{ colors: { primary: 'white' } }}
            mode="outlined"
            secureTextEntry
            style={{ width: '100%', backgroundColor: 'white', height: 40, marginBottom: 16 }}
            value={confirmSenha}
            onChangeText={(text) => setConfirmSenha(text)}
          />
          <Button textColor="black" style={{ backgroundColor: '#CFCFCF', paddingHorizontal: 70 }} onPress={handleCreateUsuario}>
            Criar conta
          </Button>
        </KeyboardAvoidingView>
      </View>
    </ScrollView>
  );
}

export default withTheme(Cadastro);
