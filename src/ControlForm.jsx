/* eslint-disable prettier/prettier */
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import React, {Component} from 'react';
import Props from './Props';

export default class ContohForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nama: ' ',
      password: ' ',
      Islogin: false,
    };
  }

  login = () => {
    if (!this.state.username && !this.state.password) {
      Alert.alert('Error', 'Username dan Password Harus diisi');
    } else {
      this.setState({
        Islogin: true,
      });
    }
  };

  render() {
    const {username, password, Islogin} = this.state;
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Belajar Membuat Form</Text>
        <View style={styles.line} />

        {/* isi */}
        <View style={styles.content}>
          <View>
            <Text style={styles.text}>nama : </Text>
            <TextInput
              style={styles.textInput}
              placeholder="Masukan nama"
              value={username}
              onChangeText={username => this.setState({username})}
            />
          </View>
          <View style={styles.wrapperInput}>
            <Text style={styles.text}>password : </Text>
            <TextInput
              style={styles.textInput}
              placeholder="Masukan password"
              value={password}
              onChangeText={password => this.setState({password})}
              secureTextEntry={true}
            />
          </View>
          <TouchableOpacity style={styles.Button} onPress={() => this.login()}>
            <Text style={{textAlign: 'center', fontWeight: 'bold'}}>Login</Text>
          </TouchableOpacity>
          {Islogin && (
            <Text style={{marginTop: 20}}>
              selamat Berhasil Login : {username}
            </Text>
          )}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {padding: 30},
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  line: {
    borderBottomWidth: 1,
    marginTop: 20,
  },
  content: {
    marginTop: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  flexRow: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 20,
  },
  flexCol: {
    flexDirection: 'column',
    gap: 10,
    marginTop: 20,
  },
  Redsquare: {
    width: 50,
    height: 50,
    backgroundColor: 'red',
  },
  Greensquare: {
    width: 50,
    height: 50,
    backgroundColor: 'green',
  },
  Bluesquare: {
    width: 50,
    height: 50,
    backgroundColor: 'blue',
  },
  Button: {
    backgroundColor: 'skyblue',
    padding: 10,
    borderRadius: 10,

    marginTop: 10,
  },
  textInput: {
    borderWidth: 1,
    padding: 10,
    borderBlockColor: 'gray',
    borderRadius: 5,
    height: 40,
  },
  wrapperInput: {
    marginTop: 20,
  },
});
