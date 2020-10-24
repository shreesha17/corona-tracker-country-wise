const { response } = require('express');
const express=require('express')
const NovelCovid = require('novelcovid');
const exhbs = require('express-handlebars');
NovelCovid.settings({
    baseUrl: 'https://disease.sh' 
})
//const track = new NovelCovid();

//NovelCovid.countries()
//NovelCovid.all()
//.then((response) => console.log(response))
const app = express()

app.set('view engine' , 'hbs');
 
app.engine( 'hbs' ,exhbs({
    extname: 'hbs' ,
    defaultView: 'home' ,
    layoutsDir: __dirname + '/views/layouts/'
}));
app.get('/countries',(req,res) =>{
 NovelCovid.countries()
.then((response) => {
    res.render('home',{info:response})
})
   
})

app.listen(4000,()=>{
    console.log("App is listening on port 4000")
})