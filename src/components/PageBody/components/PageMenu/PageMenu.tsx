"use client"
import { MenuOptions } from '@/models/PageBodyProps'
import React, { JSX, useState, useRef, useEffect } from 'react'

interface PageMenuProps {
  menuOptions: MenuOptions[];
}

function PageMenu({ menuOptions }: PageMenuProps) {
    const [actualContent, setActualContent] = useState<number>(0);
    const [indicatorStyle, setIndicatorStyle] = useState({ width: 0, left: 0 });
    const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

    useEffect(() => {
        const activeButton = buttonRefs.current[actualContent];
        if (activeButton) {
            const { offsetWidth, offsetLeft } = activeButton;
            setIndicatorStyle({
                width: offsetWidth,
                left: offsetLeft
            });
        }
    }, [actualContent]);

    const handleOptionClick = (index: number) => {
        setActualContent(index);
    };

    return (
        <div className="flex justify-center items-center flex-col gap-4 ">
            <div className="w-full flex items-center justify-start relative">
                <div 
                    className="absolute top-0 h-full bg-elevation-2 rounded transition-all duration-300 ease-in-out z-0"
                    style={{
                        width: indicatorStyle.width,
                        transform: `translateX(${indicatorStyle.left}px)`
                    }}
                />
                
                {menuOptions.map((option, index) => (
                    <button 
                        ref={(el) => (buttonRefs.current[index] = el)}
                        onClick={() => handleOptionClick(index)} 
                        className="px-4 py-2 rounded hover:bg-elevation-2 transition-colors cursor-pointer relative z-10 flex gap-2 justify-center items-center" 
                        key={index}
                    >
                        {option.icon ? <>{option.icon}</> : <></>}{option.name}
                    </button>
                ))}
            </div>
            <div className="w-full h-full">
                {menuOptions[actualContent].content}
            </div>
        </div>
    )
}

export default PageMenu