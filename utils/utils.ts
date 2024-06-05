import { INews } from "@/types";

export const getArray = (json: string): string[] =>
    JSON.parse(json.replace(/'/g, '"'));

export const convertNewsApiData = (data: any[]): INews[] => {
    if (!data || !data.length) return []

    return data.map((item: any) => ({
        title: item.title,
        description: item.description,
        imageUrl: item.urlToImage,
        source: item.source.name,
        category: "News.org",
        newsUrl: item.url,
        date: item.publishedAt
    }))
}

export const convertGuardianApiData = (data: any[]): INews[] => {
    if (!data || !data.length) return []

    return data.map((item: any) => ({
        title: item.webTitle,
        description: item?.fields?.body ?? '',
        imageUrl: item?.fields?.thumbnail ?? '',
        source: 'theguardian.com',
        category: "The Guardian",
        newsUrl: item.webUrl,
        date: item.webPublicationDate
    }))
}

export const convertTimesApiData = (data: any[]): INews[] => {
    if (!data || !data.length) return []

    return data.map((item: any) => ({
        title: item.headline?.main ?? '',
        description: item.abstract,
        imageUrl: `https://nytimes.com/${item.multimedia[0].url}`,
        source: 'nytimes.com',
        category: "New York Times",
        newsUrl: item.web_url,
        date: item.pub_date
    }))
}

export const removeDuplicates = (arr: any[] | undefined, key: string) => {
    if (!arr || !arr.length) return

    const seen = new Set();
    return arr.filter(item => {
        const duplicate = seen.has(item[key]);
        seen.add(item[key]);
        return !duplicate;
    });
};

export const isDesktop = (): boolean => window.innerWidth > 768;

export const isMobile = (): boolean => window.innerWidth <= 768;

export const removeEmptyItems = (obj: any): any => {
    return Object.fromEntries(
        Object.entries(obj).filter(([_, value]) => !!value)
    );
}