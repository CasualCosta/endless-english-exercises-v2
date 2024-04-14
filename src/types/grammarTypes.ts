export type Adjective = {
    adjective: string,
}

export type ShortAdjective = Adjective & {
    comparative: string,
    superlative: string
}