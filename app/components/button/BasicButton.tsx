'use client';
interface BasicButtonProps {
    clickAction: () => void;
    color: 'blue' | 'red' | 'lime';
    text: string;
}

export default function BasicButton(props: BasicButtonProps){

    const colors = {
        'red': "bg-red-500 hover:bg-red-700",
        'blue': "bg-blue-500 hover:bg-blue-700",
        'lime': "bg-lime-700 hover:bg-lime-900"
    }

    return(
        <div>
            <button onClick={props.clickAction}
            className={"text-white py-2 px-4 rounded " + colors[props.color]}>
                {props.text}
            </button>
        </div>
    )
}