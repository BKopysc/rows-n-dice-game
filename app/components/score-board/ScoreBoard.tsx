import { IGameScore } from "@/app/interface/IGame"

interface ScoreBoardProps {
    score: IGameScore;
}

export default function ScoreBoard(props: ScoreBoardProps) {

    const bonusDivs = props.score.bonus.map((bonus, index) => {
        return (
                <div key={index} className="h-8 w-8 bg-white border-gray-300 border-2 flex items-center justify-center">
                    <span>{bonus}</span>
                </div>
        )});

    return (
        <div className="bg-gray-200 border-dashed border-gray-800 border-2 py-2 px-5 w-fit">
            <p className="font-bold text-gray-700 mb-3">Score:</p>
            <div className="flex flex-row gap-x-2 items-center">
                <div className="h-8 w-8 bg-red-300 rounded-full flex items-center justify-center">
                    <span>{props.score.rows[0].score}</span>
                </div>
                <div className="h-8 w-8 bg-yellow-300 rounded-full flex items-center justify-center">
                    <span>{props.score.rows[1].score}</span>
                </div>
                <div className="h-8 w-8 bg-blue-300 rounded-full flex items-center justify-center">
                    <span>{props.score.rows[2].score}</span>
                </div>
                <span>+</span>
                {bonusDivs}
                <span>-</span>
                <div className="h-8 w-8 bg-orange-300 border-red-400 border-2 flex items-center justify-center">
                    <span>{props.score.failed}</span>
                </div>
            </div>
            <div className="flex flex-row items-center mt-3 gap-x-2">
                <span>=</span>
                <span className="text-2xl">{props.score.total}</span>
            </div>
        </div>

    )
}