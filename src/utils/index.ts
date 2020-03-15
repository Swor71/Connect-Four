import { GridType } from "../common/types";
import { columnAmount, rowAmount, winCondition } from "../consts";

export function checkForWin(grid: GridType): boolean {

  for(let x = rowAmount - 1; x >= 0; x--) {
    for(let y = 0; y < columnAmount; y++) {

      if (grid[x][y] === 1) {
        if(
          checkHorizontal(grid, x, y) ||
          checkVertical(grid, x, y) ||
          checkDiagonalRight(grid, x, y) ||
          checkDiagonalLeft(grid, x, y)
        ) {
          return true;
        }
      }
    }
  }
  return false;
}

export function checkHorizontal(grid: GridType, currentX: number, currentY: number): boolean {

  const nextY = currentY + 1;
  let found = 1;

  for(let i = nextY; i < columnAmount; i++) {
    if (grid[currentX][i] === 1) {
      found++
    }

    if(found === winCondition) {
      return true;
    }

    if (grid[currentX][i] === 0) {
      found = 0;
      break;
    }
  }

  return false;
}

export function checkVertical(grid: GridType, currentX: number, currentY: number): boolean {

  const nextX = currentX - 1;
  let found = 1;

  for(let i = nextX; i >= 0; i--) {
    if (grid[i][currentY] === 1) {
      found++
    }

    if(found === winCondition) {
      return true;
    }

    if (grid[i][currentY] === 0) {
      found = 0;
      break;
    }
  }

  return false;
}

export function checkDiagonalRight(grid: GridType, currentX: number, currentY: number) {
  let nextX = currentX - 1;
  let nextY = currentY + 1;
  let found = 1;

  for (let i = nextX; i >= 0; i--) {
    if (i >= 0 && nextY < columnAmount) {
      if (grid[i][nextY] === 1) {
        found++
      }

      if(found === winCondition) {
        return true;
      }

      if (grid[i][nextY] === 0) {
        found = 0;
        return false;
      }

      nextY = nextY + 1;
    }
  }
}

function checkDiagonalLeft(grid: GridType, currentX: number, currentY: number) {
  let nextX = currentX - 1;
  let nextY = currentY - 1;
  let found = 1;

  for (let i = nextX; i >= 0; i--) {
    if (i >= 0 && nextY >= 0) {
      if (grid[i][nextY] === 1) {
        found++
      }

      if(found === winCondition) {
        return true;
      }

      if (grid[i][nextY] === 0) {
        found = 0;
        return false;
      }

      nextY = nextY - 1;
    }
  }
}
