import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.yellowView}>
        <Text>Yellow View Here</Text>
      </View>
      <View style={styles.blueview}>
        <Text>Blue VIew Here</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#fff',
    //alignItems: 'center',
    justifyContent: 'center',
  },
  yellowView: {
    flex: 1,
    backgroundColor:"yellow"
  },
  blueview: {
    flex: 1,
    backgroundColor:"blue"
  },
});
