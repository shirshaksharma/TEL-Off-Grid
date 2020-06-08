import React from 'react';
import {SafeAreaView, Text, StatusBar} from 'react-native';

export const App = () => (
  <>
    <StatusBar barStyle="dark-content" />
    <SafeAreaView
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
      }}>
      <Text>TEL Off-Grid</Text>
    </SafeAreaView>
  </>
);
