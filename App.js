import React from 'react';
import { Text, View } from 'react-native';
import { Header } from './src/components/common/index'


export default class App extends React.Component {
  render() {
    return (
      <View >
        <Header headerText='Authentication'/>
      </View>
    );
  }
}

