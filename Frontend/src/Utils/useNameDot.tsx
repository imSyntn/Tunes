
export const useNameDot = () => {
    return (text: string, length:number = 26) => {
        if (text.length > length) {
            const textWithDot = text.slice(0, length) + '...'
            return textWithDot;
        } else {
            return text;
        }
    }
}