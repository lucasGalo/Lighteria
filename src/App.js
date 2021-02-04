import React from 'react';
import { View, Text, SafeAreaView, Image, StyleSheet } from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerTitulo}>
        <Text style={styles.titulo}>Lighteria</Text>
        <View style={styles.containerSacola}>
        <Image
          source={require('./assets/images/icone-sacola.png')}
          style={styles.image} />
          </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F0F4'
  },
  containerTitulo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24
  },
  titulo:{
    fontFamily: 'OpenSans-ExtraBold',
    fontSize: 28
  },
  containerSacola:{
    backgroundColor: '#fff',
    padding: 18,
    borderRadius:30
  },
  imagem: {
    height: 30,
    width: 30
  }
})

export default App;