import React, { useEffect, useState } from "react";
import { FlatList, Text, View, Image } from "react-native";
import { Modal, Portal, Button, TextInput, withTheme } from "react-native-paper";
import { useUsuario } from "../contexts/useContext";

function Inicio() {
  const apiUrl = process.env.EXPO_PUBLIC_API_URL;

  const [isModalVisible, setModalVisible] = useState(false);
  const [editedRecipe, setEditedRecipe] = useState(null);
  const [editedTitle, setEditedTitle] = useState('');
  const [editedImage, setEditedImage] = useState('');
  const [editedContent, setEditedContent] = useState('');

  const { nomeDoUsuario } = useUsuario();
  const [receitas, setReceitas] = useState([]);
  const [receita, setReceita] = useState({
    usuarioId: 1,
    titulo: "",
    imagem: "",
    conteudo: "",
  });

    const handleDeleteReceita = (receita) => {
      fetch(`${apiUrl}/receita/${receita.id}`, {
        method: 'DELETE',
      })
        .then(() => {
          const updatedReceitas = receitas.filter((item) => item.id !== receita.id);
          setReceitas(updatedReceitas);
          alert('Receita excluída com sucesso.');
        })
        .catch((error) => console.error('Erro ao excluir receita:', error));
    };

  const handleEditReceita = () => {
    const receitaAtualizada = {
      titulo: editedTitle, 
      imagem: editedImage, 
      conteudo: editedContent, 
    };
  
    const receitaId = editedRecipe.id;
  
    fetch(`${apiUrl}/receita/${receitaId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(receitaAtualizada),
    })
      .then((response) => response.json())
      .then(() => {
        alert('Receita atualizada com sucesso.');
      })
      .catch((error) => console.error('Erro ao editar receita:', error));
  };
    

  useEffect(() => {
    fetch(`${apiUrl}/receitas`)
      .then((response) => response.json())
      .then((data) => setReceitas(data))
      .catch((error) => console.error("Erro ao buscar receitas:", error));
  }, []);

  const toggleModal = (recipe) => {
    if (recipe) {
      setEditedRecipe(recipe);
      setEditedTitle(recipe.titulo);
      setEditedImage(recipe.imagem);
      setEditedContent(recipe.conteudo);
    } else {
      setEditedRecipe(null);
      setEditedTitle('');
      setEditedImage('');
      setEditedContent('');
    }
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={{ backgroundColor: '#47A5C2', alignItems: 'center', justifyContent: 'center', height: '100%', padding: 20, marginTop: 15 }}>
      <Text>Oi, {nomeDoUsuario}</Text>
      <Text>Lista de Receitas:</Text>
      <FlatList
        data={receitas}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ backgroundColor: 'white', borderRadius: 8, width: 311, paddingBottom: 10, marginBottom: 16, zIndex: 0 }}>
            <Image style={{ width: 311, height: 307 }} source={{ uri: item.imagem }} />
            <View style={{ padding: 10 }}>
              <Text style={{ fontSize: 20, textTransform: 'uppercase', fontWeight: '700' }}>{item.titulo}</Text>
              <Text>{`Receita: ${item.conteudo}`}</Text>
              <Button onPress={() => toggleModal(item)}>Editar</Button>
              <Button onPress={() => handleDeleteReceita(item)}>Apagar</Button> 
            </View>
          </View>
        )}
      />
      <Portal>
        <Modal visible={isModalVisible} onDismiss={() => toggleModal(null)} style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1 }}>
          <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 8 }}>
            <TextInput
              label="Título"
              value={editedTitle}
              onChangeText={(text) => setEditedTitle(text)}
            />
            <TextInput
              label="Imagem (URL)"
              value={editedImage}
              onChangeText={(text) => setEditedImage(text)}
            />
            <TextInput
              label="Conteúdo da Receita"
              value={editedContent}
              onChangeText={(text) => setEditedContent(text)}
              multiline
            />
            <Button onPress={() => handleEditReceita(editedRecipe)}>Salvar</Button>
          </View>
        </Modal>
      </Portal>
    </View>
  );
}

export default withTheme(Inicio);
