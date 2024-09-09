import { IBasicGame, SetCellFunction, ValidateCellFunction } from "@/app/interface/IGame";
import FirstRow from "../row/FirstRow";
import SecondRow from "../row/SecondRow";
import ThirdRow from "../row/ThirdRow";

interface BoardProps{
    gameState: IBasicGame;
    setCell: SetCellFunction;
    validateCell: ValidateCellFunction;
}

export default function Board(props: BoardProps){

    return(
        <div className="flex flex-col gap-y-2 w-fit h-fit px-5 py-5 bg-gray-200 border-gray-300 border-solid border-2 rounded-md text-xl">
            <FirstRow rowState={props.gameState.rows[0]} setCell={props.setCell} validateCell={props.validateCell}/>
            <SecondRow rowState={props.gameState.rows[1]} setCell={props.setCell} validateCell={props.validateCell} />
            <ThirdRow rowState={props.gameState.rows[2]} setCell={props.setCell} validateCell={props.validateCell} />
            {/* <ThirdRow rowState={props.gameState.rows[2]} setCell={props.setCell} /> */}
        </div>
    )
}