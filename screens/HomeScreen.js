import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  ToastAndroid,
} from 'react-native';
import { ListItem } from 'react-native-elements';
import * as firebase from 'firebase';
import db from '../config';
//book
export default class HomeScreen extends Component {
  constructor() {
    super();
    this.state = {
      requestedItemList: [],
    };
    this.requestRef = null;
  }
  showToast = (msg) => {
    ToastAndroid.show(msg, ToastAndroid.SHORT);
  };

  getRequestedItemList = () => {
    this.requestRef = db.collection('items').onSnapshot((snapshot) => {
      var requestedItem_List = [];
      snapshot.forEach((doc) => {
        requestedItem_List.push(doc.data());
      });
      this.setState({
        requestedItemList: requestedItem_List,
      });
    });
  };

  componentDidMount() {
    this.getRequestedItemList();
  }

  componentWillUnmount() {
    this.requestRef();
  }

  keyExtractor = (item, index) => {
    index.toString();
  };

  renderItem = ({ item, i }) => {
    return (
      <ListItem
        key={i}
        title={item.item_name}
        subtitle={item.reason_to_request}
        titleStyle={{ color: 'black', fontWeight: 'bold' }}
        rightElement={
          <TouchableOpacity style={styles2.button}>
            <Text>Exchange</Text>
          </TouchableOpacity>
        }
        bottomDivider
      />
    );
  };

  render() {
    console.log(this.state.requestedItemList);
    return (
      <KeyboardAvoidingView style={styles2.keyboardAvoidingView}>
        <ScrollView>
          <View>
            <View>
              <Text
                style={{
                  fontSize: 40,
                  textAlign: 'center',
                  marginTop: 20,
                  color: '#ff426b',
                }}>
                HOME
              </Text>
              <View>
                {this.state.requestedItemList.length === 0 ? (
                  <View style={styles2.subContainer}>
                    <Text style={{ fontSize: 20 }}>
                      List Of All Requested Items
                    </Text>
                  </View>
                ) : (
                  <View style={styles2.subContainer}>
                    <FlatList
                      keyExtractor={this.keyExtractor}
                      data={this.state.requestedItemList}
                      renderItem={this.renderItem}
                    />
                  </View>
                )}
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

const styles2 = StyleSheet.create({
  subContainer: {
    fontSize: 20,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
  button: {
    width: 100,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff5722',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
  },

  keyboardAvoidingView: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    backgroundColor: '#F6F6F6',
  },
  viewButtonS: {
    flex: 1,
    width: 70,
    height: 30,
    backgroundColor: '#ff5722',
  },
});
