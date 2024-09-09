
'use client';

import styles from './Dice.module.css';

interface DiceProps {
    color: 'red' | 'yellow' | 'blue';
    isSelected: boolean;
    setSelected: React.Dispatch<React.SetStateAction<boolean>>;
    value: number;
    isRolling: boolean;
    size: 'sm' | 'md';
}

export default function Dice(props: DiceProps) {

    const colors = {
        'red': "bg-red-500 border-red-500 hover:border-red-800 text-white text-bold ",
        'yellow': "bg-yellow-500  border-yellow-500 hover:border-yellow-800 text-white text-bold ",
        'blue': "bg-blue-500 border-blue-500 hover:border-blue-800 text-white text-bold "
    }

    const selectedColors = {
        'red': "border-red-800 ",
        'yellow': "border-yellow-800 ",
        'blue': "border-blue-800 "
    }

    const sizeDice = props.size === 'sm' ?  'w-12 h-12 text-2xl' : 'w-16 h-16 text-3xl';

    const isSelectedColor = props.isSelected ? selectedColors[props.color] : ""; 

    return (
        <button className={"diceContainer flex items-center justify-center rounded-md border-4 p-2 hover:cursor-pointer " 
            + colors[props.color] + isSelectedColor + (props.isRolling ? ' rolling ' : ' ') + sizeDice}
            onClick={() => props.setSelected(!props.isSelected)}
        >
            <span>{props.value}</span>
        </button>
    )

}