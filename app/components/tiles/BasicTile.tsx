'use client';

import { IAnyTileProps } from "@/app/interface/IAnyTile";
import { IGameCell, SetCellFunction, ValidateCellFunction } from "@/app/interface/IGame";
import { clear } from "console";
import { useCallback, useEffect, useState } from "react";

export interface IBasicTileProps{
    setCell: SetCellFunction;
    validateCell: ValidateCellFunction;
    variant: ETileVariant;
    rowId: number;
    cell: IGameCell;
}

export enum ETileVariant{
    CIRCLE = 'circle',
    SQUARE_BONUS = 'square-bonus'
}


export default function BasicTile(props: IBasicTileProps): JSX.Element{

    const [inputValue, setInputValue] = useState(props.cell.state);
    const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

    useEffect(() => {
        setInputValue(props.cell.state);
    }, [props.cell.state]);

    let roundVariant = props.variant === ETileVariant.CIRCLE ? "rounded-full" : "rounded-none";
    const buildClass = "w-full h-full text-center bg-white border-solid border-gray-400 border-2 " + roundVariant;
    
    const setInput = (event: React.ChangeEvent<HTMLInputElement>) => {

        const value = event.target.value;
        if(value === "" || (parseInt(value) >= 1)){
            setInputValue(value);

            clearTimeout(timer!);

            const newTimer = setTimeout(() => {
                let res = props.validateCell(props.rowId, props.cell.id, value);
                if(!res){
                    setInputValue(props.cell.state);
                }
            }, 500);

            setTimer(newTimer);
        }
    }

    return(
        <div className="w-12 h-12 p-1">
            <input type="text" value={inputValue} inputMode="numeric" pattern="[0-9]*" onChange={setInput}
            className={buildClass}></input>
        </div>
    )
}