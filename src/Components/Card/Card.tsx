import React, {useEffect, useState} from "react";
import {IconType} from "react-icons/lib";

interface CardInterface {
    name: string,
    icon: IconType,

}

export const Card:React.FC<CardInterface> = (props) => {
    const Icon: IconType = props.icon;

    const [width, setWidth] = useState<number>(window.innerWidth);

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    const isMobile = width <= 768;


    return (
        <div>
            <a
               className="text-sm p-3 h-auto lg:test-lg lg:p-5 block bg-white rounded-lg border border-gray-200 shadow-lg bg-gray-800
                border-gray-700">
                <h5 className="mb-1 text-center text-lg md:text-2xl font-bold tracking-tight text-gray-900 text-white">{props.name}</h5>
            </a>

        </div>
    )

};
