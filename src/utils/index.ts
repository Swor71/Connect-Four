import { GridType } from "../common/types";
import { columnAmount, rowAmount } from "../consts";

export function checkForWin(grid: GridType): boolean {

  for(let x = 0; x < rowAmount; x++) {
    for(let y = 0; y < columnAmount; y++) {

      if(checkHorizontal(grid, x, y)) {
        return true;
      }
      // if(checkVertical(grid, x, y)) {
      //   return true;
      // }

      // if(checkDiagonal(grid, x, y)) {
      //   return true;
      // }

      return false;
    }
  }

  return false;
}


export function checkHorizontal(grid: GridType, x: number, y: number): boolean {



  return false;
}

// export function checkVertical(grid: GridType, x: number, y: number): boolean {



//   return false;
// }
