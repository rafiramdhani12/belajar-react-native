/* eslint-disable prettier/prettier */
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {Component} from 'react';
import Props from './Props';

export default class StateProps extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sekolah: 'Ambatukam Academy',
    };
  }

  gantiState() {
    this.setState({
      sekolah: 'AMBATUSCHOOL',
    });
  }

  render() {
    const {sekolah} = this.state;
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Belajar State Props</Text>
        <View style={styles.line} />

        {/* isi */}
        <View style={styles.content}>
          <Text style={styles.text}>ini adalah state : {sekolah}</Text>

          <Props sekolah={sekolah} />

          <TouchableOpacity
            style={styles.Button}
            onPress={() => this.gantiState()}>
            <Text style={{textAlign: 'center'}}>Ganti State</Text>
          </TouchableOpacity>
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
});
