import React, { useEffect, useState } from "react";
import { FlatList, Text, View, Image, ScrollView, SafeAreaView } from "react-native";
import { withTheme } from "react-native-paper";
import { useUsuario } from "../contexts/useContext";

function Inicio() {
  const apiUrl = process.env.EXPO_PUBLIC_API_URL;

  const { nomeDoUsuario } = useUsuario();

  const [receitas, setReceitas] = useState([]);
  const [receita, setReceita] = useState({
    usuarioId: 1,
    titulo: "",
    imagem: "",
    conteudo: "",
  });

  useEffect(() => {
    fetch(`${apiUrl}/receitas`)
      .then((response) => response.json())
      .then((data) => setReceitas(data))
      .catch((error) => console.error("Erro ao buscar receitas:", error));
  }, []);

  return (

    <View style={{ backgroundColor: '#47A5C2', alignItems: 'center', justifyContent: 'center', height: '100%', padding: 20, marginTop: 15 }}>
      <Text>Oi, {nomeDoUsuario}</Text>
      <Text>Lista de Receitas:</Text>
      <FlatList
        data={receitas}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{backgroundColor: 'white', borderRadius: 8, width: 311, paddingBottom: 10, }}>
            <Image  style={{width: 311, height: 307}} source={{ uri: item.imagem }} />
            <View style={{padding: 10,}}>
            <Text style={{fontSize: 20, textTransform: 'uppercase', fontWeight: '700'}}>{item.titulo}</Text>
            <Text>{`Receita: ${item.conteudo}`}</Text>
            </View>
          </View>
        )}
      />
    </View>

  );
}

export default withTheme(Inicio);
