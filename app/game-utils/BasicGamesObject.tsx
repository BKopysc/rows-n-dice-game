'use client';
import { IBasicGame } from "../interface/IGame";


const BasicGameObject: IBasicGame = {
    rows: [
        {
            id: 0,
            cells: [
                { id: 0, state: "", isEmpty: true, isBonus: false },
                { id: 1, state: "", isEmpty: true, isBonus: false },
                { id: 2, state: "", isEmpty: false, isBonus: false },
                { id: 3, state: "", isEmpty: false, isBonus: true },
                { id: 4, state: "", isEmpty: false, isBonus: false },
                { id: 5, state: "", isEmpty: true, isBonus: false },
                { id: 6, state: "", isEmpty: false, isBonus: false },
                { id: 7, state: "", isEmpty: false, isBonus: true },
                { id: 8, state: "", isEmpty: false, isBonus: false },
                { id: 9, state: "", isEmpty: false, isBonus: false },
                { id: 10, state: "", isEmpty: false, isBonus: false },
                { id: 11, state: "", isEmpty: false, isBonus: false }
            ]
        },
        {
            id: 1,
            cells: [
                { id: 0, state: "", isEmpty: true, isBonus: false },
                { id: 1, state: "", isEmpty: false, isBonus: false },
                { id: 2, state: "", isEmpty: false, isBonus: false },
                { id: 3, state: "", isEmpty: false, isBonus: false },
                { id: 4, state: "", isEmpty: false, isBonus: false },
                { id: 5, state: "", isEmpty: false, isBonus: false },
                { id: 6, state: "", isEmpty: true, isBonus: false },
                { id: 7, state: "", isEmpty: false, isBonus: false },
                { id: 8, state: "", isEmpty: false, isBonus: true },
                { id: 9, state: "", isEmpty: false, isBonus: false },
                { id: 10, state: "", isEmpty: false, isBonus: false },
                { id: 11, state: "", isEmpty: true, isBonus: false }
            ]
        },
        {
            id: 2,
            cells: [
                { id: 0, state: "", isEmpty: false, isBonus: false },
                { id: 1, state: "", isEmpty: false, isBonus: false },
                { id: 2, state: "", isEmpty: false, isBonus: true },
                { id: 3, state: "", isEmpty: false, isBonus: false },
                { id: 4, state: "", isEmpty: true, isBonus: false },
                { id: 5, state: "", isEmpty: false, isBonus: false },
                { id: 6, state: "", isEmpty: false, isBonus: false },
                { id: 7, state: "", isEmpty: false, isBonus: false },
                { id: 8, state: "", isEmpty: false, isBonus: false },
                { id: 9, state: "", isEmpty: false, isBonus: true },
                { id: 10, state: "", isEmpty: true, isBonus: false },
                { id: 11, state: "", isEmpty: true, isBonus: false }
            ]
        }
    ],
    score: {
        rows: [
            { id: 0, score: 0 },
            { id: 1, score: 0 },
            { id: 2, score: 0 }
        ],
        bonus: [0,0,0,0,0],
        failed: 0,
        total: 0
    },
    failures: [
        {
            id: 0,
            failed: false
        },
        {
            id: 1,
            failed: false
        },
        {
            id: 2,
            failed: false
        },
        {
            id: 3,
            failed: false
        }
    ]
}

export const createNewBasicGame = (): IBasicGame => {
    //get unique copy of the object
    return JSON.parse(JSON.stringify(BasicGameObject));
}