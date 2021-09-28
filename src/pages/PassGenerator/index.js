import React, { Component } from 'react';
import { View, Text, TextInput, Modal, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Slider from '@react-native-community/slider';


export default class passGenerator  extends Component {
  constructor(props)
  {
    super(props);
    this.state={
      charSet:'abcdefghijklmnopqrstuvxwyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*',
      password:'',
      size: 5,
      modalVisible: false
    }
  }
  setPassword=(password)=>
  {
    this.setState({password: password});
  }
  setModalVisible = (visible) => 
  {
    this.setState({ modalVisible: visible });
  }
  generatePass=()=>
  {
    var pass = '';
    for(let i = 0, n = this.state.charSet.length; i < this.state.size; i++)
    {
       pass += this.state.charSet.charAt(Math.floor(Math.random() * n))
    } 
    this.setPassword(pass);  
    this.setModalVisible(true);
   }

 render(){
  return (
<View style={styles.container}>
      <Image
        source={require('../../assets/logo.png')}
        style={styles.logo}
      />      
      <View style={styles.area}>

        {/*<TextInput
        placeholder={'Tamanho da senha'}
        keyboardType={'numeric'}
        onChangeText={size=>this.setState({size})}  
        />*/}
        <Slider
        minimumValue={0}
        maximumValue={100}
        minimumTrackTintColor="#FFFF"
        maximumTrackTintColor="black"
        onValueChange={size=>this.setState({size})}
        /> 
      </View>
      <TouchableOpacity style={styles.button} onPress={this.generatePass}>
        <Text style={styles.buttonText}> GERAR SENHA </Text>
      </TouchableOpacity>

      <Modal
      animationType="slide"
      transparent={false}
      visible={this.state.modalVisible}
 style = {styles.area}      >
        <View style={styles.area}>
          <Text style={styles.password}>{this.state.password} </Text>  
        </View>
      </Modal>         
    </View>
   );
 }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "pink"
  },
  logo:{
    marginBottom: 60
  },
  title:{
    fontSize: 40,
    fontWeight: 'bold'
  },
  area:{
    marginTop: 15,
    marginBottom: 15,
    backgroundColor: 'orange',
    width: '80%'
  },
  button:{
     backgroundColor: "red",
     width: '80%',
     height: 50,
     justifyContent: 'center',
     alignItems: 'center',
     borderRadius: 7,
     marginBottom: 25,
    },
    buttonText:{
      fontSize: 20,
      color: "black",
      fontWeight: 'bold'
    },
    password:{
      padding: 10,
      justifyContent: 'center',
      fontSize: 20
    }
  });