// Consider a staircase of size :
//
//    #
//   ##
//  ###
// ####
// Observe that its base and height are both equal to , and the image is drawn using # symbols and spaces. The last line is not preceded by any spaces.
//
// Write a program that prints a staircase of size .
//
// Function Description
//
// Complete the staircase function in the editor below. It should print a staircase as described above.
//
// staircase has the following parameter(s):
//
// n: an integer
// Input Format
//
// A single integer, , denoting the size of the staircase.
//
// Constraints
//
//  .
//
// Output Format
//
// Print a staircase of size  using # symbols and spaces.
//
// Note: The last line must have  spaces in it.
//
// Sample Input
//
// 6
// Sample Output
//
//      #
//     ##
//    ###
//   ####
//  #####
// ######
===
===
=== === === === === === === === === === === === === === === === === === === === === === === ===

function staircase(n) {
  const line = Array(n + 1).fill(' ');
  line[n] = '';
  for (let i = n - 1; i >= 0; i--) {
    line[i] = '#';
    console.log(line.join(''));
  }

}