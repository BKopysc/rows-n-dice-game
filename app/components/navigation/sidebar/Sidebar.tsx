import SidebarButton from "./SidebarButton";


export interface SidebarProps {
    isOpen: boolean;
    toggle: () => void;
}

export default function Sidebar(props: SidebarProps): JSX.Element {

    return (
        <div className={`fixed top-20 right-0 h-full w-40 bg-gray-700 z-50 transform transition-transform duration-300 ease-in-out ${props.isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <ul className="text-gray-300">
                <li className="p-5 hover:bg-gray-700">
                    <a href="/offline">Offline</a>
                </li>
                <li className="p-5 hover:bg-gray-700">
                    <a href="/online">Online</a>
                </li>
                <li className="p-5 hover:bg-gray-700">
                    <a href="/dice">Dice</a>
                </li>
                <li className="p-5 hover:bg-gray-700">
                    <a href="/about">About</a>
                </li>
            </ul>
        </div>
    )
}