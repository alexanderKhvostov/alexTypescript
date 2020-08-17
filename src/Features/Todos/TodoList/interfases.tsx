export interface TodoListInterface {
    todos: any[],
    onComplete(id: number): void,
    onDelete(id: number): void,
};
