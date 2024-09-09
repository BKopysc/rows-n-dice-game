'use client';

import { use, useEffect, useState } from "react";
import Board from "../components/board/Board";
import ButtonBoard from "../components/button-board/ButtonBoard";
import FailureBoards from "../components/failure-board/FailureBoard";
import FirstRow from "../components/row/FirstRow";
import ScoreBoard from "../components/score-board/ScoreBoard";
import { createNewBasicGame } from "../game-utils/BasicGamesObject";
import { IGameScore, SetCellFunction, SetCheckedFailureFunction, ValidateCellFunction } from "../interface/IGame";
import { calculateBasicGameScore, validateCellGameFunction } from "../game-utils/BasicGameFunctions";

export default function OfflinePage() {



    const [game, setGame] = useState(createNewBasicGame());
    const [isDiceButtonChecked, setIsDiceButtonChecked] = useState(false);

    const setCell: SetCellFunction = (rowId: number, cellId: number, value: string) => {
        console.log("Setting cell: " + value);
        game.rows[rowId].cells[cellId].state = value;
        setGame({...game});
    }

    const setCheckedFailure: SetCheckedFailureFunction = (id: number, value: boolean) => {
        game.failures[id].failed = value;
        setGame({...game});
        setScore();
    }

    const setScore = () => {
        game.score = calculateBasicGameScore(game);
        setGame({...game});
    }

    const validateCell: ValidateCellFunction = (rowId: number, cellId: number, value: string) => {
        let res = validateCellGameFunction(rowId, cellId, value, game);
        if(res){
            setCell(rowId, cellId, value);
            setScore();
            return true;
        }
        return false;
    }

    const setDiceButton = () => {
        setIsDiceButtonChecked(!isDiceButtonChecked);
    }


    const showTest = () => {
        console.log(game);
    }

    const resetBtn = () => {
        let resetedGame = createNewBasicGame();
        setGame(resetedGame);
    }
    
    return (
        <div className="p-5 md:p-10">
            <h1 className="text-xl mb-5 text-sky-900 font-medium">Offline board</h1>
            <button onClick={showTest} className="bg-sky-500 text-white px-3 py-1 rounded-md">Show test</button>
            <button onClick={resetBtn} className="bg-sky-500 text-white px-3 py-1 rounded-md ml-2">Reset</button>
            <div className="flex justify-center">
                <div className="flex flex-col items-center max-w-fit">
                    <Board gameState={game} setCell={setCell} validateCell={validateCell}/>
                    <ButtonBoard diceAction={setDiceButton} resetAction={resetBtn} diceButtonState={isDiceButtonChecked} failures={game.failures} failureAction={setCheckedFailure}/>
                    <ScoreBoard score={game.score}/>
                </div>
            </div>
        </div>
    )
}