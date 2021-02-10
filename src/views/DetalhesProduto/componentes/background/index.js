import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Dimensions, ImageBackground, View, StyleSheet, Image } from 'react-native';
import { Sacola } from '../../../../componentes/sacola';

const Background = () => {
    const imgSrc = require('../../../../assets/images/bgimg.jpg');
    const navigation = useNavigation();
    return (
        <View style={styles.bgContainer}>
            <ImageBackground
                resizeMode="cover"
                source={imgSrc}
                style={styles.imagemFundo}>
                <View style={styles.headerContainer}>
                    <Image
                        source={require('../../../../assets/images/flecha-esquerda.png')}
                        style={styles.imagemSeta}
                    />
                    <View style={styles.containerSacola}>
                        <Sacola />
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    bgContainer: {
        flex: 1.5,
    },
    imagemFundo: {
        width: Dimensions.get('window').width,
        height: '100%'
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    imagemSeta: {
        width: 24,
        height: 24,
        marginTop: 36,
        marginLeft: 24
    },
    containerSacola:{
        padding: 18
    }
})

export default Background;