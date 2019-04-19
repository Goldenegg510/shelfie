module.exports={
  createProduct: (req, res) => {
    let {product_name, image_url, price} = req.body
    const db = req.app.get('db')
    db.create_product([product_name, image_url, price]).then(response => {
      res.status(200).send(response)
    })
  }
}

