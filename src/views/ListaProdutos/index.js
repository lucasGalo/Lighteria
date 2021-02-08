import React from 'react';
import { FlatList, View } from 'react-native';
import { DATA } from '../../utils/data';
import Cabecalho from './components/Cabecalho';

const ListaProdutos = () => {
    return <View>
        <FlatList
            numColumns={2}
            data={DATA}
            renderItem={({ item }) => <View />}
            keyExtractor={item => item.id}
            ListHeaderComponent={
                <Cabecalho />
            }
        />
    </View>
}

export default ListaProdutos;