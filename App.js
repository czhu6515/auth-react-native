import React from 'react';
import { Text, View } from 'react-native';

import { Header, Button, Spinner } from './src/components/common/index'
import LogInForm from './src/components/LogInForm'

import firebase from 'firebase'

export default class App extends React.Component {
  state = {
    loggedIn: null
  }

  componentWillMount(){
    firebase.initializeApp({
      apiKey: 'apikeyhere',
      authDomain: 'authdomain',
      databaseURL: 'databaseurl',
      projectId: 'project',
      storageBucket: 'storagebucket',
      messagingSenderId: 'senderid'
    })

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true })
      } else {
        this.setState({ loggedIn: false })
      }
    })
  }

  renderContent(){
    switch (this.state.loggedIn){
      case true:
        return (
          <Button 
            onPress={() => firebase.auth().signOut()}
          >
            Log Out
          </Button>
        )
      case false:
        return <LogInForm />
      default:
        return <Spinner />
    }    
  }

  render() {
    return (
      <View >
        <Header headerText='Authentication'/>
        {this.renderContent()}
      </View>
    );
  }
}

