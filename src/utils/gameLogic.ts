import { GridType } from "../common/types";
import { columnAmount, rowAmount, winCondition } from "../consts";

interface CheckUtilsProps {
  grid: GridType;
  currentPlayer: number;
}

export class CheckUtils implements CheckUtilsProps {
  constructor(public grid: GridType, public currentPlayer: number) {}

  checkForWin() {
    for(let x = rowAmount - 1; x >= 0; x--) {
      for(let y = 0; y < columnAmount; y++) {

        if (this.grid[x][y] === this.currentPlayer) {
          if(
            this.checkHorizontal(this.grid, x, y) ||
            this.checkVertical(this.grid, x, y) ||
            this.checkDiagonalRight(this.grid, x, y) ||
            this.checkDiagonalLeft(this.grid, x, y)
          ) {
            return true;
          }
        }
      }
    }
    return false;
  }

  private checkHorizontal(grid: GridType, currentX: number, currentY: number): boolean {

    const nextY = currentY + 1;
    let found = 1;

    for(let i = nextY; i < columnAmount; i++) {
      if (grid[currentX][i] === this.currentPlayer) {
        found++
      } else {
        return false;
      }

      if(found === winCondition) {
        return true;
      }
    }
    return false;
  }

  private checkVertical(grid: GridType, currentX: number, currentY: number): boolean {

    const nextX = currentX - 1;
    let found = 1;

    for(let i = nextX; i >= 0; i--) {
      if (grid[i][currentY] === this.currentPlayer) {
        found++
      } else {
        return false;
      }

      if(found === winCondition) {
        return true;
      }
    }
    return false;
  }

  private checkDiagonalRight(grid: GridType, currentX: number, currentY: number): boolean {
    let nextX = currentX - 1;
    let nextY = currentY + 1;
    let found = 1;

    for (let i = nextX; i >= 0; i--) {
      if (i >= 0 && nextY < columnAmount) {
        if (grid[i][nextY] === this.currentPlayer) {
          found++
        } else {
          return false;
        }

        if(found === winCondition) {
          return true;
        }

        nextY = nextY + 1;
      }
    }
    return false;
  }

  private checkDiagonalLeft(grid: GridType, currentX: number, currentY: number): boolean {
    let nextX = currentX - 1;
    let nextY = currentY - 1;
    let found = 1;

    for (let i = nextX; i >= 0; i--) {
      if (i >= 0 && nextY >= 0) {
        if (grid[i][nextY] === this.currentPlayer) {
          found++
        } else {
          return false;
        }

        if(found === winCondition) {
          return true;
        }

        nextY = nextY - 1;
      }
    }
    return false;
  }
}
