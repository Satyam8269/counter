import { DECREMENT, INCREMENT } from "./action";


const initState = {count:0}

export const reducer = (state=initState,action)=>{
    switch(action.type){
        case INCREMENT:{
            return{
                ...state,
                count:state.count+action.payload
            }
        }

        case DECREMENT:{
            return{
                ...state,
                count:state.count-action.payload
            }
        }

        default:{
            return state
        }
    }
}