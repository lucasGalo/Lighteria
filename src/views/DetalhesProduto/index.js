import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const DetalhesProduto = ({route}) => {
    const {imagem, titulo, estudio, itemDesc, itemName, preco, id} = route.params;
    return (
        <View style={styles.container}>
            <Text>{titulo}</Text>
            <Background />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})