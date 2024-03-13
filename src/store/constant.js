const KEY = ""

export const TMDB_POSTER = "https://image.tmdb.org/t/p/original/"
export const YT_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key="+KEY

export const TMDB_API = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: ''
  }
};
