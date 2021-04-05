import axios from 'axios';

const KEY = 'AIzaSyCKgGdgzXYCWoJ8DwUBHK79c9YXWM1Y4w4';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  params: {
    part: 'snippet',
    maxResults: 12,
    key: KEY,
  },
});
