// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(newDriver){
  drivers.push(newDriver)
}
function destructivelyPrependDriver(newDriver){
  drivers.unshift(newDriver)

}
function destructivelyRemoveLastDriver(){
  drivers.pop()

}

function destructivelyRemoveFirstDriver(){
  drivers.shift()

}

function appendDriver(newDriver){
  newArray = [...drivers, newDriver];
  return newArray
}

function prependDriver(newDriver) {
  newArray = [newDriver, ...drivers];
  return newArray;
}

function removeLastDriver(){
  newArray = drivers.slice(0, drivers.length-1)
  return newArray
}

function removeFirstDriver(){
  return drivers.slice(1)
}
