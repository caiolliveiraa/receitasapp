import React, { useState } from "react";
import { View, Text, Image, ScrollView, KeyboardAvoidingView, Platform, TouchableOpacity } from "react-native";
import { Button, TextInput, withTheme } from 'react-native-paper';
import receitasapp from '../imgs/receitasapp.png';
import { useUsuario } from "../contexts/useContext";

function Entrada({ navigation }) {
  const apiUrl = process.env.EXPO_PUBLIC_API_URL;
  
  const { nomeDoUsuario, setNomeDoUsuario } = useUsuario();
  const [usuario, setUsuario] = useState('');
  const [textSenha, setTextSenha] = useState('');
  const [autenticado, setAutenticado] = useState(false);

  const irPraCadastro = () => {
    navigation.navigate('Cadastro');
  };

  const irParaInicio = () => {
    navigation.navigate('MyTabs');
  };


  const handleEntrar = () => {
    fetch(`${apiUrl}/usuarios`, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        const contaEncontrada = data.find((conta) => conta.usuario === usuario && conta.senha === textSenha);

        if (contaEncontrada) {
          setAutenticado(true);
          setNomeDoUsuario(usuario);
          irParaInicio();
        } else {
          alert('Credenciais inválidas. Tente novamente.');
        }
      })
      .catch((error) => console.error('Erro na verificação de credenciais:', error));
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
          <Text style={{ color: 'black', fontSize: 16, textTransform: 'uppercase' }}>Senha</Text>
          <TextInput
            theme={{ colors: { primary: 'white' } }}
            mode="outlined"
            secureTextEntry
            style={{ width: '100%', backgroundColor: 'white', height: 40, marginBottom: 16 }}
            value={textSenha}
            onChangeText={(text) => setTextSenha(text)}
          />
          <Button textColor="black" style={{ backgroundColor: '#CFCFCF', paddingHorizontal: 70 }} onPress={handleEntrar}>
            Entrar
          </Button>
          <Text style={{ color: 'black', fontSize: 12, textTransform: 'uppercase', marginTop: 10 }}>Não possui uma conta? </Text>
          <TouchableOpacity onPress={() => irPraCadastro()}>
            <Text>Crie uma agora.</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    </ScrollView>
  );
}

export default withTheme(Entrada);
