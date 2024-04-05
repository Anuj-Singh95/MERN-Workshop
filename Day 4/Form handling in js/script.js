// const x= document.querySelectorAll('input')

// let arr=[];
// for(let i=0;i<x.length;i++){
//     x[i].addEventListener('keyup', (event)=>{
//         // console.log(event.target.value);
//         let x=event.target.value;
//         arr[i]=event.target.value;
//         // console.log("hiii")
//     })
// }

// function submitForm(event){
//     event.preventDefault();
//     console.log(arr);
//     console.log(event);
// }



function submitForm(event){
    const res= {
        hobbies:[]
    }
    let arr=[];
    console.dir(event.target);
    event.preventDefault();
    const t=event.target;
    for(let i=0;i<t.length;i++){
        if(t[i].type!='submit'){
            if(t[i].type=="checkbox"){
                res.hobbies.push(t[i].checked);
            }else{
                res[t[i].name]=t[i].value;
            }
        }
    }
    console.log(res);
}



