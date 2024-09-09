import { useEffect, useState } from "react";
import BasicButton from "../button/BasicButton";
import Dice from "./Dice";

interface DiceBoardProps {
    size: 'sm' | 'md';
}

export default function DiceBoard(props: DiceBoardProps) {

    const [redDice, setRedDice] = useState(1);
    const [blueDice, setBlueDice] = useState(1);
    const [yellowDice, setYellowDice] = useState(1);

    const [points, setPoints] = useState(0);

    const [isRedRolling, setIsRedRolling] = useState(false);
    const [isBlueRolling, setIsBlueRolling] = useState(false);
    const [isYellowRolling, setIsYellowRolling] = useState(false);

    const [isRedSelected, setIsRedSelected] = useState(false);
    const [isBlueSelected, setIsBlueSelected] = useState(false);
    const [isYellowSelected, setIsYellowSelected] = useState(false);

    useEffect(() => {
        setPoints(calcPoints());
    }, [redDice, blueDice, yellowDice, isRedSelected, isBlueSelected, isYellowSelected]);

    const calcPoints = () => {
        let points = 0;
        if (isRedSelected) {
            points += redDice;
        }
        if (isBlueSelected) {
            points += blueDice;
        }
        if (isYellowSelected) {
            points += yellowDice;
        }
        return points;
    }

    const randomizeScore = () => {
        let finalScore = 1;
        for (let i = 0; i < 5; i++) {
            finalScore = Math.floor(Math.random() * 6) + 1;
        }
        return finalScore;
    }

    const rollDice = () => {
        if (isRedSelected) setIsRedRolling(true);
        if (isBlueSelected) setIsBlueRolling(true);
        if (isYellowSelected) setIsYellowRolling(true);
    
        const interval = 100; // Interval in milliseconds
        const iterations = 4; // Number of times to update the dice value
    
        let count = 0;
        const intervalId = setInterval(() => {
            if (isRedSelected) setRedDice(randomizeScore());
            if (isBlueSelected) setBlueDice(randomizeScore());
            if (isYellowSelected) setYellowDice(randomizeScore());
    
            count++;
            if (count >= iterations) {
                clearInterval(intervalId);
                setIsRedRolling(false);
                setIsBlueRolling(false);
                setIsYellowRolling(false);
            }
        }, interval);
    };



    return (
        <div className="px-3 py-4 bg-lime-200 border-2 rounded-sm border-lime-500 flex flex-col items-center justify-center ">
            <div className="flex pb-5 gap-x-5">
                <Dice color="red" value={redDice} isSelected={isRedSelected} size={props.size}
                    setSelected={setIsRedSelected} isRolling={isRedRolling} />
                <Dice color="blue" value={blueDice} isSelected={isBlueSelected} size={props.size}
                    setSelected={setIsBlueSelected} isRolling={isBlueRolling} />
                <Dice color="yellow" value={yellowDice} isSelected={isYellowSelected} size={props.size}
                    setSelected={setIsYellowSelected} isRolling={isYellowRolling} />
            </div>
            <div className="flex flex-row w-full items-center justify-center relative">
                <BasicButton color="lime" text="Roll" clickAction={rollDice} size={props.size}/>
                <div className="absolute right-1 top-0">
                    <span>= {points}</span>
                </div>
            </div>
        </div>

    )
}