
//event is nothing but a action 


//ways to handle events

//1)inline event handlers(using event attributes in HTML)


// function change(){
//     document.body.style.background='black'
// }


////2nd method using event handlers in javascript

const btn=document.getElementById('btn')
btn.onclick=function(){
       console.log("ponnana pavanm")
}


//3rd method using addEventListener()

// document.getElementById('btn').addEventListener('click',function(){
//         document.body.style.background='red'
// })

//addEventListenser will take two parameters one is action should be perfrom second one call back function 


// let sp=document.getElementById('sp')

// sp.addEventListener('focus',function(e){
//    console.log(e)
//     sp.style.background='red'
// })


// let sp=document.getElementById('sp');

// let a=""
// sp.addEventListener('input', function(e) {
//     a=e.target.value 
// });//this is onChange property

// const btn=document.getElementById('btn')
// btn.addEventListener('click',function(){
//       console.log(a)
// })//this event belongs to ocClick property



//for onChange we have input,oninput 

function handleChange() {
    console.log("ponnana pavan");
}