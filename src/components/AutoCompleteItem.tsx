import React, { useRef, useEffect } from 'react'

interface AutoCompleteItemProps {
    item: string
    focus: boolean
    setInput: (input: string) => void
    onKeyDown: (e: React.KeyboardEvent<Element>) => void
}

export const AutoCompleteItem: React.FC<AutoCompleteItemProps> = ({
    item,
    focus,
    setInput,
    onKeyDown,
}) => {
    const ref = useRef<HTMLLIElement>(null)

    useEffect(() => {
        if (focus) {
            ref.current?.focus()
            console.log('focus')
            console.log(ref.current)
        }
    }, [focus])

    return (
        <li
            tabIndex={focus ? 0 : -1}
            onKeyDown={(e) => onKeyDown(e)}
            onClick={() => setInput(item)}
            ref={ref}
        >
            {item}
        </li>
    )
}
