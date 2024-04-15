// const b= new Buffer.from('abcxyz');
// console.log(b);
// b.write('Other');

// console.log(b.toString());




// //Asunc await
// const fs=require("fs/promises");
// // fs.writeFileSync('./logs.txt', '10th April 2024: Day 7');
// console.log('Start');

// const func = async()=>{
//     const data =await fs.readFile('logs.txt', {encoding: 'utf-8'});
//      console.log(data);
// }
// func();
// console.log('end')




// //Pomises
// const fs=require("fs/promises");
// // fs.writeFileSync('./logs.txt', '10th April 2024: Day 7');
// console.log('Start');

//     const data = fs.readFile('logs.txt', {encoding: 'utf-8'});
//      data.then((data)=>
//      {console.log(data)});

// console.log('end')




//Callback
// const fs=require('fs');
// console.log("start")
// fs.readFile("./logs.txt", {encoding: "utf-8"}, (err, data)=>{
//     if(err){
//         console.log(err.message);
//     }else{
//         console.log(data);
//     }
// })
// console.log("end");




//http module

// const fs=require('fs');
//     let d;
//     fs.readFile("./index.html", {encoding: "utf-8"}, (err, data)=>{
//             if(err){
//                 console.log(err.message);
//             }else{
//                 d=data.toString();
//                 // console.log(data.toString());
//             }
//         });
let data;
try {
     fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(json => {
        data=json;
        // console.log(data);
        console.log("data fetched")})
} catch (error) {
    console.log(error);
}
            

const http = require('http');
const app = http.createServer((req, res)=>{
    const htmlTemplate=`
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Product Card</h1>
</body>
</html>
    `

    const cardTemplate= `
    <div class='product-card' style="border:solid red 2px; background-color:aqua; padding :20px">
        <img src= __link__ > 
        <h4>__TITle__</h4>
        <p> __INFO__</p>
        </div>
    `
    




    // const card1= cardTemplate.replace('__TITle__', 'iphone 12 pro max');
    // const card2= cardTemplate.replace('__TITle__', 'google 12 pro max');

    
        // console.log(data.products[0].title);
        console.log(data.products[0].images[0]);
        let page='';
        let card="";
        for(let i=0;i<10;i++){
            card+= cardTemplate.replace('__link__', data.products[i].images[0]);
             card= cardTemplate.replace('__TITle__', data.products[i].title);
             card= card.replace('__INFO__', data.products[i].description);
            }
            
            page+= htmlTemplate.replace("Product Card", card);
    res.end(page);
    res.writeHead(200, {
        'content-type': 'text/html'
    })
    console.log('recieved');
});

app.listen(8080, ()=>{
    console.log('*************Server Started******************')
});