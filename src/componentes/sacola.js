import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';

export const Sacola = () => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => navigation.push('Chekout')}>
            <View style={styles.containerSacola}>
                <Image
                    source={require('../assets/images/icone-sacola.png')}
                    style={styles.imagem}
                />
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({

    containerSacola: {
        backgroundColor: '#fff',
        padding: 18,
        borderRadius: 30
    },
    imagem: {
        height: 30,
        width: 30
    }
})