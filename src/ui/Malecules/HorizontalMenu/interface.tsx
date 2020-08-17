export interface IItem {
    text: string
    to: string
    exact: boolean
}

export interface IMenu{
    items: Array<IItem>
}