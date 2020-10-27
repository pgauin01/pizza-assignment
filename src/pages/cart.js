import React , {useState,useEffect}from 'react';
import { useDispatch, useSelector} from 'react-redux'
import {removeCart  ,qtyChnage,updateCart} from '../store/cartActions'
import NumericInput from 'react-numeric-input';


const Cart = (props)=> {
const dispatch =  useDispatch()

const cart  = useSelector(state => state.cart.cart)
const totalprice  = useSelector(state => state.cart.total)
const qty   = useSelector(state => state.cart.quantity)

const [toppings , setIsToppings] = useState(cart.toppings * 1)
const [crust , setIsCrust] = useState(cart.Crusts * 1)
const [pizza , setIsPizza] = useState(cart.Pizza * 1)
const [total , setTotal] = useState(totalprice)
const [quantity , setQuantity] = useState(qty)


useEffect(() => {
setTotal(totalprice)

},[totalprice])

useEffect(() => {
setTotal(toppings + crust +pizza)

},[toppings,crust,pizza])


const inputChangeHandler = (e) => {
    setQuantity(e)
    dispatch(qtyChnage(e))
}


const handleChange = (e) => {
    if(e.target.name === 'top'){
    setIsToppings((e.target.value) * 1) 
    dispatch(updateCart(e.target.value * 1 , crust ,pizza , total , quantity))
        }
    if(e.target.name === 'crust'){
    setIsCrust((e.target.value) * 1)
    dispatch(updateCart(toppings, e.target.value * 1  ,pizza , total , quantity))

        }
    if(e.target.name === "pizza"){
    setIsPizza((e.target.value) * 1)
    dispatch(updateCart(toppings, crust, e.target.value * 1, total , quantity))

        }
    }

const removeCartHandler = () => {
dispatch(removeCart())
}    

if(cart.length === 0){
    return(
        <div className="pizzaHome">
            <h2>No Items found in cart</h2>
        </div>
    )
}
    return(
        <div className="pizzaHome">
            <img src="../pizza.png" className="form__img" alt="pizza" />

            <div className="form__group">
               <label htmlFor="">Pizza</label>
           <select name="pizza" value={pizza} onChange={handleChange}>
            <option selected value={20}>PAN base ₹20 </option>
            <option value={30}>Classic ₹30 </option>
            </select>
           </div>

           <div className="form__group">
               <label htmlFor="">Toppings</label>
           <select name="top"  value={toppings} onChange={handleChange}>
            <option selected value={20}>Corn ₹20 </option>
            <option  value={30}>Capsicum ₹30 </option>
            <option value={50}>Paneer ₹50 </option>
            </select>
           </div>

           <div className="form__group">
               <label htmlFor="">Crusts</label>
           <select name='crust' value={crust} onChange={handleChange}>
            <option selected value={70}>Normal ₹70  </option>
            <option value={80}> Hand-tossed ₹80 </option>
            <option  value={100}>Cheese burst ₹100 </option>
            </select>
           </div>


          <div className="form__group">
          <span>QTY:</span><NumericInput className="form__group alignSelf" min={1} max={100} value={quantity} onChange={inputChangeHandler}/>
          
              <h2>Total</h2>
                <h2>₹ {totalprice}</h2>
          <button className="btn" onClick={removeCartHandler}>Remove from cart</button>

          </div>
        </div>
    )
}

export default Cart;