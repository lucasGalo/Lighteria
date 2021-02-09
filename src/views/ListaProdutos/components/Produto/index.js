import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export const Item = ({ imagem, titulo }) => {
    const navigation = useNavigation(); 
    return (
        <TouchableOpacity style={styles.containerItem} onPress={() => navigation.push('DetalhesProduto') }>
            <Image source={imagem} style={styles.imagem} resizeMode="contain" />
            <Text style={styles.texto}>{titulo}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    containerItem: {
        height: 160,
        backgroundColor: '#fff',
        borderRadius: 10,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 8
    },
    texto: {
        marginTop: 8,
        fontFamily: 'OpenSans-SamiBold',
        fontSize: 14,
        color: '#848486'
    },
    imagem: {
        height: 84,
    }

})