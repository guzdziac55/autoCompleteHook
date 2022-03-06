import { Suggestions } from './types'
import React, { useEffect } from 'react'
import useAutoComplete from '../hooks/useAutoComplete'
import { AutoCompleteItem } from './AutoCompleteItem'

interface AutoCompleteInputProps {
    suggestions: Suggestions
    placeholder: string
}

const AutoCompleteInput: React.FC<AutoCompleteInputProps> = ({
    suggestions,
    placeholder,
}) => {
    const {
        onChange,
        isShow,
        setIsShow,
        onKeyDown,
        input,
        setInput,
        filtered,
        activeIndex,
        setSuggestion,
    } = useAutoComplete()

    useEffect(() => {
        setSuggestion(suggestions)
    }, [setSuggestion, suggestions])

    const handleClickItem = (item: string) => {
        console.log('colled ? ')
        setIsShow(false)
        setInput(item)
    }

    return (
        <>
            <input
                placeholder={placeholder}
                onKeyDown={(e) => {
                    onKeyDown(e)
                }}
                value={input}
                onChange={(e) => onChange(e)}
            ></input>
            {isShow && (
                <ul>
                    {/* render ul conditionaly when list is show */}
                    {filtered.map((item, index) => (
                        <AutoCompleteItem
                            key={item}
                            item={item}
                            onClick={handleClickItem}
                            focus={activeIndex === index}
                            onKeyDown={onKeyDown}
                        />
                    ))}
                </ul>
            )}
        </>
    )
}

export default AutoCompleteInput
