import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { FONT_FAMILY_BOLD, FONT_FAMILY_REGULAR, FONT_SIZE_MEDIUM, FONT_SIZE_X_LARGE, FONT_SIZE_SMALL } from '../../../../assets/styles/styles';
import { Botao } from '../../../../componentes/botao'
import { DataContext } from '../../../../provider';
import { formataValor } from '../../../../utils/utils';

export const DescricaoItem = ({ imagem, estudio, itemDesc, itemName, titulo, preco, id }) => {

    const navigation = useNavigation();
    const { itensCheckout, setItensCheckout, adicionarItem } = useContext(DataContext);    

    function setar() {
        let quantidade = 1
        const obj = { imagem, estudio, itemDesc, itemName, titulo, preco, id, quantidade }
        adicionarItem(obj)
    }   

    return (
        <View style={styles.itemContainer}>
            <View style={styles.itemPosicao}>
                <View style={styles.item}>
                    <View style={styles.headerPosicao}>
                        <View>
                            <Text style={styles.textoSuperior}>{estudio}</Text>
                            <Text style={styles.textoMedio}>{itemName}</Text>
                            <Text style={styles.textoInferior}>{titulo}</Text>
                        </View>
                        <Image soucer={imagem} style={styles.imagemItem} />
                    </View>
                    <View>
                        <Text style={styles.textoDescricao}>{itemDesc}</Text>
                    </View>
                    <View style={styles.rodape}>
                        <Text style={styles.moeda}>{formataValor(preco)}</Text>
                        <Botao
                            titulo={'COMPRAR'}
                            onPress={() => setar()} />
                    </View>
                </View>
            </View>
        </View>
    );

};



const styles = StyleSheet.create({
    itemContainer: {
        flex: 4,
        marginTop: -60
    },
    itemPosicao: {
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center'
    },
    item: {
        backgroundColor: '#fff',
        borderRadius: 30,
        padding: 28,
        width: '80%',
        elevation: 4
    },
    headerPosicao: {

    },
    textoPosicao: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    imagemItem: {
        width: 30,
        height: 72
    },
    textoSuperior: {
        fontFamily: FONT_FAMILY_BOLD,
        fontSize: FONT_SIZE_MEDIUM,
        marginBottom: 4
    },
    textoMedio: {
        fontFamily: FONT_FAMILY_BOLD,
        fontSize: FONT_SIZE_X_LARGE,
        marginBottom: 4
    },
    textoInferior: {
        fontFamily: FONT_FAMILY_REGULAR,
        fontSize: FONT_SIZE_SMALL,
        color: '#CACACA',
        marginBottom: 12
    },
    rodape: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 16
    },
    moeda: {
        fontFamily: FONT_FAMILY_BOLD,
        fontSize: FONT_SIZE_X_LARGE,
        alignItems: 'center'
    }
})

export default DescricaoItem;