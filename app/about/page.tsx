import React from "react";

export default function AboutPage() {
    return (
<div className="py-5 px-10 flex flex-col gap-y-5">
    <h1 className="text-2xl text-sky-900 font-medium text-center">About</h1>
    <p className="text-center">This is an implementation of a game about rows and dice: Qwinto.</p>
    
    <div>
        <p className="font-bold text-xl">How to Play:</p>
        <p>1. The game is played on a board with multiple rows.</p>
        <p>2. Players select the number of dice they want to roll.</p>
        <p>3. Players roll the dice.</p>
        <p>4. Based on the dice colors, players choose a row to place their result.</p>
        <p>5. If a player is unhappy with the result, they can reroll. However, other players can also use the new roll to fill their own board.</p>
        <p>5.a. If a player cannot or does not want to fill in a score, they must take a penalty.</p>
        <p>6. The next player takes their turn by rolling the dice.</p>
    </div>
    
    <div>
        <p className="font-bold text-xl">Game Rules:</p>
        <p>1. Players can roll as many dice as they want.</p>
        <p>2. Players may fill only one cell per turn.</p>
        <p>3. Numbers in each row must increase.</p>
        <p>4. Numbers in each column must be unique (no duplicates).</p>
        <p>5. The game ends when a player fills two rows or accumulates five penalties.</p>
    </div>
    
    <div>
        <p className="font-bold text-xl">Scoring:</p>
        <p>1. If a row is fully filled, the player earns points equal to the value of the last cell.</p>
        <p>2. If a row is incomplete, the player earns points based on the number of filled cells in the row.</p>
        <p>3. Each penalty deducts 5 points.</p>
        <p>4. If a bonus cell (marked with a square) completes a column, the player earns extra points based on that cell.</p>
        <p>5. The player with the most points at the end of the game wins.</p>
    </div>
</div>

    )
}