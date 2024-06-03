export interface INews {
    title: string;
    description: string;
    imageUrl: string;
    source: string;
    category: 'News.org' | 'TheGuardian' | 'New York Times';
    newsUrl: string;
}