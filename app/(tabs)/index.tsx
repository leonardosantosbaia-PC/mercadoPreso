// Arquivo: app/index.tsx
// (Esta agora é a nossa tela principal E a tela da lista de produtos)

import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";

// Importando as peças que precisamos para a lista
import { Header } from '@/src/components/Header';
import { ProductCard } from '../../src/components/ProductCard';
import { MOCK_PRODUCTS } from '../../src/data/products';
// A função principal do app agora retorna a lista de produtos
export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* No futuro, o cabeçalho com a barra de pesquisa
        e o carrinho virá aqui em cima, acima da FlatList.
      */}
      <Header/>
      <FlatList
        data={MOCK_PRODUCTS}
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