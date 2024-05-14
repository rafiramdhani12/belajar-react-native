/* eslint-disable prettier/prettier */
import {Text, View} from 'react-native';
import React, {Component} from 'react';

export default class Props extends Component {
  render() {
    return (
      <View>
        <Text>Props : {this.props.sekolah} </Text>
      </View>
    );
  }
}
