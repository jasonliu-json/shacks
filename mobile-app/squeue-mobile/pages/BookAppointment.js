import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, Button, StyleSheet, Text, View } from 'react-native';

export default function BookAppointment({ navigation }) {
  return (
    <View style={{backgroundColor: '#ffffff', height: 700}}>
      <View style={{backgroundColor: '#E4001D', flex: 2, alignItems: 'center'}}>
        <Text style={styles.titleText}>
          What banking service brings you to the branch today?
        </Text>
      </View>
      <Image
        source={require('../assets/appointmentBook.png')}
        style={{height:160, width: 400, marginBottom: 30, flex: 1, alignSelf: 'center'}}
      />
      <View style={{flex: 4, backgroundColor: '#FFFFFF'}}>
        <View style={{marginRight: 65, marginLeft: 65, flex: 1}}>
          <Button
            title="Small Business Banking"
            onPress={() =>navigation.navigate('Small Business Banking')}
            color='#439CD1'
          />
        </View> 
        <View style={{marginRight: 65, marginLeft: 65, flex: 1}}>
          <Button
            title="Personal Banking"
            onPress={() =>navigation.navigate('Personal Banking')}
            color='#EB6C41'
          />
        </View>
        <View style={{marginRight: 65, marginLeft: 65, marginBottom: 150, flex: 1}}>
          <Button
            title="Commercial Banking"
            onPress={() =>navigation.navigate('Commercial Banking')}
            color='#714EB2'
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  titleText: {
    color: '#FFFFFF',
    fontWeight: "bold",
    fontSize: 28,
    fontFamily: 'sans-serif-medium',
    textAlign: 'center',
    flex: 1,
    marginTop: 80
  },
});
