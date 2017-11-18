<<<<<<< HEAD


function forLoop (array) {

  for (let i = 1; i < 26; i++) {

    if (i === 1) {
      array[i-1] = `"I am ${i} strange loop"`;
=======
const array = [];

function forLoop (array) {
  for (let i = 1; i < 26; i++) {

    if (i === 1) {
      array[i-1] = `"I am a strange loop"`;
>>>>>>> 2a1ed210fef568bfe49d00e37a706d76375aac94
    }

    else if ((1 < i) && (i < 26)) {
      array[i-1] = `"I am ${i} stange loops."`;
    }
  } //for loop
  return array;
} //function

//forLoop(array);

//console.log(array);


function whileLoop(n) {

  while (n > 0) {
    console.log(n);
    n--;
    if (n === 0) {
      return 'done';
    }
  }
}

function doWhileLoop(array) {
  do {
    array.shift(1)
  } while (array.length > 0)
  return array;
}
