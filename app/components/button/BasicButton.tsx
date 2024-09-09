'use client';
interface BasicButtonProps {
    clickAction: () => void;
    color: 'blue' | 'red' | 'lime';
    text: string;
    size: 'sm' | 'md';
}

export default function BasicButton(props: BasicButtonProps){

    const colors = {
        'red': " bg-red-500 hover:bg-red-700 ",
        'blue': " bg-blue-500 hover:bg-blue-700 ",
        'lime': " bg-lime-700 hover:bg-lime-900 "
    }

    const sizeBtn = props.size === 'sm' ? 'py-2 px-4 text-base' : 'py-2 px-5 text-2xl';

    return(
        <div>
            <button onClick={props.clickAction}
            className={"text-white rounded " + colors[props.color] + sizeBtn}>
                {props.text}
            </button>
        </div>
    )
}