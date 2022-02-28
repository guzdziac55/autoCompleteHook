import { Suggestions } from './types'
import { useEffect, useRef } from 'react'
import classes from './AutoCompleteDropdown.module.css'

interface AutoCompleteDropdownProps {
    filtered: Suggestions
    active: number
    onChange: (item: string) => void
}

const AutoCompleteDropdown: React.FC<AutoCompleteDropdownProps> = ({
    filtered,
    active,
    onChange,
}) => {
    const itemsRef = useRef([]) // array of  refs
    //  itemsRef.current[n]

    // useEffect(() => {
    //     itemsRef.current = itemsRef.current.slice(0, filtered.length)
    // }, [filtered])

    // if index === active    => ref.current.focus()   <=////

    useEffect(() => {
        console.log(itemsRef.current[active])
    }, [active])

    return (
        <ul>
            {filtered.map((item: string, index: number) => {
                const activeStyle = index === active ? classes.active : ''

                // we need focus here <=====  ////  from 0 to arraySuggestions.length
                //  if focus === index = >      => focus li === true !
                //  if li === true     =>      ref => current .focus()

                return (
                    <li
                        ref={itemsRef.current[index]}
                        tabIndex={0}
                        onClick={() => {
                            onChange(item)
                        }}
                        className={activeStyle}
                        key={item}
                    >
                        {item}
                    </li>
                )
            })}
        </ul>
    )
}

export default AutoCompleteDropdown
