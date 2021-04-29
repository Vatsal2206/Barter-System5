import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  ToastAndroid,
  ScrollView,
} from 'react-native';
import * as firebase from 'firebase';
import db from '../config';
export default class RegisterScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      emailId: '',
      password: '',
      firstName: '',
      lastName: '',
      address: '',
      contact: '',
    };
  }
  showToast = (msg) => {
    ToastAndroid.show(msg, ToastAndroid.SHORT);
  };
  userSignUp = (emailId, password) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(emailId, password)
      .then((response) => {
        db.collection('users').add({
          first_name: this.state.firstName,
          last_name: this.state.lastName,
          contact: this.state.contact,
          email_id: this.state.emailId,
          address: this.state.address,
        });
        this.props.navigation.navigate('s1');
        return this.showToast('User Added Successfully');
      })
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        this.showToast(errorMessage);
      });
  };

  render() {
    return (
      <ScrollView>
        <KeyboardAvoidingView style={styles.keyboardAvoidingView}>
          <View>
            <Text style={styles.modalTitle}>Registration</Text>
            <TextInput
              style={styles.text_Input}
              placeholder={'First Name'}
              maxLength={8}
              onChangeText={(text) => {
                this.setState({
                  firstName: text,
                });
              }}
            />
            <TextInput
              style={styles.text_Input}
              placeholder={'Last Name'}
              maxLength={8}
              onChangeText={(text) => {
                this.setState({
                  lastName: text,
                });
              }}
            />
            <TextInput
              style={styles.text_Input}
              placeholder={'Contact'}
              maxLength={10}
              keyboardType={'numeric'}
              onChangeText={(text) => {
                this.setState({
                  contact: text,
                });
              }}
            />
            <TextInput
              style={styles.text_Input_address}
              placeholder={'Address'}
              multiline={true}
              onChangeText={(text) => {
                this.setState({
                  address: text,
                });
              }}
            />
            <TextInput
              style={styles.text_Input}
              placeholder={'Email'}
              keyboardType={'email-address'}
              onChangeText={(text) => {
                this.setState({
                  emailId: text,
                });
              }}
            />
            <TextInput
              style={styles.text_Input}
              placeholder={'Password (min. 6 charachters)'}
              secureTextEntry={true}
              onChangeText={(text) => {
                this.setState({
                  password: text,
                });
              }}
            />

            <View>
              <TouchableOpacity
                style={styles.registerButton}
                onPress={() => {
                  this.props.navigation.navigate('s1');
                  this.userSignUp(this.state.emailId, this.state.password);
                }}>
                <Text style={styles.buttonText}>Register</Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={() => {
                  this.props.navigation.navigate('s1');
                }}>
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    );
  }
}

var styles = StyleSheet.create({
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
    width: 335,
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
    width: 335,
    alignSelf: 'center',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },

  buttonText: {
    fontSize: 25,
    color: 'white',
    textAlign: 'center',
  },

  modalTitle: {
    fontSize: 40,
    textAlign: 'center',
    marginTop: 20,
    color: '#ff426b',
  },
  registerButton: {
    backgroundColor: '#f07400',
    height: 40,
    width: 210,
    borderRadius: 50,
    marginTop: 50,
    alignSelf: 'center',
    shadowColor: '#8f745b',
    shadowOffset: { width: -2, height: 8 },
    shadowRadius: 10,
    elevation: 16,
  },
  cancelButton: {
    backgroundColor: '#8c3ee6',
    height: 40,
    width: 210,
    borderRadius: 40,
    marginTop: 50,
    alignSelf: 'center',
    marginBottom: 20,
    shadowColor: '#8f6da3',
    shadowOffset: { width: -2, height: 8 },
    shadowRadius: 10,
    elevation: 16,
  },
  keyboardAvoidingView: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    backgroundColor: '#F6F6F6',
  },
});
