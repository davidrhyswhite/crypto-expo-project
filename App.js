// The randombytes library requires Node's Buffer to be available.
global.Buffer = require('buffer').Buffer;
import { polyfillWebCrypto } from 'expo-standard-web-crypto';
polyfillWebCrypto();

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

/*
1. Start the application with: expo start
2. Wait for the error message:
      Error: Secure random number generation is not supported by this browser.
      Use Chrome, Firefox or Internet Explorer 11
3. Comment out lines: 22 and 25
4. Save the file and wait for a relead
5. Uncomment lines: 22 and 25
6. Save the file and wait for a relead
7. The app will run again this time with the crypto library polyfilled for mobile and the bytes logged to the console.
*/

import random from 'randombytes';

export default function App() {
  console.log('random(32) :>> ', random(32));
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
