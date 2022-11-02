
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import Routes from './src/Navigation/routes';
import { storedData } from './src/redux/actions';



import store from './src/redux/store';



const App = () => {

  const getData = async ()=>{
    try {
      const jsonValue = await AsyncStorage.getItem("My_Data")
      console.log(JSON.parse(jsonValue),"data recieved........")
      let value = JSON.parse(jsonValue)

      if(!!value){
        store.dispatch(storedData(value))
      }
      
    } catch (error) {
      console.log(error)
    }
  }
  
  useEffect(()=>{
    getData()
  },[])

  return (
    <SafeAreaView style={styles.container}>
     <Provider store={store}>
     <Routes/>
     {/* <BottomTabs/> */}
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
