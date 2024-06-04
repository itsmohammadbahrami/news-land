export type INewsCategory = 'All' | 'News.org' | 'The Guardian' | 'New York Times';

export interface INews {
    title: string;
    description: string;
    imageUrl: string;
    source: string;
    category: INewsCategory;
    newsUrl: string;
    date: string;
}

export interface INewsState {
    loading?: boolean;
    news?: INews[];
}