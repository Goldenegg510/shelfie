import React, { Component } from 'react';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard'
import Header from './Components/Header/Header'
import Product from './Components/Product/Product'
import Form from './Components/Form/Form'
import axios from 'axios'

class App extends Component {
  constructor(){
    super()
    this.state={
      products:[]
    }
  }
  componentDidMount(){
axios.get('/api/inventory',).then(res => {
  this.setState({
    products: res.data
  })
}).catch(err => {
  console.log('we have an error', err)
})
}
createProduct = (newProduct) => {
axios.post('/api/inventory', newProduct).then(res => {
  this.setState({
    products: res.data
  })
})
}
  render() {
    return (
      <div className="App">
      <Header/>
      <Dashboard/>
      <Product/>
      <Form createProduct={this.createProduct}/>
      </div>
    );
  }
}

export default App;
