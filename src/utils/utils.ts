export const FormatYMD = (date: string) => {
    const data = new Date(date)
    return String([data.getDate(), data.getMonth(), data.getFullYear()].join("-"))
}

export const FormatNumber = (number: string) => {
    if(parseFloat(number) >= 1000000000) {
        return String(parseInt(number) / 1000000000) + "M"
    } else if(parseInt(number) >= 1000000 && parseInt(number) < 1000000000) {
        return parseInt(number) / 1000000
    } else {
        return parseFloat(number)
    }
}

export const getSubAddress = (str: string) => {
    return `${str.substring(0, 5)}...${str.substring(
        str.length - 3,
        str.length
    )}`
}