import {Text, StyleSheet, View, ScrollView} from 'react-native';
import React, {Component} from 'react';

export default class DesainTampilan extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Belajar desain tampilan</Text>
        <View style={styles.line} />
        {/* isi */}
        <View style={styles.content}>
          <Text style={styles.text}>Flex direction Row (vertical)</Text>
          {/* ini kesamping */}
          <View style={styles.flexRow}>
            <View style={styles.Redsquare} />
            <View style={styles.Greensquare} />
            <View style={styles.Bluesquare} />
          </View>
        </View>
        <View style={styles.content}>
          <Text style={styles.text}>Flex direction column (horizontal)</Text>
          {/* ini kesamping */}
          <View style={styles.flexCol}>
            {/* secara default sudah horizontal */}
            <View style={styles.Redsquare} />
            <View style={styles.Greensquare} />
            <View style={styles.Bluesquare} />
          </View>
        </View>
        <View style={styles.content}>
          <Text style={styles.text}>Justify content</Text>
          {/* ini kesamping */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              gap: 10,
              marginTop: 10,
            }}>
            {/* secara default sudah horizontal */}
            <View style={styles.Redsquare} />
            <View style={styles.Greensquare} />
            <View style={styles.Bluesquare} />
          </View>
        </View>
        <View style={styles.content}>
          <Text style={styles.text}>align Items</Text>
          {/* ini kesamping */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              gap: 10,
              marginTop: 10,
              alignItems: 'center',
            }}>
            {/* secara default sudah horizontal */}
            <View style={styles.Redsquare} />
            <View style={{width: 50, height: 20, backgroundColor: 'green'}} />
            <View style={styles.Bluesquare} />
          </View>
          <View></View>
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
});
