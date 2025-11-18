// Arquivo: app/index.tsx
// (Esta agora é a nossa tela principal E a tela da lista de produtos)

import React, { useState } from 'react';
import { FlatList, StyleSheet, } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";

// Importando as peças que precisamos para a lista
import { Header } from '@/Src/components/Header';
import { ProductCard } from '@/Src/components/ProductCard';
import { MOCK_PRODUCTS } from '@/Src/Data/products';
// A função principal do app agora retorna a lista de produtos
export default function HomeScreen() {
  const [termoDeBusca, setTermoDeBusca] = useState('');  // Cria um container para armazenar o texto digitado na barra de pesquisa
  const produtosFiltrados = MOCK_PRODUCTS.filter(produto => {
    if (termoDeBusca === '')    // Se a busca estiver vazia, retorna todos os produtos              
      return true;
    const nameProduto = produto.name.toLowerCase(); // Converte o nome do produto para minúsculas para busca não ser Case Sensitive         
    const busca = termoDeBusca.toLowerCase();

    return nameProduto.includes(busca); 
  });
 

  return (
    <SafeAreaView style={styles.container}>
      {/* No futuro, o cabeçalho com a barra de pesquisa
        e o carrinho virá aqui em cima, acima da FlatList.
      */}
      <Header setTermoDeBusca={setTermoDeBusca}/>
      <FlatList
        data={produtosFiltrados}  // Usa a lista FILTRADA, e não a lista original
        renderItem={({ item }) => <ProductCard product={item} />}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
      />
    </SafeAreaView>
  );
}

// Usando os mesmos estilos da nossa antiga tela de lista
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5', // Um fundo cinza claro, como na maioria dos apps
  },
});