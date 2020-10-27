import React , {useState , useEffect} from 'react';
import {useDispatch} from 'react-redux'
import {addToCart} from '../store/cartActions'
import "./home.css";

const Home = (props)=> {
const dispatch =  useDispatch()

const [toppings , setIsToppings] = useState(20)
const [crust , setIsCrust] = useState(70)
const [pizza , setIsPizza] = useState(20)
const [total , setTotal] = useState(0)


useEffect(() => {
setTotal(toppings + crust +pizza)
},[toppings,crust,pizza])




const handleChange = (e) => {
    if(e.target.name === 'top'){
    setIsToppings((e.target.value) * 1) 
        }
    if(e.target.name === 'crust'){
    setIsCrust((e.target.value) * 1)
        }
    if(e.target.name === "pizza"){
    setIsPizza((e.target.value) * 1)
        }
    }

    const addCartHandler= () => {
    dispatch(addToCart(toppings,crust,pizza , total))
    props.history.push('/cart')
    }
   
    return (
        <div className="pizzaHome">
            <h1 className="pizzaHeading">Build your pizza</h1>
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
              <h2>Total</h2>
                <h2>₹ {total}</h2>
          <button className="btn" onClick={addCartHandler}>Add To Cart</button>

          </div>
        </div>
    )
}

export default Home;