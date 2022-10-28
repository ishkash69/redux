
import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button, SafeAreaView, FlatList } from 'react-native';
import NavigationStrings from '../../constant/NavigationStrings';
import { increment } from '../../redux/actions';
import store from '../../redux/store';
import styles from './home.style';
const Home = ({ navigation, route }) => {
    const [flatItem, setFlatItem] = useState(store.getState().myData)
    console.log(flatItem, 'djflhsdfjkhasfklhds')


    useEffect(() => {
        const unsubscribe = store.subscribe(() => {
            let data = store.getState().myData
            setFlatItem(data)

        })
        return () => {
            unsubscribe()
        }
    }, [route?.params])
    const onInc = () => {
        store.dispatch(increment(flatItem.quantity))
    }

    const renderItem = ({ item, index }) => {
        return (
            <View style={styles.flatStyle}>
                <View>
                    <Text>{item?.title}</Text>
                    <Text>{item?.desc}</Text>
                </View>
                {true ? <View style={styles.cart}>
                    <TouchableOpacity
                    // onPress={onDec}
                    >
                        <Text style={styles.txtStyle}>-</Text>
                    </TouchableOpacity>
                    <Text style={styles.txtStyle}>{item.quantity}</Text>
                    <TouchableOpacity
                    onPress={onInc}
                    >
                        <Text style={styles.txtStyle}>+</Text>
                    </TouchableOpacity>
                </View> :
                    <TouchableOpacity
                        style={styles.addBtnStyle}

                    >
                        <Text style={styles.txtStyle}>Add</Text>
                    </TouchableOpacity>
                }
            </View>
        )

    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ margin: 16 }}>
                <FlatList
                    data={flatItem}
                    renderItem={renderItem}
                    ItemSeparatorComponent={() => <View style={{ marginBottom: 16 }} />}
                />
            </View>
        </SafeAreaView>
    );
};





export default Home;
