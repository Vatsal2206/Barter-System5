import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  ToastAndroid,
} from 'react-native';
import db from '../config';
import * as firebase from 'firebase';

export default class ExchangeScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      userId: firebase.auth().currentUser.email,
      item: '',
      reason: '',
      wantedItemName: '',
    };
  }
  showToast = (msg) => {
    ToastAndroid.show(msg, ToastAndroid.SHORT);
  };

  createUniqueId() {
    return Math.random().toString(36).substring(7);
  }
  addRequest = (item, reasonR, wantedItemName) => {
    var userId = this.state.userId;
    var randomRequestId = this.createUniqueId();

    console.log(userId);
    console.log(randomRequestId);
    db.collection('items')
      .add({
        user_id: userId,
        item_name: item,
        wanted_item_name: wantedItemName,
        reason_to_request: reasonR,
        request_id: randomRequestId,
      })
      .then(() => {
        this.showToast('Item Requested Successfully');
        this.setState({
          item: '',
          reason: '',
          wantedItemName: '',
        });
      })
      .catch(console.log('Overlap'));
  };
  render() {
    return (
      <KeyboardAvoidingView style={styles.keyboardAvoidingView}>
        <ScrollView>
          <View>
            <Text style={styles.header}>Exchange Items</Text>

            <TextInput
              style={styles.text_Input}
              placeholder={'Your Item'}
              onChangeText={(text) => {
                this.setState({
                  item: text,
                });
              }}
            />
            <TextInput
              style={styles.text_Input2}
              placeholder={'Item Which You Want'}
              onChangeText={(text) => {
                this.setState({
                  wantedItemName: text,
                });
              }}
            />
            <TextInput
              style={styles.text_Input_reason}
              placeholder={'Reason'}
              multiline={true}
              onChangeText={(text) => {
                this.setState({
                  reason: text,
                });
              }}
            />
            <TouchableOpacity
              style={styles.addButton}
              onPress={() =>
                this.addRequest(
                  this.state.item,
                  this.state.reason,
                  this.state.wantedItemName
                )
              }>
              <Text style={styles.buttonText}>Add Item</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

var styles = StyleSheet.create({
  keyboardAvoidingView: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    backgroundColor: '#F6F6F6',
  },

  header: {
    fontSize: 40,
    textAlign: 'center',
    marginTop: 20,
    color: '#ff426b',
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
  text_Input2: {
    borderLeftWidth: 5,
    fontSize: 18,
    borderTopWidth: 3,
    borderBottomWidth: 1,
    borderRightWidth: 4,
    paddingLeft: 10,
    borderStartColor: '#8c3ee6',
    borderEndColor: '#f07400',
    height: 50,
    marginTop: 20,
    width: 250,
    alignSelf: 'center',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  text_Input_reason: {
    borderLeftWidth: 5,
    fontSize: 18,
    borderTopWidth: 3,
    borderBottomWidth: 1,
    borderRightWidth: 4,
    paddingLeft: 10,
    borderStartColor: '#8c3ee6',
    borderEndColor: '#f07400',
    height: 150,
    marginTop: 30,
    width: 250,
    alignSelf: 'center',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  addButton: {
    backgroundColor: '#8c3ee6',
    height: 60,
    width: 210,
    borderRadius: 40,
    marginTop: 70,
    alignSelf: 'center',
    shadowColor: '#8f6da3',
    shadowOffset: { width: -2, height: 8 },
    shadowRadius: 10,
    elevation: 16,
    paddingTop: 10,
  },
  buttonText: {
    fontSize: 25,
    color: 'white',
    textAlign: 'center',
  },
});
