import CircleTile from "../tiles/CircleTile";
import EmptyTile from "../tiles/EmptyTile";
import SquareTile from "../tiles/SquareTile";
import BasicRow from "./BasicRow";

export default function ThirdRow(){
    return(
        <BasicRow color="blue">
        <CircleTile/>
        <CircleTile />
        <SquareTile/>
        <CircleTile />
        <EmptyTile/>
        <CircleTile />
        <CircleTile />
        <CircleTile />
        <CircleTile />
        <SquareTile/>
    </BasicRow>
    )
}