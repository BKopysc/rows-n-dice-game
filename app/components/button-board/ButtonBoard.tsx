'use client';
import { IGameFailure, SetCheckedFailureFunction } from "@/app/interface/IGame";
import BasicButton from "../button/BasicButton";
import CheckboxButton from "../button/CheckboxButton";
import FailureBoards from "../failure-board/FailureBoard";

export interface ButtonBoardProps {
    failures: IGameFailure[];
    resetAction: () => void;
    diceAction: () => void;
    diceButtonState: boolean;
    failureAction: SetCheckedFailureFunction;
    scoreAction: () => void;
    scoreButtonState: boolean;
}

export default function ButtonBoard(props: ButtonBoardProps) {
    return (
        <div className="flex flex-col mt-3 gap-5 items-center justify-between ml-auto w-full md:flex-row">
            <div>
                <FailureBoards failures={props.failures} failureAction={props.failureAction} />
            </div>
            <div className="flex flex-row items-center gap-x-5">
                <BasicButton text="Reset" clickAction={props.resetAction} color={"red"} size="sm"/>
                <CheckboxButton text="Score" clickAction={props.scoreAction} checked={props.scoreButtonState} uncheckedSvg={
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <rect x="3" y="3" width="18" height="18" rx="4" ry="4" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                        <text x="12" y="16" textAnchor="middle" fontSize="12" fill="currentColor" fontFamily="Arial" fontWeight="bold">1</text>
                    </svg>

                } />
                <CheckboxButton text="Dice" clickAction={props.diceAction} checked={props.diceButtonState}
                    uncheckedSvg={
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                            <circle cx="8" cy="8" r="1" fill="currentColor" />
                            <circle cx="16" cy="8" r="1" fill="currentColor" />
                            <circle cx="8" cy="16" r="1" fill="currentColor" />
                            <circle cx="16" cy="16" r="1" fill="currentColor" />
                        </svg>
                    }
                />

            </div>
        </div>
    )
}