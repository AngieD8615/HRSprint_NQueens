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

window.findNRooksSolution = function (n) {
  var solution = [];

  let board = new Board({ n: n });

  const helper = (curRow) => {

    for (var curCol = 0; curCol < n; curCol++) {
      board.togglePiece(curRow, curCol);
      if (!board.hasAnyRooksConflicts()) {
        if (curRow === n - 1 && !board.hasAnyRooksConflicts()) {
          solution = board;
          return;
        }
        helper(curRow + 1);
      }
      board.togglePiece(curRow, curCol);
    }
  };

  helper(0);
  console.log(solution.attributes[0]);
  console.log("Single solution for " + n + " rooks:", JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function (n) {
  var solutionCount = 0;

  let board = new Board({ n: n });

  const helper = (curRow) => {
    if (curRow === n && !board.hasAnyRooksConflicts()) {
      solutionCount++;
      return;
    }
    for (var curCol = 0; curCol < n; curCol++) {
      board.togglePiece(curRow, curCol);
      if (!board.hasAnyRooksConflicts()) {
        helper(curRow + 1);
      }
      board.togglePiece(curRow, curCol);
    }
  };

  helper(0);

  console.log("Number of solutions for " + n + " rooks:", solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function (n) {
  var solution = undefined; //fixme

  console.log(
    "Single solution for " + n + " queens:",
    JSON.stringify(solution)
  );
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function (n) {
  var solutionCount = 0;

  let board = new Board({ n: n });

  const helper = (curRow) => {
    if (curRow === n && !board.hasAnyQueensConflicts()) {
      solutionCount++;
      return;
    }
    for (var curCol = 0; curCol < n; curCol++) {
      board.togglePiece(curRow, curCol);
      if (!board.hasAnyQueensConflicts()) {
        helper(curRow + 1);
      }
      board.togglePiece(curRow, curCol);
    }
  };

  helper(0);

  console.log("Number of solutions for " + n + " queens:", solutionCount);
  return solutionCount;
};
