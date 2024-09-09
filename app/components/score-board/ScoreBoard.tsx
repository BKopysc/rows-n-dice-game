
export default function ScoreBoard(){
    return (
        <div className="bg-gray-200 border-dashed border-t-gray-800 border-t-2 py-2 px-5 mt-5 w-fit">
            <p className="font-bold text-gray-700 mb-3">Score:</p>
        <div className="flex flex-row gap-x-2 items-center">
            <div className="h-8 w-8 bg-red-300 rounded-full flex items-center justify-center">
                <span>10</span>
            </div>
            <div className="h-8 w-8 bg-yellow-300 rounded-full flex items-center justify-center">
                <span>10</span>
            </div>
            <div className="h-8 w-8 bg-blue-300 rounded-full flex items-center justify-center">
                <span>10</span>
            </div>
            <span>+</span>
            <div className="h-8 w-8 bg-white border-gray-300 border-2 flex items-center justify-center">
                <span>0</span>
            </div>
            <div className="h-8 w-8 bg-white border-gray-300 border-2 flex items-center justify-center">
                <span>0</span>
            </div>
            <div className="h-8 w-8 bg-white border-gray-300 border-2 flex items-center justify-center">
                <span>0</span>
            </div>
            <div className="h-8 w-8 bg-white border-gray-300 border-2 flex items-center justify-center">
                <span>0</span>
            </div>
            <div className="h-8 w-8 bg-white border-gray-300 border-2 flex items-center justify-center">
                <span>0</span>
            </div>
            <span>-</span>
            <div className="h-8 w-8 bg-orange-400 border-red-500 border-2 flex items-center justify-center">
                <span>10</span>
            </div>
        </div>
        <div className="flex flex-row items-center mt-3 gap-x-2">
            <span>=</span>
            <span className="text-2xl">100</span>
        </div>
        </div>

    )
}