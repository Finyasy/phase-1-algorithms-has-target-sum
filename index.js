function hasTargetSum(array, target) {
  // Write your algorithm here
  let count = 0;
  for(let i = 0; i < array.length; i++) {
    for(let j = i + 1; j < array.length; j++) {
      if(array[i] + array[j] === target) {
        count++;
      return true
      }
    }
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
  Big O: O(n^2) - because we are iterating through the array twice

*/

/* 
  Add your pseudocode here
*/
// Input: array, target
//initialize count to 0
//iterate through array
//iterate through array again
//if the sum of the two numbers is equal to target, increment count
//return count
/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
