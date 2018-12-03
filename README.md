# Authentication with React Native and Google Firebase

<p align='center'>
  <img 
    src='https://raw.githubusercontent.com/czhu6515/auth-react-native/master/assets/Screenshot_20181203-130302.png'
    alt='screenshot'
    height=400
    width=230
  />
</p>

Simple mobile app developed using React Native, Expo, and Firebase. Users can sign up for the app, sign in, and sign out. If attempting to clone and explore, you must 
 * Sign up for a Firebase account with the link below 
 * Create a new Firebase project 
 * Find the 'Add Firebase to your web app' button
 * Copy object in config variable which should have the following structure
 ```javascript
      apiKey: 'apikeyhere',
      authDomain: 'authdomain',
      databaseURL: 'databaseurl',
      projectId: 'project',
      storageBucket: 'storagebucket',
      messagingSenderId: 'senderid'
 ```
 * Go to App.js in the root folder, and in the componentWillMount() function, copy your personal Firebase information




React Native: https://facebook.github.io/react-native/

Expo: https://expo.io/

Firebase: https://firebase.google.com/
