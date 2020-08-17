import { IHorizontalMenuItem } from "../../Malecules/interfaces";

export interface IRoute extends IHorizontalMenuItem {};

export interface INavbar{
    routes: Array<IRoute>
}