const sudokuGame = require('../lib/sudoku-generator');

exports.index = (req, res) => {
  res.render('index');
}

exports.getNewGame = (req, res) => {
  res.json(sudokuGame.newPuzzle());
}