import React from 'react';
import { Text, View } from 'react-native';

import { Header } from './src/components/common/index'
import LogInForm from './src/components/LogInForm'

import firebase from 'firebase'

export default class App extends React.Component {

  componentWillMount(){
    firebase.initializeApp({
      apiKey: "AIzaSyBPLaAGZBkpwiwJRxBqDdMNbLMsTKujlRQ",
      authDomain: "auth-1ec3c.firebaseapp.com",
      databaseURL: "https://auth-1ec3c.firebaseio.com",
      projectId: "auth-1ec3c",
      storageBucket: "auth-1ec3c.appspot.com",
      messagingSenderId: "450076585261"
    })
  }

  render() {
    return (
      <View >
        <Header headerText='Authentication'/>
        <LogInForm />
      </View>
    );
  }
}

