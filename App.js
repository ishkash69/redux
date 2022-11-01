
import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import Routes from './src/Navigation/routes';
import store from './src/redux/store';


const App = () => {
  return (
    <SafeAreaView style={styles.container}>
     <Provider store={store}>
     <Routes/>
     </Provider>
        
     
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
