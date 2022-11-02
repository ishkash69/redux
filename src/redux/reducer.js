import types from "./types";
import AsyncStorage from '@react-native-async-storage/async-storage';
let initial_state = {
    counter: 1,
    myData: [
        {
            _id: 1,
            title: "Mobile",
            desc: 'description description',
            quantity: 0
        },
        {
            _id: 2,
            title: "Laptop",
            desc: 'description description',
            quantity: 0
        },
        {
            _id: 3,
            title: "car",
            desc: 'description description',
            quantity: 0
        }
    ]
}

  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem('My_Data', jsonValue)

      
      console.log(jsonValue,'jsonValue>>>>>>>>>>>>')
    } catch (e) {
      // saving error
    }
  }
 

export function counterReducer(state = initial_state, action) {
    // console.log("data in reducer",action.payload)
    switch (action.type) {
        case types.INCREMENT: {
            let data = action.payload.quantity
            let mainArr = [...state.myData]
            // console.log("this is main array ",mainArr)
            let index = mainArr.findIndex(itemId=> itemId._id== action.payload._id)
            // console.log("this is item index",index)
            if(index>=0){
                mainArr[index].quantity= data+1
            }
            storeData(mainArr)
            return { ...state, myData: mainArr, counter:1}
        }
        case types.DECREMENT: {
            let data = action.payload.quantity
            let mainArr = [...state.myData]
            // console.log("this is main array ",mainArr)
            let index = mainArr.findIndex(itemId=> itemId._id== action.payload._id)
            // console.log("this is item index",index)
            if(index>=0){
                mainArr[index].quantity= data-1
            }
            storeData(mainArr)
            return { ...state, myData: mainArr}
        }
        case types.STORED_DATA:{
            let data = action.payload
            console.log(data,"data in reducer")
            return {...state,myData:data}
        }

        default:
            return state
    }
}