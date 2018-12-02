import React, {Component} from 'react'
import { View } from 'react-native'
import { Button, Card, CardSection } from './common/index'

class LogInForm extends Component {
  render(){
    return(
      <Card>
        <CardSection></CardSection>
        <CardSection></CardSection>
        <CardSection>
          <Button>
            Log In!
          </Button>
        </CardSection>
      </Card>
    )
  }
}

export default LogInForm
