import axios from "axios";

axios.defaults.baseURL = 'https://pixabay.com/api/';

export default async function getImagesByQuery(query, page) {
    const result =  await axios.get("", {
        params: {
            key: '53365397-01e23b351b4d3bf3f9d6eb3f7',
            q: query,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true,
            page: page,
            per_page: 15,
        }
    })
    return result.data;
};