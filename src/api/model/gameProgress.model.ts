export interface GameProgress<T> {
    total: number,
    actual: number,
    entry: T,
}