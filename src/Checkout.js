import React from 'react'
import "./Checkout.css"
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal'

function Checkout() {
  return (
    <div className="checkout">
        <div className="checkout__left">
            <img src="" alt="" className="checkout__add" />
            <div>
                <h2 className='checkout__title'>
                    Your Shopping basket
                </h2>
                <CheckoutProduct/>
                <CheckoutProduct/>
                <CheckoutProduct/>
                <CheckoutProduct/>
            </div>
        </div>

        <div className="checkout__right">

            <Subtotal />


        </div>
    </div>
  )
}

export default Checkout