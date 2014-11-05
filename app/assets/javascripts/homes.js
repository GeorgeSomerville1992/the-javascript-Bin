// usetill things toremember in javascript. 

//  Parasitic Combination Inheritance
function inheritPrototype(childObject,parentObject) {
  var copyOfParent = Object.create(parentObject.prototype);
  copyOfParent.constructor = childObject;
  childObject.prototype = copyOfParent;

}

// some fomr vliadation text 
function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == null || x == "") {
        alert("First name must be filled out");
        return false;
    }
}

// when add two values togther we need to pass inti 

// var answer = parseInt(num1) + parseInt(num2) 
// reverse array 
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.reverse();

// making new objects via constructor

var myObject = function(name, postcode, age){

  this.name = name
  this.postcode = postcode
  this.age = age 


}

// hoisting
function test() {
   console.log(a); // 
   console.log(foo()); // both variabels and functions are HOISTED to the top of the function
              // but when vairables are hosited, they dont actually retain any values... 
              // so a at teh top when printed does actually exist but its value is undefined...
   var a = 1;
   function foo() {
      return 2;
   }
}
// using this..

var fullname = 'John Doe';
var obj = {
   fullname: 'Colin Ihrig',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() { // this references the CURRENT OBJECT 
         return this.fullname + "pooo";
      } // this is like setting the current object...
   }  // in javascript this depends on how the function is invoked => not designed
};  // so when test is assinge the getfullname method, contenxt is referred two window, 
    // this is because test is implicitly set as a property of the global object... 
// this will return stuff, we dont need to set new objects via constructions 
// we can console.log stuff through hashes

// javscript this refers to the OWNER of the function we are executing.
// spp the owner of the dosomething function, its owner will be this page!
  // or rather the window object!
// but for example an onclick property is owned by the html element it belongs to. 

// this ownership is like the result of javascripts object oriintated approach. 
function doSomethingTwo(obj){
    this.style.color = "red"

}

function doSomething(){

  this.style.color = '#cc0000';
  // this would fail because the do something function does not have a colour
}


// copying...

// so if we want to use this to its full extent, we have to take care that the function that uses it is "owned"
  // by the correct HTML element => we have to copy the function to out onclick property...


// So if the event handler is executed this refers to the HTML element and its color is changed.
// so now each time this function is called, this refers to the html element that is currently handling the evetn 
//   the html element owns a copy of do something..

// to make this work we need to use refering...

// we can do a combination 

// call and apply...
  // with apply we are calling a function with a given this value + arguments provided as an ARRAY.
  fun.apply(thisArg[, argsArray])
    // first arg is the value of THIS for the call to fun.
//.call is calling a function with a given this value and arguments provided individually 
// example of using call
  function Food(name, price) {
    Product.call(this, name, price);
    this.category = 'food';
  }

Food.prototype = Object.create(Product.prototype);s

// example usage of apply... 
function MyConstructor() {
  for (var nProp = 0; nProp < arguments.length; nProp++) {
    this['property' + nProp] = arguments[nProp];
  }
}

var myArray = [4, 'Hello world!', false];
var myInstance = MyConstructor.construct(myArray);

alert(myInstance.property1);                // alerts 'Hello world!'
alert(myInstance instanceof MyConstructor); // alerts 'true'
alert(myInstance.constructor);              // alerts 'MyConstructor'


$(function(){
  george = new myObject("george somerville", "sl58hz", 22)

    console.log("hi my name is " + george.name)

  

  // native methods , these are like built in methods

  // console.log('hello'.repeatify(3));

  var muitply = 5*5
  // console.log(muitply.repeatify(3)) 
  // test() 
  // this will return undefeind, we need make a new object using the constructor, so like make a copy...
  console.log(obj.prop.getFullname());
  
  var test = obj.prop.getFullname;
 
  console.log(test());
  // $("p").onclick = doSomething()

  

  // myElement.onclick = doSomething
    // this is refering,above does not contain a copy, it simply points to it

  //touch$("h1").on("click", doSomething())

})