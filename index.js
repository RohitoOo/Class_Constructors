class Robots {
  constructor(name, color, sayHello) {
    this.name = name
    this.color = color
    this.sayHello = function(){
      console.log("Hi, I am " + this.name)
    }
  }
}
var robot1 = new Robots ()

robot1.name = "Rohito The Robot"
robot1.color = "White"

var robot2 = new Robots ()

robot2.name = "Ria The Robot"
robot2.color = "Brown"


boolean = true||false
class Person {
  constructor(name,personality,inSitting,sitDown,standUp, owns){

    this.name = name
    this.personality = personality
    this.sitDown = function(){
        return this.inSitting = true
    }
    this.standUp = function(){
        this.inSitting = false
    }
    this.owns = owns

  }
}

var arnold = new Person()

// arnold.standUp()
// arnold.inSitting  // false


// arnold.sitDown()
// arnold.inSitting  // true


arnold.owns = robot1 ;


var cardiB = new Person()

cardiB.owns = robot2 ;


arnold.owns.sayHello();

cardiB.owns.sayHello();
