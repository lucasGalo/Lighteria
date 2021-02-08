import React from 'react';
import { FlatList, View } from 'react-native';
import { DATA } from '../../utils/data';
import Cabecalho from './components/Cabecalho';
import { Item } from './components/Produto';

const ListaProdutos = () => {
    return <View>
        <FlatList
            numColumns={2}
            data={DATA}
            renderItem={({ item }) => <Item {...item}/>}
            keyExtractor={item => item.id}
            ListHeaderComponent={
                <Cabecalho />
            }
        />
    </View>
}

export default ListaProdutos;