// // filter
// const nameOfFriends = ['Alex', 'Eli', 'David', 'Israel', 'Garik', 'Michael', 'Avi', 'Tom'];
// console.log(nameOfFriends.filter((name) => name.indexOf('A') === 0));

// //reduce
// const numberActions = [1, 0, -5, 4, 10, 222, -1000, 498];
// let sum = numberActions.reduce((currentSum, currentVal) => {
//   return currentSum + currentVal;
// },270);
// console.log(sum);

// //sort on string
// const items = ['bull', 'bill', 'tea', 'coffee', 'keyboard', 'table'];
// const sortedItem = items.sort();
// console.log(sortedItem);

// //sort on numbers
// const numA = [1, 0, -5, 4, 10, 222, -1000, 498];
// const sortNumItems = numA.sort((a, b) => a - b);
// console.log(sortNumItems);


// //reverse
// const items = ['bull', 'bill', 'tea', 'coffee', 'keyboard', 'table'];
// const itemRevers = items.reverse();
// console.log(itemRevers);


// // every = true/false
// const numB = [0, 2, 8, 22, 65, -11, 34];
// const everyBodyLowerSix = numB.every((number) => number < 66);
// console.log(everyBodyLowerSix);

// // some = true/false
// const numForSome = [2, 3, 77, 632, 376, 54];
// const smallThanLarge = numForSome.some((num) => num < 376);
// console.log(smallThanLarge);



// const items = ['bull', 'bill', 'tea', 'coffee', 'keyboard', 'table'];
// console.log(items);
// //add item to last item
// items.push('WINDOW');
// console.log(items);

// // out item from last array & SAVE in -> const lastItemOut
// const lastItemOut = items.pop();
// console.log('last item out is: => ', lastItemOut);


// // add item to first item
// items.unshift('NEW');
// console.log(items);

// // out item from first element in array & SAVE in -> const firstItemOut
// const firstItemOut = items.shift();
// console.log('First item out is: => ',firstItemOut);


// // spread operation
// const numberActions = [1, 0, -5, 4, 10, 222, -1000, 498];
// const items = ['bull', 'bill', 'tea', 'coffee', 'keyboard', 'table'];
// const nameOfFriends = ['Alex', 'Eli', 'David', 'Israel', 'Garik', 'Michael', 'Avi', 'Tom'];
// const newItemInArray = [...items, ...nameOfFriends, 'newFriendName', ...numberActions];
// console.log(newItemInArray);

// map
// const numB = [99, 1, 67, 2, 1];
// const multipleRes = numB.map((itemNum) => {
//     return `this string & num is: => ${itemNum * 10}`;
// });
// console.log(multipleRes);

// forEach & console.log in the loop
// const numC = [1, 38, 93, 33, 21];
// numC.forEach((item) => {
//     return console.log(`this is string: => ${item * 10}`);
// })

// flat for arr in arr & revision num
// const arrInArray = [3, 5, [1, 9], [[0, 88], 7]];
// console.log(arrInArray.flat(100));
// console.log('before flat is: => ', arrInArray.includes(88));
// console.log('revision num is: => ', arrInArray.flat(10).includes(88));

//only toString
const numF = [7, '?מה נשמה', 'HELLO', 77, 2, 40, 8];
console.log(numF.toString());
//
// // toString  & replaceAll
// const numD = [7, '?מה נשמה', 'HELLO', 77, 2, 40, 8];
// // console.log(numD.toLocaleString());
// console.log(numD.toString().replaceAll(',', ' '));
//
// // join
// const numE = [7, '?מה נשמה', 'HELLO', 77, 2, 40, 8];
// console.log(numE.join('-'));

// concat1
const items = ['bull', 'bill', 'tea', 'coffee', 'keyboard', 'table'];
const itemSecond =  ['Good', 100];
const itemSecondAndItems = itemSecond.concat(items);
console.log(itemSecondAndItems);

// concat2
const itemSecond2 =  ['Good', 100];
const addToArr = itemSecond2.concat(numF);
console.log(addToArr);