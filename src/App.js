import React, { Component } from 'react';
import './App.css';
import CartHeader from './components/CartHeader';
import CartItems from './components/CartItems';
import CartFooter from './components/CartFooter';
import AddItem from './components/AddItem';

class App extends Component {
  state = {
    products: [
      { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 },
      { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 },
      { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 },
      { id: 43, name: 'Small Aluminum Keyboard', priceInCents: 2500 },
      { id: 44, name: 'Practical Copper Plate', priceInCents: 1000 },
      { id: 45, name: 'Awesome Bronze Pants', priceInCents: 399 },
      { id: 46, name: 'Intelligent Leather Clock', priceInCents: 2999 },
      { id: 47, name: 'Ergonomic Bronze Lamp', priceInCents: 40000 },
      { id: 48, name: 'Awesome Leather Shoes', priceInCents: 3990 },
    ],
    cartItemsList: [
      { id: 1, product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 }, quantity: 1 },
      { id: 2, product: { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 }, quantity: 2 },
      { id: 3, product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 }, quantity: 1 },
    ],
    cartTotal: 2897
  }

  addItemSubmit = async (item) => {
    if (item.quantity <= 0) { return }
    let product = this.state.products.filter(product => product.id === parseInt(item.product_id))
    if (!product[0]) { return }

    let obj = {
      id: this.state.cartItemsList.length + 1,
      product: product[0],
      quantity: parseInt(item.quantity)
    }
    let price = obj.product.priceInCents * obj.quantity
    console.log('P: ' + price);

    this.setState((prevState) => ({
      cartItemsList: [...prevState.cartItemsList, obj],
      cartTotal: [parseInt(this.state.cartTotal) + parseInt(price)]
    }))

  }

  render() {
    return (
      <div className="App">
        <CartHeader />
        <CartItems cartItemsList={this.state.cartItemsList} cartTotal={this.state.cartTotal} />
        <AddItem products={this.state.products} addItemSubmit={this.addItemSubmit} />
        <CartFooter copyright='2016' />

      </div>
    );
  }
}

export default App;
