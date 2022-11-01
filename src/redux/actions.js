import  types  from './types'

export function increment(data,_id){
    return{
        type: types.INCREMENT,
        payload: {quantity: data,
            _id: _id
        }
    }
}
export function decrement(data,_id){
    return{
        type: types.DECREMENT,
        payload: {quantity: data,
            _id: _id
        }
    }
}