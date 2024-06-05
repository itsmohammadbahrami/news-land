import { INewsCategory } from "../news/news.type";

export interface IFiltersState {
    category: INewsCategory;
    date?: {
        start: string;
        end: string;
    },
    source: string;
    openDrawer: boolean;
}