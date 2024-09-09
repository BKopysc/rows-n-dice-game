'use client';
interface BasicButtonProps {
    clickAction: () => void;
    color: 'blue' | 'red';
    text: string;
}

export default function BasicButton(props: BasicButtonProps){

    const colors = {
        'red': "bg-red-500 hover:bg-red-700",
        'blue': "bg-blue-500 hover:bg-blue-700"
    }

    return(
        <div>
            <button onClick={props.clickAction}
            className={"bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded " + colors[props.color]}>
                {props.text}
            </button>
        </div>
    )
}