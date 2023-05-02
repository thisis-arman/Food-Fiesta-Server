const express =require('express')
const app =express()
const port = process.env.PORT || 5000;
const chefs =require('./data/chefs.json')
const recipes =require('./data/Recipes.json')


app.get('/',(req, res)=>{
    res.send('Food Fiesta Server')

})
app.get('/chefs',(req,res)=>{
    res.send(chefs)
})

app.listen(port,()=>{
    console.log('server running on port ',port)
})