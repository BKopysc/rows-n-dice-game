import { fail } from "assert"

export interface IGameCell {
    id: number;
    state: string;
    isEmpty: boolean;
    isBonus: boolean;
}

export interface IGameRow {
    id: number;
    cells: IGameCell[];
}

export interface IGameScoreRows {
    id: number;
    score: number;
}


export interface IGameScore {
    rows: IGameScoreRows[];
    bonus: number[];
    failed: number;
    total: number;
}

export interface IGameFailure {
    id: number;
    failed: boolean;
}

export interface IBasicGame {
    rows: IGameRow[];
    score: IGameScore;
    failures: IGameFailure[];
}

export type SetCellFunction = (rowId: number, tileId: number, value: string) => void;

export type ValidateCellFunction = (rowId: number, cellId: number, value: string) => boolean;

export type SetCheckedFailureFunction = (id: number, value: boolean) => void;