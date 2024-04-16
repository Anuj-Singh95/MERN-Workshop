const fs=require('fs');
const http = require('http');
const path = require('path');
const url  =  require('url');
const data = fs.readFileSync('./data.json', 'utf-8');
const dataObj = JSON.parse(data);
// console.log(dataObj);

let page = fs.readFileSync('./index.html', 'utf-8');

const cardTemplate = `
<div class='product-card'>
    <img src="$link$">
    <h3>$TITLE$</h3>
    <h3>$DESCRIPTION$</h3>
    <a href="$product_link$">more info</a>
</div>
`;

const app = http.createServer((req, res)=>{
    const {pathname} = url.parse(req.url);
    // console.log(pathname);
    let card = '';
    for(let i=0;i<dataObj.products.length;i++){
        card+=cardTemplate.replace('$link$', dataObj.products[i].images[0]);
        card=card.replace('$TITLE$', dataObj.products[i].title);
        card=card.replace('$DESCRIPTION$', dataObj.products[i].description);
        card=card.replace('$product_link$', `/product?id=${i}`);
    }


    page = page.replace('__data__', card);
    if(pathname=='/home'){
        res.end(page);
    }
    else if(pathname=='/search'){
        const route = url.parse(req.url);
        let search=route.query.slice(4, route.query.length);
        // console.log(search);
        let pg = fs.readFileSync('./index.html', 'utf-8');
        let card = '';
        for(let i=0;i<dataObj.products.length;i++){
            let s=dataObj.products[i].title.toLowerCase();
            if( s.includes(search.toLowerCase())){
                card+=cardTemplate.replace('$link$', dataObj.products[i].images[0]);
                card=card.replace('$TITLE$', dataObj.products[i].title);
                card=card.replace('$DESCRIPTION$', dataObj.products[i].description);
                card=card.replace('$product_link$', `/product?id=${i}`);
            }
        }
        pg = pg.replace('__data__', card);

        res.end(pg);

    }
    else if(pathname=='/product'){
        const route =url.parse(req.url);
        let id=route.query.slice(3, route.query.length);
        console.log(id);
        const cardTemplate = `
<div class='product-card'>
    <img src="${dataObj.products[id].images[0]}">
    <h3>${dataObj.products[id].title}</h3>
    <h3>${dataObj.products[id].description}</h3>
</div>
`;
page = page.replace('__data__', cardTemplate);
        res.end(cardTemplate);
    }else{
        res.end('404 Page not found');
    }
});


app.listen(4000, (err)=>{
    if(err){
        console.log(err.message);
    }else
    console.log("server is running");
})

