import CartModals from '../modals/cartModal'
export const ADD_CART = 'ADD_CART'
export const REMOVE_CART = 'REMOVE_CART'
export const CHANGE_QTY = 'CHANGE_QTY'
export const UPDATE_AMOUNT = 'UPDATE_AMOUNT'
export const UPDATE_CART = 'UPDATE_CART'



export const addToCart = (topping , crusts , pizza , total) => {
        const cartItem = new CartModals(topping , crusts , pizza)
       return {type: ADD_CART , payload:cartItem , total:total}
}

export const updateCart = (topping , crusts , pizza , total,qty) => {
         const cartItem = new CartModals(topping , crusts , pizza)
       return {type: UPDATE_CART , payload:cartItem , total:total , qty:qty}
}

export const removeCart = () => {
        return {type:REMOVE_CART}
}


export const updateAmount = (amount) => {
        return {type:UPDATE_AMOUNT , payload:amount}
}


export const qtyChnage = (qty) => {
        return {type:CHANGE_QTY , payload:qty }
}