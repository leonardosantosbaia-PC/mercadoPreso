// Arquivo: src/components/Header.tsx

import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface HeaderProps {
    setTermoDeBusca: (text: string) =>void;
}    // Define o molde (Interface) para as propriedades.

export function Header ({ setTermoDeBusca} : HeaderProps){    // Recebe a função 'setTermoDeBusca'
    return (
        <SafeAreaView style={styles.safeArea}>
          <View style={styles.container}>
            <TextInput style={styles.searchInput}
            placeholder="Buscar produtos, marcas..."
            onChangeText= {setTermoDeBusca}/>
           <TouchableOpacity onPress={() => alert('Clicou!')}>
                <MaterialIcons name="shopping-cart" size={28} color={"#FFFFFF"}/>
            </TouchableOpacity> 
            </View>  
        </SafeAreaView>
    )
        
}

const styles = StyleSheet.create({ //criando os estilos
    safeArea: {
        backgroundColor: '#007BFF', //Fundo Azul
    },
    container: {
        padding: 16, // espaçamento interno
        flexDirection: 'row', //alinha os itens na horizontal
        alignItems: 'center', //alinha os itens no centro verticalmente
    },
    searchInput:{
        backgroundColor:'#FFFFFF', // fundo branco
        height: 40, //altura fixa
        borderRadius: 20, //bordas arredondadas
        paddingHorizontal: 16, //espaçamento interno horizontal
        fontSize: 16, //tamanho da fonte
        flex: 1, //ocupa todo o espaço disponível
        marginRight: 10, //espaçamento entre o input e o ícone do carrinho
    }

});