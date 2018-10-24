// Given a square matrix, calculate the absolute difference between the sums of its diagonals.
//
// For example, the square matrix  is shown below:
//
// 1 2 3
// 4 5 6
// 9 8 9
// The left-to-right diagonal = . The right to left diagonal = . Their absolute difference is .
//
// Function description
//
// Complete the  function in the editor below. It must return an integer representing the absolute diagonal difference.
//
// diagonalDifference takes the following parameter:
//
// arr: an array of integers .
// Input Format
//
// The first line contains a single integer, , the number of rows and columns in the matrix .
// Each of the next  lines describes a row, , and consists of  space-separated integers .
//
// Constraints
//
// Output Format
//
// Print the absolute difference between the sums of the matrix's two diagonals as a single integer.
//
// Sample Input
//
// 3
// 11 2 4
// 4 5 6
// 10 8 -12
// Sample Output
//
// 15

===
===
=== === === === === === === === === === === === === === === === === === === === === === === ===

function diagonalDifference(arr) {
  var primaryD = 0;
  var secD = 0;
  for (var i = 0; i < arr.length; i++) {
    var j = arr.length - i - 1;
    primaryD += arr[i][i];
    secD += arr[i][j];
  }

  return Math.abs(primaryD - secD);
}