import { useState } from "react";
import { Text, View } from "react-native";
import { Button, TextInput, withTheme } from 'react-native-paper';

function Receitas() {

  const apiUrl = process.env.EXPO_PUBLIC_API_URL;


  const [receita, setReceita] = useState({
    usuarioId: 1, 
    titulo: '',
    imagem: '',
    conteudo: '',
  });

  const handleCreateReceita = () => {
    fetch(`${apiUrl}/receita`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(receita),
    })
      .then((response) => response.json())
      .then(() => {
        setReceita({
          usuarioId: 1,
          titulo: '',
          imagem: '',
          conteudo: '',
        });
        alert('Receita criada com sucesso.');
      })
      .catch((error) => console.error('Erro ao criar receita:', error));
  };

  return (
    <View style={{ flex: 1, width: '100%', justifyContent: 'center', alignContent: 'center', backgroundColor: '#47A5C2', padding: 24, }}>
      <Text>Nova Receita</Text>
      <TextInput
        theme={{ colors: { primary: 'white' } }}
        mode="outlined"
        style={{ width: '100%', backgroundColor: 'white', height: 40, marginBottom: 16 }}
        value={receita.imagem}
        placeholder="Link da imagem da Receita"
        onChangeText={(text) => setReceita({ ...receita, imagem: text })}
      />
      <TextInput
        theme={{ colors: { primary: 'white' } }}
        mode="outlined"
        style={{ width: '100%', backgroundColor: 'white', height: 40, marginBottom: 16 }}
        value={receita.titulo}
        placeholder="Titulo da receita"
        onChangeText={(text) => setReceita({ ...receita, titulo: text })}
      />
      <TextInput
        theme={{ colors: { primary: 'white' } }}
        mode="outlined"
        style={{
          height: '45%',
          backgroundColor: 'white',
          textAlign: 'left',
          justifyContent: 'start',
          alignItems: 'start',
          marginBottom: 16,
        }}
        value={receita.conteudo}
        placeholder="Receita e ingredientes"
        onChangeText={(text) => setReceita({ ...receita, conteudo: text })}
      />
      <Button textColor="black" style={{ backgroundColor: '#CFCFCF', paddingHorizontal: 70 }} onPress={handleCreateReceita}>
        Publicar
      </Button>
    </View>
  )
}

export default withTheme(Receitas);
