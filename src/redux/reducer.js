import types from "./types";
let initial_state = {
    counter: 0,
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
export function counterReducer(state = initial_state, action) {
    console.log("data in reducer",action.payload)
    switch (action.type) {
        case types.INCREMENT: {
            let data = action.payload
            return { ...state, myData: data + 1 }
        }
        case types.DECREMENT: {
            let data = action.payload
            return { ...state, myData: data - 1 }
        }

        default:
            return state
    }
}