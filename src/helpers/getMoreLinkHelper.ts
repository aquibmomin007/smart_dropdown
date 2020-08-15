
export const getMoreLinkHelper = (totalLength: number, maxLength: number) => {
    return totalLength > maxLength ? (totalLength - maxLength): 0;
}