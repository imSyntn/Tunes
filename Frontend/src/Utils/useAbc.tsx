export const useAbc = (str : string) => {
    if (str) {
        const Abc = str.charAt(0).toUpperCase() + str.slice(1)
        return Abc
    }

    return ''
}