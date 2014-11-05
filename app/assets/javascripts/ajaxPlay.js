// spliting the ajax stuff up inside a hash..
var confirmation = {
  init: function(){
    $('.formControll').on('click', 'button', this.showMeTheMoney)
    $('.formControll').on('click', '#stuff', this.showMeSomethingElse)
    console.log("poooo")
  },
  showMeTheMoney: function(e){
    e.preventDefault()
    console.log("poop")

  },
  showMeSomethingElse: function(e){
    e.preventDefault()
    console.log("oooo")
  }



}

// use functions for mulitple confirmations per page..

function Vacation(destination){
  this.details = function(){
    console.log(destination)
  }

}

// the confirmation functions
// using the jquery el

function Confirmation(el){
  this.el = el;// seeting el, which is the passing in to this function
  var confirmation = this // so we'll pass down this to load confirmation function....
  this.loadConfirmation = function(){

      something: function(){console.log("something")},
      context: confirmation
    } // helpers 
  this.doSomethingElse = function(something){
    something.preventDefault();
    console.log(this)
    console.log(confirmation)


  } // methods
  this.el.on('click', 'button', this.loadConfirmation)
  this.el.on('click', 'button', this.doSomethingElse)
  // so when el gets clicked on do the fnctions
} // this bit gets confusing because we can end up referencing the wrong this...
// jQuery can reference the wrong this...
// to set it two the right confirmation simply declare variable and set it to this....

$(function(){
  var paris = new Confirmation($('paris'))
  var rome = new Confirmation($('Rome'))
  paris.details()
  rome.details()
  // simple ajax request...
confirmation.init()
$.ajax({
      url: "/ideas",
      type: "POST",
      data: {idea: data}, // that hash is part of the variable!!!!!!!!
      dataType: "json",
      success: function(){
        console.log({idea: data})
        getRetails();
        alert("youthing has been saved")
        // togglePages("#all_posts");
      } 
    }) // follow raisl routes take has but we need it in 

})

// orgainsing ajax with javascript... 
