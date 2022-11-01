import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import NavigationStrings from '../../constants/NavigationStrings';
import { decrement, increment } from '../../redux/action';
import store from '../../redux/store';

const SecondScreen = ({navigation,route}) => {
    const [data, setData]=useState()

    const fetchData = ()=>{
        let homeScreenData = route?.params
        if(!!homeScreenData){
            setData(homeScreenData)
        }
        console.log(homeScreenData, "homeScreenData")
    }

    useEffect(() => {
        fetchData();
        const unsubscribe = store.subscribe(() => {
            let value = store.getState().num 
            setData(value)
        })
        return () => {
            unsubscribe()
        }
    }, [route?.params])
    const onInc = () => {
        store.dispatch(increment(data))
    }
    const onDec = () => {
        if (data>0){
            store.dispatch(decrement(data))
        }
        else {
           return
        }
    }
    return (
        <View style={styles.container}>
            <View style={styles.cart}>
            <TouchableOpacity
                onPress={onDec}
                >
                <Text style={styles.txtStyle}>-</Text>
            </TouchableOpacity>
            <Text style={styles.txtStyle}>{data}</Text>
            <TouchableOpacity
                onPress={onInc}
                >
                  <Text style={styles.txtStyle}>+</Text>
            </TouchableOpacity>
            
            </View>
            <Button 
            title='click'
            onPress={()=>{
                navigation.navigate(NavigationStrings.HOME,data)
            }}
            >

            </Button>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',


    },
    cart:{
        flexDirection:"row",
        width:88,
        height:32,
        backgroundColor:'#008B8B',
        justifyContent:"center",
        alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal:6,
        borderRadius:4

        
    },
    txtStyle:{
        color:'white'
    }
});
export default SecondScreen;

