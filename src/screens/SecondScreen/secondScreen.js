
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';
import { decrement, increment } from '../../redux/actions';
import store from '../../redux/store';
import styles from './secondScreen.style';
const SecondScreen = ({ navigation, route }) => {
    const itemData = route.params
    // console.log("data data datadta", itemData)

    const myData = useSelector(state => state.myData)
    // console.log(myData, "___+_+_+_+_+")

    let index = myData.findIndex(itemId => itemId._id == itemData._id)
    // console.log(index, "indexindexindexindex")
    let newVal = myData[index]

    const onInc = (data) => {

        store.dispatch(increment(data.quantity, data._id))

    }
    const onDec = (data) => {
        if (data.quantity > 0) {
            store.dispatch(decrement(data.quantity, data._id))
        } else {
            return
        }

    }
    return (
        <View style={styles.container}>
            <View style={styles.flatStyle}>
                <View>
                    <Text>{newVal.title}</Text>
                    <Text>{newVal.desc}</Text>
                </View>
                <View style={styles.cart}>
                    <TouchableOpacity
                        onPress={() => {
                            onDec(newVal)
                        }}>
                        <Text style={styles.txtStyle}>-</Text>
                    </TouchableOpacity>
                    <Text style={styles.txtStyle}>{newVal.quantity}</Text>
                    <TouchableOpacity
                        onPress={() => {
                            onInc(newVal)
                        }}
                    >
                        <Text style={styles.txtStyle}>+</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};


export default SecondScreen;
