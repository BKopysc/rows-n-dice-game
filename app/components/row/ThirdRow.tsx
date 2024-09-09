import BasicTile, { ETileVariant } from "../tiles/BasicTile";
import EmptyTile from "../tiles/EmptyTile";
import BasicRow, { AnyRowProps } from "./BasicRow";

export default function ThirdRow(props: AnyRowProps): JSX.Element {
    return(
        <BasicRow color="blue">
        <BasicTile cell={props.rowState.cells[0]} rowId={2} setCell={props.setCell} validateCell={props.validateCell} variant={ETileVariant.CIRCLE}/>
        <BasicTile cell={props.rowState.cells[1]} rowId={2} setCell={props.setCell} validateCell={props.validateCell} variant={ETileVariant.CIRCLE}/>
        <BasicTile cell={props.rowState.cells[2]} rowId={2} setCell={props.setCell} validateCell={props.validateCell} variant={ETileVariant.SQUARE_BONUS}/>
        <BasicTile cell={props.rowState.cells[3]} rowId={2} setCell={props.setCell} validateCell={props.validateCell} variant={ETileVariant.CIRCLE}/>
        <EmptyTile/>
        <BasicTile cell={props.rowState.cells[5]} rowId={2} setCell={props.setCell} validateCell={props.validateCell} variant={ETileVariant.CIRCLE}/>
        <BasicTile cell={props.rowState.cells[6]} rowId={2} setCell={props.setCell} validateCell={props.validateCell} variant={ETileVariant.CIRCLE}/>
        <BasicTile cell={props.rowState.cells[7]} rowId={2} setCell={props.setCell} validateCell={props.validateCell} variant={ETileVariant.CIRCLE}/>
        <BasicTile cell={props.rowState.cells[8]} rowId={2} setCell={props.setCell} validateCell={props.validateCell} variant={ETileVariant.CIRCLE}/>
        <BasicTile cell={props.rowState.cells[9]} rowId={2} setCell={props.setCell} validateCell={props.validateCell} variant={ETileVariant.SQUARE_BONUS}/>
    </BasicRow>
    )
}