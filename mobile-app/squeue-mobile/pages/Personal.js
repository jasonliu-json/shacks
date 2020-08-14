import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, Button, StyleSheet, Text, View } from 'react-native';

export default function Personal({ navigation }) {
  return (
    <View style={{backgroundColor: '#ffffff', height: 700}}>
    <View style={{backgroundColor: '#FA521B', flex: 1, alignItems: 'center'}}>
      <Text style={styles.titleText}>
        Personal Banking
      </Text>
    </View>
    <Image
      source={require('../assets/personalPage.png')}
      style={{height:160, width: 400, marginBottom: 30, flex: 1, alignSelf: 'center'}}
    />
    <View style={{flex: 4, backgroundColor: '#FFFFFF', marginBottom: 80}}>
      <View style={{marginRight: 65, marginLeft: 65, flex: 1}}>
        <Button
          title="Open Account"
          onPress={() =>navigation.navigate('Confirmation', { person: 'Client Specialist', avgWaitTime: 10 })}
          color="#FA521B"
        />
      </View> 
      <View style={{marginRight: 65, marginLeft: 65, flex: 1}}>
        <Button
          title="Account Inquiries"
          onPress={() =>navigation.navigate('Confirmation', { person: 'Teller', avgWaitTime: 5 })}
          color="#FA521B"
        />
      </View>
      <View style={{marginRight: 65, marginLeft: 65, flex: 1}}>
      <Button
          title="Credit Card Inquiries"
          onPress={() =>navigation.navigate('Confirmation', { person: 'Teller', avgWaitTime: 5 })}
          color="#FA521B"
        />
      </View>
      <View style={{marginRight: 65, marginLeft: 65, flex: 1}}>
        <Button
          title="Investment Inquiries"
          onPress={() =>navigation.navigate('Confirmation', { person: 'Financial Advisor', avgWaitTime: 30 })}
          color="#FA521B"
        />
      </View> 
      <View style={{marginRight: 65, marginLeft: 65, flex: 1}}>
        <Button
          title="Mortgage Inquiries"
          onPress={() =>navigation.navigate('Confirmation', { person: 'Mortgage Specialist', avgWaitTime: 15 })}
          color="#FA521B"
        />
      </View>
      <View style={{marginRight: 65, marginLeft: 65, flex: 1}}>
        <Button
          title="Insurance Inquiries"
          onPress={() =>navigation.navigate('Confirmation', { person: 'Insurance Specialist', avgWaitTime: 20 })}
          color="#FA521B"
        />
      </View>
      <View style={{marginRight: 65, marginLeft: 65, flex: 1}}>
        <Button
          title="Other"
          onPress={() =>navigation.navigate('Confirmation', { person: 'Teller', avgWaitTime: 5 })}
          color="#FA521B"
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
