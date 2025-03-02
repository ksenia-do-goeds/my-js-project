//if...else version
let a = Math.floor(Math.random() * 100);

let result;

if (a > 10) {
  result = a;
} else {
  result = a * 2;
}

if (result > 5) {
  result = (2 * a) + 1;
} else {
  if (a < 3) {
    result = 1;
  } else {
    result = 2 * (a - 2);
  }
  if (result > 4) {
    result = 5;
  } else {
    if (a % 2 == 0) {
      result = 6;
    } else {
      result = 7;
    }
  }
}

console.log("if...else Result:", result); 

//switch version
let a = Math.floor(Math.random() * 100);
let result;

let initialResult = (a > 10) ? a : a * 2;

if (initialResult > 5) {
  result = (2 * a) + 1;
} else {
  switch (true) {
    case (a < 3):
      result = 1;
      break;
    case (2 * (a - 2) > 4):
      result = 5;
      break;
    case (a % 2 === 0):
      result = 6;
      break;
    default:
      result = 7;
      break;
  }
}

console.log("switch Result:", result);
