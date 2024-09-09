import FirstRow from "../row/FirstRow";
import SecondRow from "../row/SecondRow";
import ThirdRow from "../row/ThirdRow";

export default function Board(){

    return(
        <div className="flex flex-col gap-y-2 w-fit h-fit px-5 py-5 bg-gray-200 border-gray-300 border-solid border-2 rounded-md text-xl">
            <FirstRow/>
            <SecondRow/>
            <ThirdRow/>
        </div>
    )
}