export const getArray = (json: string): string[] => {
    return JSON.parse(json.replace(/'/g, '"'));
}