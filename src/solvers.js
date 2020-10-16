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
  var solution = [];
  var curBoard = new Board({n: n}); //fixme
  let rowIndex = 0;
  let colIndex = 0;

  helper = (rowIndex, colIndex) => {
    // base case:
    // if rowIndex and colIndex = n and there are no conflicts
    console.log('board', curBoard.rows(), 'rowIndex', rowIndex);
    if (rowIndex === n && !curBoard.hasAnyRooksConflicts()) {
      // return curBoard
      return curBoard;
    }

    // non base case:
    // toggle next queen
    curBoard.togglePiece(rowIndex, colIndex);
    // numOfRooks++;

    // if no conflict
    if (!curBoard.hasAnyRooksConflicts()) {
      // increment rowIndex and colIndex appropiately
      for (var i = 0; i < n; i++) {
        if (rowIndex < n) {
          colIndex = i;
          // reapply helper
          console.log(rowIndex, colIndex);
          return helper(rowIndex + 1, colIndex);
        }
      }
    }
  };

  helper(rowIndex, colIndex);


  for (var i = 0; i < n; i++) {
    solution.push(curBoard.attributes[i]);
  }


  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0; //fixme

  var findSolution = function () {
    // base case:
    // if all rows exhasted
      // increament solution count
      // stop


    // iterate over possible decision
      // place a piece
      // recurs into remaining problem
      // unplace the piece
  };

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
