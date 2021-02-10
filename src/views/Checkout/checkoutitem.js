import React from 'react';
import {View, Text} from 'react-native';

export const CheckoutItem = ({
    itemName, titulo, imagem, preco, quantidade
}) => {
    return(
        <View>
            <Text>{titulo}</Text>
        </View>
    );
};