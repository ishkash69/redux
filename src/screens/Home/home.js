
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect } from 'react';
import { FlatList, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';
import NavigationStrings from '../../constant/NavigationStrings';
import { decrement, increment } from '../../redux/actions';
import store from '../../redux/store';
import styles from './home.style';
const Home = ({ navigation, route }) => {
  
    
    const myData = useSelector(data=> data.myData)

    // console.log(myData,"myDatatatattas")
    let itemlength = 0

    for(let i=0;i<myData.length;i++){
        if(myData[i].quantity>0){
            itemlength=itemlength+1
        }
    }

    const onInc = (item)=>{
        store.dispatch(increment(item.quantity,item._id))
    }
    const onDec = (item) =>{
        store.dispatch(decrement(item.quantity,item._id))
    }
   
     

    



    const renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity onPress={()=>{
                navigation.navigate(NavigationStrings.SECOND_SCREEN,{title:item.title,desc:item.desc,_id:item._id})
            }}>
            <View style={styles.flatStyle}>
                <View>
                    <Text>{item?.title}</Text>
                    <Text>{item?.desc}</Text>
                </View>
                {item.quantity>=1 ? <View style={styles.cart}>
                    <TouchableOpacity
                    onPress={()=>{
                        onDec(item)
                       
                  
                    }}                    >
                        <Text style={styles.txtStyle}>-</Text>
                    </TouchableOpacity>
                    <Text style={styles.txtStyle}>{item.quantity}</Text>
                    <TouchableOpacity
                    onPress={()=>{
                        onInc(item)
                       
                    }}
                    >
                        <Text style={styles.txtStyle}>+</Text>
                    </TouchableOpacity>
                </View> :
                    <TouchableOpacity
                        style={styles.addBtnStyle}
                        onPress={()=>onInc(item)}
                    >
                        <Text style={styles.txtStyle}>Add</Text>
                    </TouchableOpacity>
                }
            </View>
            </TouchableOpacity>
        )

    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ margin: 16 }}>
                <FlatList
                    data={myData}
                    renderItem={renderItem}
                    ItemSeparatorComponent={() => <View style={{ marginBottom: 16 }} />}
                />
            </View>

            <Text >counter: {itemlength}</Text>
        </SafeAreaView>
    );
};





export default Home;
