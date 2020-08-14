import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, Button, StyleSheet, Text, View } from 'react-native';


export default function Main({ navigation }) {
  return (
    <View style={{backgroundColor: '#ffffff', height: 700}}>
      <View style={{backgroundColor: '#ffffff', flex: 2, alignItems: 'center'}}>
        <Image
            source={require('../assets/scotia_logo.png')}
            style={styles.logo}
        />
        <Text style={styles.titleText}>
          Make your next in-branch visit quicker!
        </Text>
      </View>
      <Image
        source={require('../assets/pageOne.png')}
        style={{height:160, width: 600, marginBottom: 0, flex: 2, alignSelf: 'center'}}
      />
      <View style={{flex: 4, backgroundColor: '#E4001D'}}>
        <View style={{marginRight: 65, marginLeft: 65, marginTop: 10}}>
          <Button
            title="Book an Appointment"
            color="#333333"
            onPress={() =>navigation.navigate('Join the Queue')}
            style={styles.button}
          />
        </View> 
        <View style={{marginRight: 65, marginLeft: 65, marginTop: 30, marginBottom: 30}}>
          <Button
            title="Join the Queue"
            color="#333333"
            onPress={() => navigation.navigate('Join the Queue')}
            style={styles.button}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  titleText: {
    color: '#E4001D',
    fontWeight: "bold",
    fontSize: 28,
    fontFamily: 'sans-serif-medium',
    textAlign: 'center',
    flex: 1,
    marginTop: 20
  },
  logo: {
    maxWidth: 52,
    maxHeight: 52,
    flex: 1,
    marginTop: 30
  },
  button: {
    color: '#FFFFFF',
    paddingTop: 80,
    margin: 10,
    borderRadius: 50
  }
});
