import React from 'react';
import { View } from 'react-native';
import { NavigationContainer, TabActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Routes, { SecondStackScreen } from './routes';
import { SecondScreen } from '../screens';
const Tab = createBottomTabNavigator();

const BottomTabs = ()=>{
    return(
        <NavigationContainer>
            <Tab.Navigator defaultScreenOptions={{headerShown: false}}>
                <Tab.Screen name='Home' component={Routes}/>
                <Tab.Screen name='SecondScreen' component={SecondScreen}/>

            </Tab.Navigator>
        </NavigationContainer>
    )
}
export default BottomTabs