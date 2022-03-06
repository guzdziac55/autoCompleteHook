//
import React, { useState } from 'react'
import filter from './../helpers/filter'

type Suggestions = string[]

const useAutoComplete = () => {
    const [input, setInput] = useState<string>('')
    const [isShow, setIsShow] = useState<boolean>(false)
    const [filtered, setFiltered] = useState<string[]>([])
    const [activeIndex, setActiveIndex] = useState<number>(0)
    const [suggestions, setSuggestion] = useState<Suggestions>([])

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        let filteredArray
        setInput(value)

        if (value.length > 0) {
            filteredArray = filter(suggestions, value) // run filter function
            setFiltered(filteredArray)
            setIsShow(true)
        } else {
            setIsShow(false)
            setFiltered([])
        }

        setActiveIndex(-1)
    }

    const onKeyDown = (e: React.KeyboardEvent<Element>) => {
        const key = e.code

        if (isShow) {
            switch (key) {
                case 'ArrowUp':
                    if (activeIndex > 0) {
                        setActiveIndex((prevIndex) => prevIndex - 1)
                    }
                    break
                case 'ArrowDown':
                    if (activeIndex < filtered.length - 1) {
                        setActiveIndex((prevIndex) => prevIndex + 1)
                    }
                    break
                case 'Enter':
                    setInput(filtered[activeIndex])
                    setIsShow(false)
                    setActiveIndex(0)
                    setFiltered([])
                    break
                case 'Escape':
                    setIsShow(false)
                    setFiltered([])
                    break

                default:
                    break
            }
        }
    }

    return {
        onChange,
        isShow,
        setIsShow,
        onKeyDown,
        input,
        setInput,
        filtered,
        activeIndex,
        setSuggestion,
    } as const
}

export default useAutoComplete
