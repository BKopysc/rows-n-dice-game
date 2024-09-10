'use client';
import { IBasicGame, IGameRow, IGameScore } from "../interface/IGame";


export interface IValidateCellResponse{
    result: boolean;
    status: 'success' | 'error';
    message: string;
}


export function validateCellGameFunction(rowId: number, cellId: number, value: string, basicGame: IBasicGame): IValidateCellResponse {
    let cell = basicGame.rows[rowId].cells[cellId];
    let row = basicGame.rows[rowId];

    console.log("Validating cell: " + value);

    if (value === "") {
        return {
            result: true,
            status: 'success',
            message: "Empty"
        };
    }

    //check if all previous cells are decreasing or empty

    for (let i = 0; i < cellId; i++) {
        if (row.cells[i].isEmpty === false && row.cells[i].state !== "") {
            if (parseInt(row.cells[i].state) >= parseInt(value)) {
                console.log("Previous cells are not decreasing");
                return {
                    result: false,
                    status: 'error',
                    message: "Too low"
                };
                
            }
        }
    }

    //check if all next cells are increasing or empty
    for (let i = cellId + 1; i < row.cells.length; i++) {
        if (row.cells[i].isEmpty === false && row.cells[i].state !== "") {
            if (parseInt(row.cells[i].state) <= parseInt(value)) {
                console.log("Next cells are not increasing");
                return{
                    result: false,
                    status: 'error',
                    message: "Too high"
                }
            }
        }
    }

    //check if there is not the same value in the column
    for (let i = 0; i < basicGame.rows.length; i++) {
        if (basicGame.rows[i].cells[cellId].state === value && basicGame.rows[i].cells[cellId].isEmpty === false) {
            console.log("Same value in the column");
            return {
                result: false,
                status: 'error',
                message: "Exists in column"
            }
        }
    }

    console.log("Cell is valid");
    return {
        result: true,
        status: 'success',
        message: "Valid"
    };
}

export function getRowScore(row: IGameRow): number {
    let rowScore = 0;
    let numberOfCells = 0;
    let maxCells = row.cells.filter(cell => cell.isEmpty === false).length;
    let lastCountingCell = "";


    row.cells.forEach(cell => {
        if (cell.isEmpty === false && cell.state !== "") {
            numberOfCells++;
            lastCountingCell = cell.state;
        }
    });

    if (numberOfCells === maxCells) {
        return parseInt(lastCountingCell);
    }

    return numberOfCells;
}

export function calculateBasicGameScore(basicGame: IBasicGame): IGameScore {

    let score: IGameScore = {
        rows: [],
        bonus: [],
        failed: 0,
        total: 0
    };

    basicGame.rows.forEach(row => {
        let rowScore = getRowScore(row);
        score.rows.push({ id: row.id, score: rowScore });
        score.total += rowScore;
    });

    let bonusScores = checkBonusScore(basicGame);

    bonusScores.forEach(bonus => {
        score.bonus.push(bonus);
        score.total += bonus;
    });

    let failed = 0;

    basicGame.failures.forEach(failure => {
        if (failure.failed === true) {
            failed += 5;
        }
    });

    score.failed = failed;
    score.total -= failed;

    return score;

}


function checkBonusScore(basicGame: IBasicGame): number[] {
    let bonusScores: {
        rowId: number,
        colId: number,
        value: number
    }[] = []

    let rows = basicGame.rows.length;

    let finalBonusScores: number[] = [];

    basicGame.rows.forEach(row => {
        row.cells.forEach(cell => {
            if (cell.isBonus) {
                
                bonusScores.push({
                    rowId: row.id,
                    colId: cell.id,
                    value: parseInt(cell.state) ? parseInt(cell.state) : 0
                });
            }
        });
    });

    console.log(bonusScores);

    bonusScores.forEach(bonusData => {
        //check if the all cells in the bonus collumn is filled, if so, add the bonus value to the bonus array
        let isBonus = true;

        for (let i = 0; i < rows; i++) {
            let current_row = basicGame.rows[i];
            let col_id = bonusData.colId;
            if (current_row.cells[col_id].state === "") {
                isBonus = false;
                break;
            }
        }

        if (isBonus === false) {
            bonusData.value = 0;
        }

        finalBonusScores.push(bonusData.value);
    });

    return finalBonusScores;
}

export function resetBasicGame(basicGame: IBasicGame): IBasicGame {

    basicGame.rows.forEach(row => {
        row.cells.forEach(cell => {
            cell.state = "";
        });
    });

    basicGame.score.rows.forEach(row => {
        row.score = 0;
    });

    basicGame.score.bonus = [];
    basicGame.score.failed = 0;
    basicGame.score.total = 0;

    basicGame.failures.forEach(failure => {
        failure.failed = false;
    });

    return basicGame;
}

