import { GridType } from "../common/types";
import { columnAmount, rowAmount, winCondition } from "../consts";

export function checkForWin(grid: GridType): boolean {

  for(let x = rowAmount - 1; x >= 0; x--) {
    for(let y = 0; y < columnAmount; y++) {

      if (grid[x][y] === 1) {
        if(checkHorizontal(grid, x, y)) {
          return true;
        }

        if(checkVertical(grid, x, y)) {
          return true;
        }
      }


      // if(checkDiagonal(grid, x, y)) {
      //   return true;
      // }

      return false;
    }
  }

  return false;
}

export function checkHorizontal(grid: GridType, x: number, y: number): boolean {

  const nextY = y + 1;
  let found = 1;

  for(let i = nextY; i < columnAmount; i++) {
    if (grid[x][i] === 1) {
      found++
    }

    if(found === winCondition) {
      return true;
    }

    if (grid[x][i] === 0) {
      found = 0;
      break;
    }
  }

  return false;
}


export function checkVertical(grid: GridType, x: number, y: number): boolean {

  const nextX = x - 1;
  let found = 1;

  for(let i = nextX; i >= 0; i--) {
    if (grid[i][y] === 1) {
      found++
    }
    console.log(`grid[${i}][${y}] = ${grid[i][y]} found = ${found}`);

    if(found === winCondition) {
      return true;
    }

    if (grid[i][y] === 0) {
      found = 0;
      break;
    }
  }

  return false;
}
