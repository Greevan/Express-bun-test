const express = require('express');

const port = 3000;
const app = express();

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post('/contact', (req, res) => {
    // res.send("hi")
    res.send(req.body);

    
    // res.render('index',{text: 'Kovaila irundhu'})
});
app.get('/',(req,res)=>{
    res.send('hello')
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
