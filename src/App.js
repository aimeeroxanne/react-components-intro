import React, { Component } from 'react';
import CartHeader from './header.js';
import CartFooter from './footer.js';
import CartItems from './items.js'
import CartItem from './item.js'
import AddItem from './addItem.js'
import Total from './total.js'

class App extends Component {

  state = { products: [
    { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 },
    { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 },
    { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 },
    { id: 43, name: 'Small Aluminum Keyboard', priceInCents: 2500 },
    { id: 44, name: 'Practical Copper Plate', priceInCents: 1000 },
    { id: 45, name: 'Awesome Bronze Pants', priceInCents: 399 },
    { id: 46, name: 'Intelligent Leather Clock', priceInCents: 2999 },
    { id: 47, name: 'Ergonomic Bronze Lamp', priceInCents: 40000 },
    { id: 48, name: 'Awesome Leather Shoes', priceInCents: 3990 }
  ],
   cart : [],
   total: 0
  }

  total = () => {
    let result = 0
    let cartStuff = this.state.cart
    for(let i = 0; i < cartStuff.length; i++){
      result += cartStuff[i].product.priceInCents
    }
    this.state.total = result / 100
  }

  onSubmit = (e)=> {
    e.preventDefault()

    let products = this.state.products
    let cartStuff = this.state.cart

    let newItem = {
      product: {},
      quantity: parseInt(this.state.quantity)
    }

    for(let i = 0; i < products.length; i++){
      if(products[i].name === this.state.name){
        newItem.product = {
          id: products[i].id,
          name: products[i].name,
          priceInCents: products[i].priceInCents
        }
      }
    }

    if(cartStuff.length === 0){
      newItem.id = 1
      this.state.cart.push(newItem)
    }

    else {
      newItem.id = cartStuff[cartStuff.length - 1].id + 1

      for(let i = 0; i < cartStuff.length; i++){

        if(cartStuff[i].product.name === newItem.product.name){
          cartStuff[i].quantity = cartStuff[i].quantity + newItem.quantity
        }
        else {this.state.cart.push(newItem)}
      }
    }

    this.total()
    this.forceUpdate()
    e.target.reset()
    // console.log(this.state)
  }

  onChange = (e)=> {
    e.preventDefault()
    this.setState({[e.target.name]: e.target.value})
  }

  render() {
    return (
      <div>
        <CartHeader />
        <CartItems items={this.state.cart}/>
        <Total added={this.state.total}/>
        <AddItem type={this.state.products} onSubmit={this.onSubmit}
        onChange={this.onChange}
        />
        <CartFooter copyright="2018" />
      </div>
    );
  }
}

export default App;
