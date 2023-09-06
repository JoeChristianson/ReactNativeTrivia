/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Game from './components/Game';
import AppProvider from './context/AppContext';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): JSX.Element {

  // return<View><Text>Hello WOrld!</Text></View>

  return (
    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic">
          <AppProvider>
          <Game></Game>
          </AppProvider>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  }
});

export default App;
