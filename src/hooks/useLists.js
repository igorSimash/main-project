import {useMemo} from "react";

export const useSortLists = (sort, lists) => {
    return useMemo(() => {
        if (sort)
            return [...lists].sort((a, b) => a[sort].localeCompare(b[sort]));
        else
            return lists;
    }, [sort, lists]);
}

export const useLists = (sort, lists, params) => {
    const sortedLists = useSortLists(sort, lists)
    return useMemo(() => {
        return sortedLists.filter(list => list.title.toLowerCase().includes(params.toLowerCase()))
    }, [sortedLists, params]);
}