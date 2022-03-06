import filter from './filter'

describe('Testing filter func:', () => {
    let testSuggestions: string[] = ['Dawid', 'Piotr', 'Damian']

    it('returns multiple values', () => {
        expect(filter(testSuggestions, 'Daw').length).toEqual(1) // array length
    })
    it('returns single values', () => {
        expect(filter(testSuggestions, 'Daw')).toStrictEqual(['Dawid'])
    })
    it('returns empty array', () => {
        expect(filter(testSuggestions, 'Za')).toStrictEqual([])
    })
})
