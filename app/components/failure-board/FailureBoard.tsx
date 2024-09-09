import { IGameFailure, SetCheckedFailureFunction } from "@/app/interface/IGame"

interface FailureBoardsProps{
    failures: IGameFailure[];
    failureAction: SetCheckedFailureFunction;
}

export default function FailureBoards(props: FailureBoardsProps){

   const handleChanged = (index: number) => (event: any) => {
        const selected = event.target.checked;
        props.failureAction(index, selected);
    }

    return(
        <div className="flex flex-row gap-x-2 bg-orange-300 border-orange-400 border-2 p-2 rounded-md">
            <span className="text-xl text-orange-900">Failed: </span>
            <div className="flex flex-row gap-x-1">
                {props.failures.map((failure, index) => {
                    return(
                        <input key={failure.id} type="checkbox" className="w-7 h-7" checked={failure.failed} onChange={handleChanged(index)}></input>
                    )
                })}
               
            </div>
        </div>
    )
}