import { Suggestions } from './types'
import classes from './AutoCompleteDropdown.module.css'

interface AutoCompleteDropdownProps {
    filtered: Suggestions
    active: number
    setItem: (item: string) => void
}

const AutoCompleteDropdown: React.FC<AutoCompleteDropdownProps> = ({
    filtered,
    active,
    setItem,
}) => {
    return (
        <ul>
            {filtered.map((item: string, index: number) => {
                const activeStyle = index === active ? classes.active : ''

                return (
                    <li
                        onClick={() => {
                            setItem(item)
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
