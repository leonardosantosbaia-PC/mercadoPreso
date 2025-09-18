// Arquivo: app/products.tsx

import React from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';

// Importando as peças que criamos: o cartão e a lista de dados
import { ProductCard } from '../src/components/ProductCard';
import { MOCK_PRODUCTS } from '../src/data/products';

// A linha mais importante, que estava faltando!
export default function ProductsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Produtos Disponíveis</Text>
      </View>

      <FlatList
        data={MOCK_PRODUCTS}
        renderItem={({ item }) => <ProductCard product={item} />}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});