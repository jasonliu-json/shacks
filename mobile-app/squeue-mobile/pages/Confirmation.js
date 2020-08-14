import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, Button, StyleSheet, Text, View } from 'react-native';

import { StackNavigator } from 'react-navigation';

const Confirmation = (props)  => {
    const { state } = props.navigation;
    var specialist = state.params.person;
    var avgWaitTime = state.params.avgWaitTime;
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
    var sec = new Date().getSeconds(); //Current Seconds
    
    var timestamp = date + '/' + month + '/' + year + ' ' + hours + ':' + min + ':' + sec
    var userData = "{id: 1, name: Joshua, seniorStatus: true, queueingFor:" + specialist + ", timestamp:" + timestamp + "}"
    var uri = 'https://api.qrserver.com/v1/create-qr-code/?size=90x90&data=' + userData

    return (
        <View style={{backgroundColor: '#ffffff', height: 700}}>
            <Image
            source={require('../assets/appointmentBook.png')}
            style={{height:160, width: 400, marginTop: 0, flex: 0.5, alignSelf: 'center'}}
            />
            <View style={{backgroundColor: '#ffffff', flex: 2, justifyContent: 'center', alignItems: 'center'}}>
                <Image
                    source={require('../assets/scotia_logo.png')}
                    style={styles.logo}
                />
                <Text style={styles.titleText}>
                    You are in line to see a
                </Text>
                <Text style={styles.specialistText}>
                    { specialist }
                </Text>
                <Image
                    source={{uri: uri || '../assets/qr_code.png'}}
                    style={{height: 115, width: 115, flex: 2, marginTop: 0, marginBottom: 20, alignSelf: 'center'}}
                />
                <Text style={styles.explanationText}>
                    Wait time will be approximately { avgWaitTime } minutes. Scan this QR code when you arrive at the branch to check-in.
                </Text>
            </View>
            <Image
            source={require('../assets/pageOne.png')}
            style={{height:160, width: 400, marginBottom: 70, flex: 0.5, alignSelf: 'center'}}
            />
        </View>
    );
}

export default Confirmation

const styles = StyleSheet.create({
    titleText: {
        color: '#000000',
        fontWeight: "bold",
        fontSize: 20,
        fontFamily: 'sans-serif-medium',
        textAlign: 'center',
        flex: 1,
        marginTop: 15
      },
    specialistText: {
        color: '#E4001D',
        fontWeight: "bold",
        fontSize: 38,
        fontFamily: 'sans-serif-medium',
        textAlign: 'center',
        flex: 2,
    },
    explanationText: {
        color: '#000000',
        fontSize: 16,
        fontFamily: 'sans-serif-medium',
        textAlign: 'center',
        flex: 1,
    },
    logo: {
        maxWidth: 52,
        maxHeight: 52,
        marginTop: 0,
        marginBottom: 0
    },
});
