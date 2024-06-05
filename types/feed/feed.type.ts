import { INewsCategory } from "../news/news.type";

export interface IFeedState {
    category: INewsCategory;
    source: string;
}