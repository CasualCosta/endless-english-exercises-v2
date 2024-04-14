export const capitalizeFirstLetter = (s:string) => {
    return s.charAt(0).toUpperCase() + s.slice(1)
}

export const getArticle = (word:string) => {
    const w = word[0].toLowerCase();
    if (w === 'a' ||
        w === 'e' ||
        w === 'i' ||
        w === 'o' ||
        w === 'u')
        return 'an'
    return 'a'
}

//array of strings
export const getRandomElement = (array:any[]) => {
    try{
        return array[Math.floor(Math.random() * array.length)]
    }
    catch (error) {
        console.error(error)
    }
}

export const ToWordNumber = (num:number) => {
    
    if(num === 0)
        return 'zero'
    if(num === 1)
        return 'one'
    if(num === 2)
        return 'two'
    if(num === 3)
        return 'three'
    if(num === 4)
        return 'four'
    if(num === 5)
        return 'five'
    if(num === 6)
        return 'six'
    if(num === 7)
        return 'seven'
    if(num === 8)
        return 'eight'
    if(num === 9)
        return 'nine'
    return ''
}

export const getBool = () => {
    return Math.floor(Math.random() * 2) === 0
}

export const getRandomNumber = (minInclusive:number, maxExclusive:number) => {
    return Math.floor(Math.random() * maxExclusive - minInclusive) + minInclusive;
}