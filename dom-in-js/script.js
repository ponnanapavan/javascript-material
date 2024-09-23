//the window object represents a open window in our broswer.It is broswer object but not a javascript object
//it is global object which have lot of propertirs and methods

console.log(window)

//what is DOM (Document object model)

//when a web page is loaded the broswer creates a DOM of a page

//in this we have window in window object we have document object in that have  our html code .Basically DOM looks like  tree structure


//this dom is used to  acess the html code  and change the html at run time i.e(dynamically change the page )


//1)selecting with Id (based up on id we will access the particular element)
   //document.getElementById("myid")

   console.log(document.getElementById('heading'));

//2)slecting with class

let headings=document.getElementsByClassName("heading1")
console.log(headings)
//document.getElementsByClassName returns HTML COLLECTIONS  ,which is not a array but collection of DOM elements


//3)accessing elements with the help of tag

let para=document.getElementsByTagName("p");

console.log(para)


//------------------------------------------------------------------------>

//query selector  will return NodeList it will act has array we also loop it also

let para1=document.querySelector('p')// it selectes the first element of dom
//if we multipes matches but if we want one at that time we want use querySelector
console.log(para1)

console.log(para1.tagName)

let paraall=document.querySelectorAll('p')
console.log(paraall)


paraall.forEach((item)=>console.log(item))


//querySelector fo class we have to mention .  for id we have to mention #
let headingClass=document.querySelectorAll('.heading1')

console.log(headingClass)

headingClass.forEach((item)=>console.log(item))

console.log(document.body.firstChild)

//properties of dom
/*

1)tagName:return tagName  of elements nodes

2)innerText:returns the text content of the element and all its children

3) innerHTML: return the plain text or HTML contents in the element

4)textContext:returns textual content even for hidden elements

*/

//innnerText
let div=document.querySelector('div')
console.log(div.innerText)
console.log(div.innerHTML)  //innerHTML print html code of particaular element  

//by using innerText we will write text in a particular element  
//by using innerHTML we will write HTML code in particular element

//---------------------------------------------------------------------------------------------------->


// i am directly writing content in div 
// let span=document.querySelector('.span ');

// console.log('span',span)

// span.innerHTML='<i>pavnanana</i>'

// console.log(span.innerHTML)

//----------------------------------------------------------------------------------------------------------------------->

//here in the div i have span tag in that span tag i want to write some content


let spanInner=document.querySelector('.span span')

spanInner.innerHTML='<h1>Ponnana Pavan from cse</h1>'

let span=document.querySelector('.span')
console.log(span.innerHTML)


//textContent

var heading=document.querySelector('#heading')
console.log(heading.innerText)//null because that element visiablity is none

console.log(heading.textContent)//if we will use textContent then we see the element


//pratice questions by apna

//1)Create h2 heading element with text -"Hello javascript". Append from Apna college students to this text using Js

const h2=document.querySelector('h2')
let data=h2.innerText;

h2.innerText=data+"Apna College"

console.log(h2.innerText)


//----------------------------------------------------------------------------------------------------------->

//Attributes
//1)getAttribute(attr)//to get the attribute value

let divAttribute=document.querySelector('.div');

console.log(divAttribute.getAttribute('name')) // it will give content of name attribute which is present in div tag

   //2)setAttribute(attr,value)

divAttribute.setAttribute('name','csePonnanaPavan');

console.log(div.getAttribute('name'))
//------------------------------------------------------------------------------------------------------------->
//node.style

const divStyle=document.querySelector('.div');

div.style.backgroundColor="green"
div.style.fontSize="30px"

//------------------------------------------------------------------------------------------------>
//insert elements
  //1)node.append(el)//adds at the end of node
  //2)node.prepend(el)//add starting of the node
  //3)node.before(el)//add just before of the element
  //4)node.after(el)//add 

  //create element is used to creat element

  let newBtn=document.createElement("button")
  newBtn.innerText='click me!'

  console.log(newBtn)
     
  //to add the element to screen we have some methods

  const buttonAdd=document.querySelector('.div')
  div.append(newBtn) //it will add at the end of element

  div.prepend(newBtn)//add starting of the element

  div.before(newBtn)//just before the element
 
  div.after(newBtn);//just after the button 


  const newHeading=document.createElement("h1");

  newHeading.innerHTML='<i>Ponnana pavan  create </i>'

 document.querySelector('body').prepend(newHeading) //h1 is add starting of body

 
 //remove element

 const removePara=document.querySelector('p');
 removePara.remove();//single element remove


 const paraRemove=document.querySelectorAll('p');
 paraRemove.forEach((item)=>{
       item.remove();
 })//removing multiple items using forEach loop

 //------------------------------------------------------------------------------>
 //Add a class or remove a class for element

 const classdiv=document.querySelector('h3')
 classdiv.classList.add('ponnana')//add class name to it 
 classdiv.classList.remove('ponnana')//remove class name to it 