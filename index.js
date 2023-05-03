const express =require('express')
const app =express()
const cors = require('cors')
const port = process.env.PORT || 5000;
const chefs =require('./data/chefs.json')
const recipes =require('./data/Recipes.json')
const testimonials=require('./data/Testimonials.json')

app.use(cors())

app.get('/',(req, res)=>{
    res.send('Food Fiesta Server')

})
app.get('/chefs',(req,res)=>{
    res.send(chefs)
})
app.get('/recipes',(req,res)=>{
    res.send(recipes)
   
})


app.get('/testimonials',(req,res)=>{
    res.send(testimonials)
})

app.get('/recipes/:id',(req,res)=>{
    const id = req.params.id;
    console.log(id)
    const selectedRecipe = recipes.find(recipe =>recipe.id == id)
    res.send(selectedRecipe)
})

app.listen(port,()=>{
    console.log('server running on port ',port)
})