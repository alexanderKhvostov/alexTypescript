export interface ITodo {
    title: string
    id: number
    completed: boolean
}

export interface IAction {
    type: string
    todo?: ITodo
    error?: string,
    todos?: ITodo[],
    id?: number,
}
export interface ITodosState {
    todos: ITodo[],
    error: string,
    loading: boolean,
}