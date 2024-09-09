'use client';
interface CheckboxButtonProps {
    clickAction: () => void;
    checked: boolean;
    text: string;
    uncheckedSvg: JSX.Element;

}

export default function CheckboxButton(props: CheckboxButtonProps) {
    const uncheckedColors = "bg-stone-600 hover:bg-stone-700 text-white py-2 px-3 rounded flex justify-center items-center  gap-x-2";
    const checkedColors = "bg-green-600 hover:bg-green-700 text-white py-2 px-3 rounded flex justify-center items-center  gap-x-2";

    return (
        <button className={props.checked ? checkedColors : uncheckedColors}
            onClick={props.clickAction}>
            <span>{props.text}</span>
            {props.checked ?
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12l3 3l5-5" />
                </svg>
                :
                props.uncheckedSvg
            }

        </button>
    )
}