import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { FONT_FAMILY_SEMI_BOLD, COR_DE_FUNDO, FONT_SIZE_SMALL } from '../../../../assets/styles/styles';

export const Item = ({ imagem, titulo, estudio, itemDesc, itemName, preco, id }) => {
    const navigation = useNavigation();
    return (
        // evendo de touch para enviar o usuário para a tela de detalhe produto
        <TouchableOpacity style={styles.containerItem}
            onPress={() => navigation.push('DetalhesProduto', { imagem, titulo, estudio, itemDesc, itemName, preco, id })}>
            <Image source={imagem} style={styles.imagem} resizeMode="contain" />
            <Text style={styles.texto}>{titulo}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    containerItem: {
        height: 160,
        backgroundColor: COR_DE_FUNDO,
        borderRadius: 10,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 8
    },
    texto: {
        marginTop: 8,
        fontFamily: FONT_FAMILY_SEMI_BOLD,
        fontSize: FONT_SIZE_SMALL,
        color: '#848486'
    },
    imagem: {
        height: 84,
    }
});