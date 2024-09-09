import { useState } from "react";
import BasicButton from "../button/BasicButton";
import Dice from "./Dice";


export default function DiceBoard() {

    const [redDice, setRedDice] = useState(1);
    const [blueDice, setBlueDice] = useState(1);
    const [yellowDice, setYellowDice] = useState(1);

    const [isRedSelected, setIsRedSelected] = useState(false);
    const [isBlueSelected, setIsBlueSelected] = useState(false);
    const [isYellowSelected, setIsYellowSelected] = useState(false);

    return(
        <div className="px-3 py-4 bg-lime-200 border-2 rounded-sm border-lime-500 flex flex-col items-center justify-center ">
        <div className="flex pb-5 gap-x-5">
            <Dice color="red" value={redDice} isSelected={isRedSelected} setSelected={setIsRedSelected}/>
            <Dice color="blue" value={blueDice} isSelected={isBlueSelected} setSelected={setIsBlueSelected}/>
            <Dice color="yellow" value={yellowDice} isSelected={isYellowSelected} setSelected={setIsYellowSelected}/>
        </div>
        <div className="flex flex-row w-full items-center justify-center relative">
            <BasicButton color="lime" text="Roll" clickAction={() => {}} />
            <span className="absolute right-1 top-0">=3</span>
        </div>
        </div>

    )
}