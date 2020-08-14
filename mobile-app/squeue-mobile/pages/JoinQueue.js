import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, Button, StyleSheet, Text, View } from 'react-native';

export default function JoinQueue({ navigation }) {
  return (
    <View style={{flex: 1}}>
      <View style={styles.container1}>
        <Image
            source={require('../assets/scotia_logo.png')}
            style={styles.logo}
        />
      </View>      
    </View>
  );
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  titleText: {
    alignItems: 'center',
    color: '#E4001D',
    // fontFamily: 'Futura',
    fontWeight: "bold",
    fontSize: 28
  },
  logo: {
    // justifyContent: 'center',
    maxWidth: 52,
    maxHeight: 52,
    flex: 1
  },
});
