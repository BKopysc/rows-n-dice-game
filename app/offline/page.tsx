import Board from "../components/board/Board";
import FailureBoards from "../components/failure-board/FailureBoard";
import FirstRow from "../components/row/FirstRow";
import ScoreBoard from "../components/score-board/ScoreBoard";

export default function OfflinePage() {

    return (
        <div className="p-5 md:p-10">
            <h1 className="text-xl mb-5 text-sky-900 font-medium">Offline board</h1>
            <div className="flex flex-col w-auto items-center">
                <Board />
                <FailureBoards />
                <ScoreBoard />
            </div>

        </div>
    )
}