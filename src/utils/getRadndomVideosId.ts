export const getRandomVideosId = (length:number, max:number):number[] => {
    return [...new Array(length)].map(()=>Math.round(Math.random()* max))
}
