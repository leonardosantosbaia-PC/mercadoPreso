// Arquivo: app/index.tsx

import { Link } from 'expo-router'; //leva para outras partes do app - por isso importar
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// homescreen é a nossa tela inicial
export default function HomeScreen() {
  return (
    //estilo container centraliza o conteudo no meio da tela
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao MercadoPreso!</Text>
      <Link href="/products" style={styles.linkButton}>
        <Text style={styles.linkText}>Ver Lista de Produtos</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
     backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  linkButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
  },
  linkText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});