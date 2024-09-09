import BasicTile, { ETileVariant } from "../tiles/BasicTile";
import EmptyTile from "../tiles/EmptyTile";
import BasicRow, { AnyRowProps } from "./BasicRow";

export default function SecondRow(props: AnyRowProps): JSX.Element {
    return (
        <div className="flex flex-row gap-x-1">
            <EmptyTile />
            <BasicRow color="yellow">
            <BasicTile cell={props.rowState.cells[1]} rowId={1} setCell={props.setCell} validateCell={props.validateCell} variant={ETileVariant.CIRCLE}/>
            <BasicTile cell={props.rowState.cells[2]} rowId={1} setCell={props.setCell} validateCell={props.validateCell} variant={ETileVariant.CIRCLE}/>
            <BasicTile cell={props.rowState.cells[3]} rowId={1} setCell={props.setCell} validateCell={props.validateCell} variant={ETileVariant.CIRCLE}/>
            <BasicTile cell={props.rowState.cells[4]} rowId={1} setCell={props.setCell} validateCell={props.validateCell} variant={ETileVariant.CIRCLE}/>
            <BasicTile cell={props.rowState.cells[5]} rowId={1} setCell={props.setCell} validateCell={props.validateCell} variant={ETileVariant.CIRCLE}/>
                <EmptyTile />
                <BasicTile cell={props.rowState.cells[7]} rowId={1} setCell={props.setCell} validateCell={props.validateCell} variant={ETileVariant.CIRCLE}/>
                <BasicTile cell={props.rowState.cells[8]} rowId={1} setCell={props.setCell} validateCell={props.validateCell} variant={ETileVariant.SQUARE_BONUS}/>
                <BasicTile cell={props.rowState.cells[9]} rowId={1} setCell={props.setCell} validateCell={props.validateCell} variant={ETileVariant.CIRCLE}/>
                <BasicTile cell={props.rowState.cells[10]} rowId={1} setCell={props.setCell} validateCell={props.validateCell} variant={ETileVariant.CIRCLE}/>
            </BasicRow>
        </div>
    )
}