import axios from "axios";
import { RemoteNew } from '../types';

export const API = axios.create({
    baseURL: "https://gnews.io/api/v4",
    params: {
        q: 'watches',
        token: process.env.NEXT_PUBLIC_GNEWS_KEY,
    },
});

export const getPosts = async (q = "watches") : Promise<RemoteNew[]> => {
    let posts
    try {
        posts = await API.get("/search", {
            params: {
                q: q,
            },
        })
    }
    catch(e){
        console.error(e)
    }
    return posts?.data?.articles as RemoteNew[]
};
