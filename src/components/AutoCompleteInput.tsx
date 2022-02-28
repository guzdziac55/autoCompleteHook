import { Suggestions } from './types'
import React, { useEffect } from 'react'
import AutoCompleteDropdown from './AutoCompleteDropdown'
import useAutoComplete from '../hooks/useAutoComplete'

interface AutoCompleteInputProps {
    suggestions: Suggestions
    placeholder: string
}

const AutoCompleteInput: React.FC<AutoCompleteInputProps> = ({
    suggestions,
    placeholder,
}) => {
    const [
        onChange,
        onKeyDown,
        input,
        setInput,
        filtered,
        activeIndex,
        setSuggestion,
    ] = useAutoComplete()

    useEffect(() => {
        setSuggestion(suggestions)
    }, [setSuggestion, suggestions])

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
            <AutoCompleteDropdown
                filtered={filtered}
                active={activeIndex}
                setItem={setInput}
            />
        </>
    )
}

export default AutoCompleteInput
