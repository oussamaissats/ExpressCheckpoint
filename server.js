const express = require ('express');        // import express (after npm install express)
const app = express ();                     // create new express app and save it as "app"
const port = 8080;                           // server configuration

const d = new Date( Date.now());

function condition(req,res,next) {
    const day =d.getDay();
    const hour =d.getHours();
    if ((day >=2 && day<=6 )  && (hour >=9 && hour<=17 )  === false ) {
    console.log ("close");
    
    res.sendFile(__dirname + '/project/close.html');        //response file html

}  

else {
next();
}
}  
app.use(condition); 
app.use(express.static('project'))

// make the server listen to requests
    app.listen(8080,(err)=>{
        err? console.log(err) : console.log(`Server running at:http://localhost:${port}/`)
    });