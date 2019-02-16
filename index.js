function distanceFromHqInBlocks (someValue) {
  //returns the number of blocks given a value
  let dist = someValue - 42
    if (dist < 0) {
      dist = dist * -1;
    }
  return dist
}

function distanceFromHqInFeet (someValue) {
  dist = distanceFromHqInBlocks(someValue);
  // calls distanceFromHqInBlocks from inside the distanceFromHqInFeet function, passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
  //the return value of distanceFromHqInBlocks can then be used to calculate feet
return dist * 264
}

function distanceTravelledInFeet(val1, val2) {


if (val1 > val2){
  dist = val1-val2;
}
   else {
    dist = val2-val1
  }
return dist*264
}

function calculatesFarePrice(val1, val2) {
dist = distanceTravelledInFeet(val1, val2);

let price = 0;

if (dist < 400) {
  price = 0
}
  else if (dist > 2500) {
price = 'cannot travel that far'
}
  else if (dist > 2000) {
price = 25
}
else {
  price = (dist - 400) * 0.02
}
return price
}
