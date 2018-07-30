import React, { Component } from 'react';
import CartHeader from './header.js';
import CartFooter from './footer.js';
import CartItems from './cartItems.js'
import CartItem from './cartItem.js'
import AddItem from './addItem.js'
import Total from './total.js'

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      products: [],
      cart : [],
      maxID: 0,
      total: 0
    }
  }

  async componentDidMount(){
    const productsResponse = await fetch('http://localhost:8082/api/products')
    const productsJSON = await productsResponse.json()
    const itemsResponse = await fetch('http://localhost:8082/api/items')
    const itemsJSON = await itemsResponse.json()
    let ids = itemsJSON.map(item => item.id)
    let maxID = ids.reduce((x,y) => (x > y) ? x : y)
    this.setState({products: productsJSON, maxID: maxID})
  }

  onSubmit = (e)=> {
    e.preventDefault()

    let products = this.state.products
    let name = this.state.name
    let quantity = this.state.quantity
    let cart = this.state.cart
    let maxID = this.state.maxID
    let newNew = {}

    products.map(oneProduct => {
      if(oneProduct.name === name){
        newNew.product_id = oneProduct.id
        newNew.quantity = quantity
      }
    })

    if(cart.length === 0){
      newNew.id = 1
    }else{newNew.id = maxID + 1}

    let filteredCart = cart.filter(item => item.product.id === newNew.product.id)

    if(filteredCart.length === 1){
      filteredCart[0].quantity = filteredCart[0].quantity + newNew.quantity
    }
    else{cart.push(newNew)}

    if(cart.length === 0){
      cart.push(newNew)
    }

    this.setState({cart: cart})
    e.target.reset()
  }

  renderCart = () => {
    let products = this.state.products
    let cart = this.state.cart
    let item = {}
    let newCart = []
    for(let i = 0; i < cart.length; i++){
      for(let j = 0; j < products.length; j++){
        if(cart[i].product_id === products[j].id){
           item = {
            name: products[j].name,
            price: products[j].priceInCents * cart[i].quantity,
            quantity: cart[i].quantity
          }
        }
      }
      newCart.push(item)
    }
    return newCart
  }

  onChange = (e)=> {
    e.preventDefault()
    this.setState({[e.target.name]: e.target.value})
  }

  render() {
    return (
      <div>
        <CartHeader />
        <CartItems items={this.renderCart}/>
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
