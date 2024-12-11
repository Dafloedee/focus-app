import axios from "axios";

const deezerUrl = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com';

export const fetchTracks = async (query) => {
    try{
        const response = await axios.get(`${deezerUrl}/search`, {
            params: {
                q: 'eminem',
                limit: 10,
                index: 0
            },
        });
        console.log(response);
        return response;
    } catch(error){
        console.error(error);
        return [];
    }
   
}