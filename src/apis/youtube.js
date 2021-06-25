import axios from 'axios';
const KEY ="AIzaSyB2S9UkrAR81__Jh0WdotmjAr_-T7WNdnI";

export default axios.create({
    baseURL:"https://www.googleapis.com/youtube/v3",
    params: {
        part: 'snippet',
        maxResults:5,
        key:KEY
    }
});
