import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Background from './componentes/background';
import DescricaoItem from './componentes/descricaoItem';

export const DetalhesProduto = ({route}) => {
    const {imagem, titulo, estudio, itemDesc, itemName, preco, id} = route.params;
    return (
        <View style={styles.container}>
            <Text>{titulo}</Text>
            <Background />
            <DescricaoItem />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})