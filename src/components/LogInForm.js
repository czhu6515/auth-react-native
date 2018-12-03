import React, {Component} from 'react'
import { Text } from 'react-native'
import firebase from 'firebase'
import { Button, Card, CardSection, Input, Spinner } from './common/index'

class LogInForm extends Component {
  state = {
    email: '',
    password: '',
    error: '',
    loading: false
  }

  onButtonPress(){
    const {email, password} = this.state
    
    this.setState({error: '', loading: true})
    
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch(this.onLoginFail.bind(this))
      })
  }

  onLoginSuccess(){
    this.setState({
      email: '',
      password: '',
      error: '',
      loading: false
    })
  }

  onLoginFail(){
    this.setState({
      loading: false,
      error: 'Authentication Failed'
    })
  }

  renderButton(){
    if (this.state.loading){
      return <Spinner size='small' />
    } 

    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Log In!
      </Button>
    )
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

        <CardSection>
          <Input 
            label='Password'
            placeholder='password'
            value={this.state.password}  
            onChangeText={(password) => this.setState({ password })}
            secureTextEntry={true}
          />
        </CardSection>

        <Text style={styles.errorTextStyle}>
          {this.state.error}
        </Text>

        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    )
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
}


export default LogInForm
