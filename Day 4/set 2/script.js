// const parent=document.querySelector('div');
// const child=document.querySelector('p');
// parent.removeChild(child);


// document.querySelector('p').nextElementSibling.innerText="hello world"

// for(let i=0;i<10;i++)
// window.open();


// console.log(document.querySelector('#btn'));
function display(event){
    // event.target.style="position:relative; left:10px"
    if(event.target.style.left=='200px'){
        event.target.style.left="10px";
    }else
    event.target.style='position:relative; left:200px';
    console.log(event.target.style.left);
}
document.querySelector('#btn').addEventListener('mouseover', display);

