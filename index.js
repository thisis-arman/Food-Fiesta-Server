const express =require('express')
const app =express()
const port = process.env.PORT || 5000;


app.get('/',(req, res)=>{
    res.send('Food Fiesta Server')

})

app.listen(port,()=>{
    console.log('server running on port ',port)
})