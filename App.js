/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import WebView from 'react-native-webview';

const App: () => Node = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <WebView
        source={{
          uri: 'https://gmas.digitalho.app',
        }}
        // scalesPageToFit={true}
        // cacheEnabled={true}
      />
    </SafeAreaView>
  );
};

export default App;
