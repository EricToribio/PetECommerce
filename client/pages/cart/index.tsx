import { FormEvent, useState } from "react"
import { checkout } from "../../components/stripe/checkout"



export default ()=>{
  const cart = [
    {Name : "Dog Food", price: 45.56 ,priceId : "price_1LsxmDAH4EU9xHXdTeuvOQtm", quantity : 3},
    {Name :"Cat Food",  price : 35.89, priceId : "price_1LsziaAH4EU9xHXdxEGYwuES",quantity : 1}
  ]

  const handleBuy = (e :FormEvent<HTMLFormElement> ) => {
    let lineItems= [{}]
    for (let i = 0; i < cart.length; i++) {
      lineItems[i]= {
        price: cart[i].priceId,
        quantity: cart[i].quantity
      }
    }
    checkout(lineItems)
  }

  

  return (
    <div>
      <ul>
        {cart.map((items, i)=>{
          return(
            <li>{items.Name} {items.price}</li>
          )
        })}
      </ul>
      <button onClick={handleBuy}>BUY!</button>
    </div>
  )
}
