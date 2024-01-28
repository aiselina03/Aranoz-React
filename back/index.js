import express from 'express'
import cors from 'cors'
import mongoose, { Schema } from 'mongoose'
const app = express()
app.use(express.json())
app.use(cors())
const port = 9000

const aranozSchema = new Schema({
  name: String, 
  image: String,
  price: Number,

});

const AranozModel = mongoose.model('AranozModel', aranozSchema);

app.get('/', async(req, res) => {
  try {
    const products= await AranozModel.find({})
      res.json(products)
  } catch (error) {
    res.send(error.message)
  }

})
app.get('/:id', async(req, res) => {
  try {
    const {id}=req.params
    const products= await AranozModel.findById(id)
      res.json(products)
  } catch (error) {
    res.send(error.message)
  }
})

app.post('/', async(req, res) => {
  try {
    const {name, price , image}=req.body
    const newProducts= new AranozModel({name, price , image})
    await newProducts.save()
      res.json(newProducts)
  } catch (error) {
    res.send(error.message)
  }
})

app.put('/:id',async (req, res) => {
  try {
    const {id}=req.params
    const {name, price , image}=req.body
    const products= await AranozModel.findByIdAndUpdate(id,{name, price , image})
      res.json(products)
  } catch (error) {
    res.send(error.message)
  }
})

app.delete('/:id',async (req, res) => {
  try {
    let {id}=req.params
    const products= await AranozModel.findByIdAndDelete(id)
      res.json(products)
  } catch (error) {
    res.send(error.message)
  }
})

mongoose.connect('mongodb+srv://Aysel:tahirova2003@mycluster.dg6gk9i.mongodb.net/')
  .then(() => console.log('Connected!'))
  .catch(() => console.log('NOT Connected!'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})