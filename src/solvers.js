/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  var solution = []; //fixme
  var board = new Board({n:n});
  console.log(board.rows());
  // instantiate a new board with n passed in

  // base case: if row ===  n - 1
  // return solution.push(board.rows())

  // iterate through board.rows
    // togglePiece(rowIdx, colIdx) start (0, 0)
    // check if rooksconflicts is false
    // make recursive function (row + 1)
    // togglePiece(rowIdx, colIdx++)
  // call recursive function on (0,0)

  // create rowCount = 0;
  // create rowIdx = 0;
  // create colIdx = 0;
  // while solution.length < n
    // create innerArr = [] to make rows
    // togglePiece at (rowIdx,colIdx)
    // check if hasAnyRooksConflicts
      // if false then create while loop for innerArr.length < n to get [1,0,0,0] pushed to solution
    // togglePiece at (rowIdx+1, colIdx+1)
      // check for rooksconflict
        // repeat 
    // rowCount++



  

  // console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution; 
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = undefined; //fixme

  // helper funcs:
    // rowConflict
    // colConflict
    // hasAnyRooksConflicts: uses hasAnyRowConflict and hasAnyColConflict
    // togglePiece(rowIndex, colIndex)

  // create inner arr for each row to push into solution

  // iterate through board size = n 
    // innerArr = []
    // togglePiece at 0,0 (row, col)
      // invoke hasAnyRooksConflicts()
        // create 1st row to have n.length with 0 after togglePiece
        // if false then togglePiece(rowIdx++, colIdx++)


  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
