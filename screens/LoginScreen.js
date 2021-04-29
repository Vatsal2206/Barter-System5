import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  ToastAndroid,
  Modal,
  ScrollView,
} from 'react-native';
//flex
import db from '../config';
import * as firebase from 'firebase';

export default class LoginScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      emailId: '',
      password: '',
    };
  }
  showToast = (msg) => {
    ToastAndroid.show(msg, ToastAndroid.SHORT);
  };

  userLogin = (emailId, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(emailId, password)
      .then(() => {
        this.showToast('Successfully Logged In');
        this.props.navigation.navigate('s2');
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        this.showToast(errorMessage);
      });
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.keyboardAvoidingView}>
        <ScrollView>
          <View>
            <View>
              <Image
                source={require('../assets/handshake.png')}
                style={{ width: 150, height: 150, alignSelf: 'center' }}
              />
              <Text style={styles.header}>BARTER</Text>

              <Text style={styles.instrution}>
                Please Sign Up or Login to Continue
              </Text>
            </View>
            <View>
              <TextInput
                placeholder="Email Id"
                style={styles.text_Input}
                keyboardType="email-address"
                onChangeText={(text) => {
                  this.setState({
                    emailId: text,
                  });
                }}
              />
              <TextInput
                placeholder="Password"
                style={styles.text_Input}
                secureTextEntry
                onChangeText={(text) => {
                  this.setState({
                    password: text,
                  });
                }}
              />
            </View>

            <View>
              <TouchableOpacity
                style={styles.loginButton}
                onPress={() => {
                  this.userLogin(this.state.emailId, this.state.password);
                }}>
                <Text style={styles.buttonText}>LOG IN</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.signUpButton}
                onPress={() => this.props.navigation.navigate('s3')}>
                <Text style={styles.buttonText}>SIGN UP</Text>
              </TouchableOpacity>
              <Text style={styles.instrution2}>
                Dont have an account yet? Sign Up to create an account!
              </Text>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

var styles = StyleSheet.create({
  header: {
    fontSize: 50,
    color: '#f07400',
    textAlign: 'center',
    textShadowColor: '#8f745b',
    textShadowOffset: { width: -5, height: 5 },
    textShadowRadius: 10,
  },
  instrution: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
    color: '#8c3ee6',
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    textDecorationColor: 'red',
  },
  instrution2: {
    fontSize: 15,
    textAlign: 'center',
    marginTop: 10,
    color: '#f07400',
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    textDecorationColor: 'violet',
  },

  text_Input: {
    borderLeftWidth: 5,
    fontSize: 18,
    borderTopWidth: 3,
    borderBottomWidth: 1,
    borderRightWidth: 4,
    paddingLeft: 10,
    borderStartColor: '#8c3ee6',
    borderEndColor: '#f07400',
    height: 50,
    marginTop: 50,
    width: 250,
    alignSelf: 'center',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  text_Input_address: {
    borderLeftWidth: 5,
    fontSize: 18,
    borderTopWidth: 3,
    borderBottomWidth: 1,
    borderRightWidth: 4,
    paddingLeft: 10,
    borderStartColor: '#8c3ee6',
    borderEndColor: '#f07400',
    height: 150,
    marginTop: 50,
    width: 250,
    alignSelf: 'center',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  signUpButton: {
    backgroundColor: '#f07400',
    height: 40,
    width: 210,
    borderRadius: 50,
    marginTop: 20,
    alignSelf: 'center',

    shadowColor: '#8f745b',
    shadowOffset: { width: -2, height: 8 },
    shadowRadius: 10,
    elevation: 16,
  },
  loginButton: {
    backgroundColor: '#8c3ee6',
    height: 40,
    width: 210,
    borderRadius: 40,
    marginTop: 50,
    alignSelf: 'center',

    shadowColor: '#8f6da3',
    shadowOffset: { width: -2, height: 8 },
    shadowRadius: 10,
    elevation: 16,
  },
  buttonText: {
    fontSize: 25,
    color: 'white',
    textAlign: 'center',
  },

  modalTitle: {
    fontSize: 40,
    textAlign: 'center',
    color: '#a30894',
    fontWeight: 'bold',
  },
  registerButton: {
    backgroundColor: '#f07400',
    height: 40,
    width: 110,
    borderRadius: 50,
    marginTop: 50,
    alignSelf: 'center',
    flex: 1,
    shadowColor: '#8f745b',
    shadowOffset: { width: -2, height: 8 },
    shadowRadius: 10,
    elevation: 16,
  },
  cancelButton: {
    backgroundColor: '#8c3ee6',
    height: 40,
    width: 110,
    borderRadius: 40,
    marginTop: 50,
    alignSelf: 'center',
    marginBottom: 20,
    flex: 1,
    shadowColor: '#8f6da3',
    shadowOffset: { width: -2, height: 8 },
    shadowRadius: 10,
    elevation: 16,
  },
  keyboardAvoidingView: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    backgroundColor: '#F6F6F6',
  },
});
