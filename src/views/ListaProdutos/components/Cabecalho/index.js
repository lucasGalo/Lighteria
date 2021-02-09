import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { COR_DE_FUNDO, FONT_FAMILY_REGULAR } from '../../../../assets/styles/styles';

const Cabecalho = () => {
    return (
        <>
            <View style={styles.containerTitulo}>
                <Text style={styles.titulo}>Lighteria</Text>
                <View style={styles.containerSacola}>
                    <Image
                        source={require('../../../../assets/images/icone-sacola.png')}
                        style={styles.imagem} />
                </View>
            </View>
            <View style={styles.containerDescricao}>
                <View style={styles.separador} />
                <View style={styles.containerTexto}>
                    <Text style={styles.textoDescricao}>Categorias</Text>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F4F0F4'
    },
    containerTitulo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 16,
        paddingHorizontal: 6
    },
    titulo: {
        fontFamily: 'OpenSans-Bold',
        fontSize: 28
    },
    containerSacola: {
        backgroundColor: '#fff',
        padding: 18,
        borderRadius: 30
    },
    imagem: {
        height: 30,
        width: 30
    },
    containerDescricao: {
        // paddingHorizontal: 16
    },
    separador: {
        borderWidth: 0.5,
        borderColor: '#A1A5AA'
    },
    containerTexto: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: -46
    },
    textoDescricao: {
        padding: 34,
        backgroundColor: COR_DE_FUNDO,
        fontSize: 16,
        fontFamily: FONT_FAMILY_REGULAR,
        color: '#A1A5AA'
    }
})

export default Cabecalho;