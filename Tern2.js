//if...else version
function manyChecksIfElse() {
  let a = Math.floor(Math.random() * 20) + 1;
  console.log(`a = ${a}`); //Corrected template literal
  let result = "";

  if (a > 10) {
    result += "a is bigger than 10";
  } else {
    result += "a is less than or equal to 10 ";
    if (a === 5) {
      result += "an example of a special case";
    }
  }

  if (a === 15) {
    result += "but a is not 15";
  }

  if (a > 5) {
    result += " and a is greater than 5";
  } else {
    result += " and a is less than or equal to 5 ";
  }

  if (a % 2) {
    result += " and a is odd";
  } else {
    result += " and a is even";
  }

  console.log(result);
}

manyChecksIfElse();

//switch version

function manyChecksSwitchPartial() {
    let a = Math.floor(Math.random() * 20) + 1;
    console.log(`a = ${a}`);
    let result = "";

    if (a > 10) {
        result += "a is bigger than 10";
    } else {
        result += "a is less than or equal to 10 ";
        switch (a) {
            case 5:
                result += "an example of a special case";
                break;
        }
    }

    if (a === 15) {
        result += "but a is not 15";
    }

    if (a > 5) {
        result += " and a is greater than 5";
    } else {
        result += " and a is less than or equal to 5 ";
    }

    switch (a % 2) {
        case 1:
            result += " and a is odd";
            break;
        case 0:
            result += " and a is even";
            break;
    }

    console.log(result);
}


manyChecksSwitchPartial();
