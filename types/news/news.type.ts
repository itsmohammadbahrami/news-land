export interface INews {
    title: string;
    description: string;
    imageUrl: string;
    source: string;
    category: 'News.org' | 'The Guardian' | 'New York Times';
    newsUrl: string;
}