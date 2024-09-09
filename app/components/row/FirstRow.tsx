import CircleTile from "../tiles/CircleTile";
import EmptyTile from "../tiles/EmptyTile";
import SquareTile from "../tiles/SquareTile";
import BasicRow from "./BasicRow";

export default function FirstRow(): JSX.Element {
    return (
        <div className="flex flex-row gap-x-1">
        <EmptyTile/>
        <EmptyTile/>
        <BasicRow color="red">
            <CircleTile/>
            <SquareTile/>
            <CircleTile/>
            <EmptyTile/>
            <CircleTile/>
            <SquareTile/>
            <CircleTile />
            <CircleTile/>
            <CircleTile/>
            <CircleTile/>
        </BasicRow>
        </div>
    )
}