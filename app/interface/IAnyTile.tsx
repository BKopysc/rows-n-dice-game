import { IGameCell, SetCellFunction, ValidateCellFunction } from "./IGame";

export interface IAnyTileProps{
    setCell: SetCellFunction;
    validateCell: ValidateCellFunction;
    rowId: number;
    cell: IGameCell;
}

