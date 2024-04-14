export type Question = {
    prompt: string
    answer: string
}

export type Activity = {
    description: string
    example: Question
    getQuestion: () => Question
    amount?: number
}


export type Lesson = {
    title: string
    activities: Activity[]

}


export type Card = {
    id: number,
    image: string,
    alt: string,
    source: string,
    title: string,
    vocabulary: string[],
    grammar: string[]
}