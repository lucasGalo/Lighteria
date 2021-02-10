import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { DATA } from '../../utils/data';
import Cabecalho from './components/Cabecalho';
import { Item } from './components/Produto';

const ListaProdutos = () => {
    return (
        <View style={styles.container}>
            <FlatList
                numColumns={2}
                data={DATA}
                renderItem={({ item }) => <Item {...item} />} // renderizando cada item com o componente item, passando os parametros
                keyExtractor={(item) => item.id}
                ListHeaderComponent={<Cabecalho />}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 24
    }
});

export default ListaProdutos;