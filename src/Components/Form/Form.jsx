import React, {Component} from 'react'

export default class Form extends Component {
constructor(){
  super()
  this.state={
    image_url: '',
    product_name:'',
    price: 0
  }
}
handleChange = (e) => {
  let {name, value} = e.target
  this.setState({
    [name]: value
  })
}
handleAddClick = () => {
let newProduct = this.state
this.props.createProduct(newProduct)
}
  render(){
    return(
      <div>
        <input type='text' name='image_url' onChange={this.handleChange} />
        <input type='text' name='product_name' onChange={this.handleChange} />
        <input type='number' name='price' onChange={this.handleChange} />
        <button onClick={this.handleCancelClick} >Cancel</button>
        <button onClick={this.handleAddClick} >Add to Inventory</button>
      </div>
    )
  }
}