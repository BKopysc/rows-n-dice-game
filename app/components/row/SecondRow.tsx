import CircleTile from "../tiles/CircleTile";
import EmptyTile from "../tiles/EmptyTile";
import SquareTile from "../tiles/SquareTile";
import BasicRow from "./BasicRow";

export default function SecondRow() {
    return (
        <div className="flex flex-row gap-x-1">
            <EmptyTile />
            <BasicRow color="yellow">
                <CircleTile />
                <CircleTile />
                <CircleTile />
                <CircleTile />
                <CircleTile />
                <EmptyTile />
                <CircleTile />
                <SquareTile />
                <CircleTile />
                <CircleTile />
            </BasicRow>
        </div>
    )
}