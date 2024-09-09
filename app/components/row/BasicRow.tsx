import { IBasicGame, IGameRow, SetCellFunction, ValidateCellFunction } from "@/app/interface/IGame"
import { useEffect } from "react"

export interface BasicRowProps extends React.PropsWithChildren {
    color: 'red' | 'yellow' | 'blue'
}

export interface AnyRowProps {
    rowState: IGameRow;
    setCell: SetCellFunction;
    validateCell: ValidateCellFunction;
}

export default function BasicRow(
    props: BasicRowProps
): JSX.Element {

    const colors = {
        'red': "border-red-400 bg-red-200",
        'yellow': "border-yellow-400 bg-yellow-200",
        'blue': "border-blue-400 bg-blue-200"
    }

    const baseClass = "flex w-fit gap-x-1 border-solid border-4 rounded-md px-1 py-1 "
    let buildClass = baseClass + colors[props.color];

    return (
        <div className={buildClass}>
            {props.children}
        </div>
    )
}
