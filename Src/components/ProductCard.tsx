import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Product } from '../types/Product';

interface ProductCardProps {
  // A regra é: "Quem for usar o ProductCard, DEVE me passar uma propriedade
  // chamada 'product', e ela tem que seguir o molde 'Product'".
  product: Product;
}

export function ProductCard ({product}: ProductCardProps){
    return (
        //conteiner view é a caixa que segura tudo
  <View style={styles.card}> 
    <Image source={{ uri: product.image }} style={styles.image} />
    <Text style={styles.name}>{product.name}</Text>
    <Text style={styles.price}>R$ {product.price.toFixed(2).replace('.', ',')}</Text>
  </View>
);
}


const styles = StyleSheet.create({
  card: {
    flex: 1, // Garante que o cartão ocupe o espaço disponível (útil para múltiplas colunas)
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    margin: 8,
    alignItems: 'center', // Centraliza o conteúdo horizontalmente
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // Adiciona uma sombra no Android
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 12, // Espaço abaixo da imagem
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center', // Centraliza o texto do nome
  },
  price: {
    fontSize: 18,
    color: '#2e7d32', // Cor verde para o preço
    marginTop: 8, // Espaço acima do preço
  },
});
