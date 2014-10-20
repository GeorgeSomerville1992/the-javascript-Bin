// usetill things toremember in javascript. 

//  Parasitic Combination Inheritance
function inheritPrototype(childObject,parentObject) {
  var copyOfParent = Object.create(parentObject.prototype);
  copyOfParent.constructor = childObject;
  childObject.prototype = copyOfParent;

}