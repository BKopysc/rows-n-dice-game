# Rows'n'Dice Game

This is a simple game where you have to roll the dice and try to fill the rows with the numbers you get. It's a simple implementation of Qwinto game.

<b>Play here:</b> [https://rows-n-dice-game.pages.dev/](https://rows-n-dice-game.pages.dev/)

## Key Features:
- Offline play  (online play in progress)
- Board is tracking your moves, so you can't place the number in the wrong place
- Random dice roll
    - However, dice is not connected with the board, so you can also use your physical dice to play

## Game description:
### How to Play:
1. Roll the dice and choose a row to place your result.
2. Pick how many dice to roll – but be careful! You can reroll, but other players can use your new result.
3. If you can’t or don’t want to fill a row, take a penalty.
4. Take turns rolling the dice, placing one result per turn.

### Game Rules:
- Numbers in each row must increase, and each column must have unique numbers.
- The game ends when a player fills two rows or gets five penalties.

### Scoring:
- Earn points based on completed rows, with penalties deducting 5 points each.
- Bonus cells add extra points when completing columns.
- The player with the most points wins!

## How to run the project

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
