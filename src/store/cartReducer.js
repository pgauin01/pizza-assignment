import {ADD_CART ,REMOVE_CART,UPDATE_AMOUNT,CHANGE_QTY , UPDATE_CART} from './cartActions'


const initialState = {
    cart:[],
    total:0,
    quantity:1,
}

const reducer = (state = initialState, action) =>{
    switch(action.type){
     case ADD_CART:
         return{
             ...state,
             cart:action.payload,
             total:action.total,
         }
         case CHANGE_QTY:
             const proAmount = state.cart.toppings + state.cart.Crusts + state.cart.Pizza
             const newTotal = (action.payload * proAmount) 
             return{
                 ...state,
                 quantity:action.payload,
                 total:newTotal,

             }
         case UPDATE_CART:
             const newAmount = action.payload.toppings + action.payload.Crusts + action.payload.Pizza
             const updatedTotal = action.qty * newAmount
            return{
                cart:action.payload,
                total:updatedTotal,
                quantity:action.qty
            }
         case UPDATE_AMOUNT:
             return{
                 ...state,
                 total:action.payload
             }
         case REMOVE_CART:
             return {
                 cart:[],
                 total:0,
                 quantity:1
             }
         default:
            return state
        }
    }

export default reducer;