/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N 皇后
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */

/* 输入棋盘边长n，返回所有合法的放置方法 */
var solveNQueens = function(n) {
  /* 初始化棋盘 */
  const board = Array.from({ length: n });
  board.forEach((row, index, arr) => (arr[index] = new Array(n).fill(".")));

  const res = []; // 结果

  /* 是否可以在board[row][col]放置皇后 */
  const isValid = (board, row, col) => {
    let n = board.length;

    /* 列中是否有皇后冲突 */
    for (let i = 0; i < row; i++) {
      // const element = array[i];
      if (board[i][col] === "Q") {
        return false;
      }
    }

    /* 检查右上方是否有皇后冲突 */
    for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
      if (board[i][j] === "Q") {
        return false;
      }
    }

    /* 检查左上方是否有皇后冲突 */
    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
      if (board[i][j] === "Q") {
        return false;
      }
    }

    return true;
  };

  /* 
    路径：board中小于row的那些行都放置了皇后
    选择列表：第row行的所有列都是放置皇后的选择
    结束条件：row到了最后一行，说明棋盘放满了
  */
  const backtrack = (board, row) => {
    if (row === n) {
      /*  最后一行，递归出口 */
      const copyboard = JSON.parse(JSON.stringify(board));
      copyboard.forEach((row, index, arr) => {
        arr[index] = row.join("");
      });
      res.push(copyboard);
      return;
    }

    let colSize = board[row].length;
    for (let col = 0; col < colSize; col++) {
      /* 排除不合法的选项 */
      if (!isValid(board, row, col)) continue;

      /* 做选择 */
      board[row][col] = "Q";

      /* 进入下一行的决策 */
      backtrack(board, row + 1);

      /* 撤销选择 */
      board[row][col] = ".";
    }
  };

  backtrack(board, 0);

  return res;
};
// @lc code=end
