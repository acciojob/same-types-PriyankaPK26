function isSameType(value1, value2) {
  if(value1==value2)
	 return value1.constructor==value2.constructor;
}

// // do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));
