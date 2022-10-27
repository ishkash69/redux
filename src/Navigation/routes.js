
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as Screens from '../screens'
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavigationStrings from '../constant/NavigationStrings';
const Stack = createNativeStackNavigator();

const Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName= {NavigationStrings.HOME}
            screenOptions={{ headerShown: false }}>
                <Stack.Screen name= {NavigationStrings.HOME} component={Screens.Home}/>
                <Stack.Screen name= {NavigationStrings.SECOND_SCREEN} component={Screens.SecondScreen}/>
            </Stack.Navigator>            
        </NavigationContainer>
    );
};



export default Routes;
