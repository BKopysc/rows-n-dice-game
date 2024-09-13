'use client';

import DiceBoard from "../components/dice/DiceBoard";

export default function DicePage() {
    return (
        <div className="flex flex-col w-full items-center gap-y-5 mt-5 h-full">
            <h1 className="text-2xl text-sky-900 font-medium text-center">Dice</h1>
            <div className="flex flex-col w-fit justify-center items-center">

            <DiceBoard size='md'/>
            </div>
        </div>
    )
}