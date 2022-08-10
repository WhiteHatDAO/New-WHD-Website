export const FormatYMD = (date: Date) => {
    return String([date.getDate(), date.getMonth(), date.getFullYear()].join("-"))
}

export const FormatNumber = (number: string) => {
    if(parseFloat(number) >= 1000000000) {
        return parseInt(number) / 1000000000
    } else if(parseInt(number) >= 1000000 && parseInt(number) < 1000000000) {
        return parseInt(number) / 1000000
    } else {
        return parseFloat(number)
    }
}