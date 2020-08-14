import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, Button, StyleSheet, Text, View } from 'react-native';

export default function SmallBusiness({ navigation }) {
  return (
    <View style={{backgroundColor: '#ffffff', height: 700}}>
    <View style={{backgroundColor: '#029CD9', flex: 1, alignItems: 'center'}}>
      <Text style={styles.titleText}>
        Small Business Banking
      </Text>
    </View>
    <Image
      source={require('../assets/businessPage.png')}
      style={{height:160, width: 400, marginBottom: 30, flex: 1, alignSelf: 'center'}}
    />
    <View style={{flex: 4, backgroundColor: '#FFFFFF', marginBottom: 80}}>
      <View style={{marginRight: 65, marginLeft: 65, flex: 1}}>
        <Button
          title="Open Account"
          onPress={() =>navigation.navigate('Confirmation', { person: 'Small Business Specialist', avgWaitTime: 15 })}
          color='#439CD1'
        />
      </View> 
      <View style={{marginRight: 65, marginLeft: 65, flex: 1}}>
        <Button
          title="Line of Credit Inquiries"
          onPress={() =>navigation.navigate('Confirmation', { person: 'Small Business Specialist', avgWaitTime: 15 })}
          color='#439CD1'
        />
      </View>
      <View style={{marginRight: 65, marginLeft: 65, flex: 1}}>
        <Button
          title="Credit Card Inquiries"
          onPress={() =>navigation.navigate('Confirmation', { person: 'Small Business Specialist', avgWaitTime: 15 })}
          color='#439CD1'
        />
      </View>
      <View style={{marginRight: 65, marginLeft: 65, flex: 1}}>
        <Button
          title="Loans and Leases"
          onPress={() =>navigation.navigate('Confirmation', { person: 'Small Business Specialist', avgWaitTime: 15 })}
          color='#439CD1'
        />
      </View> 
      <View style={{marginRight: 65, marginLeft: 65, flex: 1}}>
        <Button
          title="Payment/Merchant Services"
          onPress={() =>navigation.navigate('Confirmation', { person: 'Small Business Specialist', avgWaitTime: 15 })}
          color='#439CD1'
        />
      </View>
      <View style={{marginRight: 65, marginLeft: 65, flex: 1}}>
        <Button
          title="Other"
          onPress={() =>navigation.navigate('Confirmation', { person: 'Small Business Specialist', avgWaitTime: 15})}
          color='#439CD1'
        />
      </View>
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
    titleText: {
        color: '#ffffff',
        fontWeight: "bold",
        fontSize: 28,
        fontFamily: 'sans-serif-medium',
        textAlign: 'center',
        flex: 1,
        marginTop: 20
      },
});
