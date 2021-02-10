import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FONT_FAMILY_BOLD, FONT_FAMILY_SEMI_BOLD, FONT_SIZE_LARGE, FONT_SIZE_SMALL, FONT_SIZE_XX_LARGE, COR_BOTAO_ACAO } from '../../assets/styles/styles';
import { Botao } from '../../componentes/botao';
import { DataContext } from '../../provider';
import { formataValor } from '../../utils/utils';
import { CheckoutItem } from './checkoutitem';

export const Checkout = () => {
    const { itensCheckout } = useContext(DataContext);

    const valorTotal = itensCheckout.reduce(
        (acumulado, atual) => acumulado + atual.quantidade * atual.preco, 0
    );

    const Titulo = ({ children }) => <Text style={styles.titulo}>{children}</Text>;
    const Total = ({ children }) => <Text style={styles.total}>{children}</Text>;
    return (
        <View style={styles.container}>
            <Titulo>Checkout</Titulo>
            {itensCheckout.map((item) => (
                <CheckoutItem {...item}/>
            ))}
            <Total>{formataValor(valorTotal)}</Total>
            <Botao titulo={'FINALIZAR COMPRA'} />
            <TouchableOpacity>
                <Text style={styles.continuarTexto}>Continuar comprando</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 24
    },
    titulo: {
        fontFamily: FONT_FAMILY_SEMI_BOLD,
        fontSize: FONT_SIZE_XX_LARGE
    },
    total: {
        fontFamily: FONT_FAMILY_SEMI_BOLD,
        fontSize: FONT_SIZE_LARGE,
        marginVertical: 36
    },
    continuarTexto: {
        fontFamily: FONT_FAMILY_BOLD,
        fontSize: FONT_SIZE_SMALL,
        color: COR_BOTAO_ACAO,
        marginTop: 20,
        textAlign: 'center'
    }
});