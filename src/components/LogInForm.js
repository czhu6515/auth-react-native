import React, {Component} from 'react'
import { Button, Card, CardSection, Input } from './common/index'

class LogInForm extends Component {
  state = {
    email: ''
  }


  render(){
    return(
      <Card>
        <CardSection>
          <Input 
            label='Email:'
            placeholder='your@email.com'
            value={this.state.email}
            onChangeText={(email) => this.setState({ email })}
          />
        </CardSection>
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
