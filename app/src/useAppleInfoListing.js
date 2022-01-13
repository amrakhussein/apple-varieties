import { useFetch } from "./useFetch";


export function useAppleInfoListing() {
    const { dataState } = useFetch('./appleInfo.json');

    console.log('heowijfjow', dataState)

}