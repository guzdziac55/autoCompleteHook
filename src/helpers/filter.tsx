import { Suggestions } from '../components/types'

function filterList(suggestions: Suggestions, input: string) {
    const filtered = suggestions.filter((name) =>
        name.toLowerCase().includes(input.toLowerCase())
    )

    return filtered
}
export default filterList
