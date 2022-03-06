import React, { useRef, useEffect } from 'react'

interface AutoCompleteItemProps {
    item: string
    focus: boolean
    onClick: (item: string) => void

    onKeyDown: (e: React.KeyboardEvent<Element>) => void
}

export const AutoCompleteItem: React.FC<AutoCompleteItemProps> = ({
    item,
    focus,
    onClick,
    onKeyDown,
}) => {
    const ref = useRef<HTMLLIElement>(null)

    useEffect(() => {
        if (focus) {
            ref.current?.focus()
        }
    }, [focus])

    return (
        <li
            tabIndex={focus ? 0 : -1}
            onKeyDown={(e) => onKeyDown(e)}
            onClick={() => onClick(item)}
            ref={ref}
        >
            {item}
        </li>
    )
}
