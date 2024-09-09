export default function FailureBoards(){

    return(
        <div className="flex flex-row gap-x-2 mt-5">
            <span className="text-xl">Failed: </span>
            <div className="flex flex-row gap-x-1">
                <input type="checkbox" className="w-7 h-7"></input>
                <input type="checkbox" className="w-7 h-7"></input>
                <input type="checkbox" className="w-7 h-7"></input>
                <input type="checkbox" className="w-7 h-7"></input>
            </div>
        </div>
    )
}