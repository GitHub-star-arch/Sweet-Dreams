import React from 'react';
import {Text, View, StyleSheet, KeyboardAvoidingView, ToastAndroid, Image, TextInput, TouchableOpacity} from 'react-native';
import db from '../config.js';
import * as firebase from 'firebase';
export default class Main extends React.Component {

    constructor(){
        super();
        this.state={
            email:'',
            password:''
        }
    }

    login=async(email,password)=>{
        if (email&&password) {
            try{const response = await firebase.auth().signInWithEmailAndPassword(email,password)
                if (response) {
                    this.props.navigation.navigate('Login')
                }
            }
            catch(error){
                switch(error.code){
                    case 'auth/user-not-found':
                    alert("User doesn't exist!")
                    break;
                    case 'auth/invalid-email':
                    alert("Your email and password doesn't match!")
                    break;
                }
            }
        } else {
            alert("Enter email and password!")
        }
    }

    render(){
        return( 
            <KeyboardAvoidingView>
                <Text>
                    Tweet Dreams(Login Page)
                </Text>
                <TextInput placeholder="Jake@example.com" keyboardType='email-address' onChangeText={(text)=>{this.setState({email:text,})}}>
                </TextInput>
                <TextInput placeholder="Password" keyboardType='email-address' secureTextEntry={true} onChangeText={(text)=>{this.setState({password:text,})}}> 
                </TextInput>
                <TouchableOpacity style={{backgroundColor:"tomato", height:50, width:100}} onPress={()=>{this.login(this.state.email,this.state.password)}}>
                    <Text style={{alignItems:"center", fontSize:40}}>
                        Login
                    </Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        )
    }
}