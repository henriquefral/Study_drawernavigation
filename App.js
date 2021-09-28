import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { View, Text, TextInput, Modal, TouchableOpacity, StyleSheet, Image, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';


export default class WheaterAPI  extends Component {
 render(){
  return (
    <NavigationContainer>
      <StatusBar hidden={true}/>
      <Routes/>
    
    </NavigationContainer>

   );
 }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "pink"
  }
});