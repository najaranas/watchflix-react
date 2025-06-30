const API_KEY = "f813f1f30c94c585e5b45110f00544d8";

export async function fetchData(api) {
  try {
    const response = await fetch(api);
    if (!response.ok) {
      throw new Error("Network response was not ok " + api);
    }
    const json = await response.json();
    return json;
  } catch (error) {
    console.error("Fetch error :", error);
    return null;
  }
}

export async function trendingData() {
  const api = `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`;
  return await fetchData(api);
}

export async function topRatedData() {
  const api = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`;
  return await fetchData(api);
}

export async function upcomingData() {
  const api = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`;
  return await fetchData(api);
}

export async function PopularData() {
  const api = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;
  return await fetchData(api);
}

export async function CategoriesData() {
  const api = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`;
  return await fetchData(api);
}

export async function GenreData(genreID, pageNumber) {
  const api = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${pageNumber}&sort_by=popularity.desc&with_genres=${genreID}&api_key=${API_KEY}`;
  return await fetchData(api);
}

export async function MovieDetailsData(movieId) {
  const api = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`;
  return await fetchData(api);
}

export async function EmbedVideosData(movieId) {
  const api = `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY}`;
  return await fetchData(api);
}

export async function SimilarData(movieId) {
  const api = `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${API_KEY}`;
  return await fetchData(api);
}

export async function MovieCreditsData(movieId) {
  const api = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`;
  return await fetchData(api);
}

export async function SearchData(keyword, pageid) {
  const api = `https://api.themoviedb.org/3/search/movie?query=${keyword}&language=en-US&page=${pageid}&api_key=${API_KEY}`;
  return await fetchData(api);
}
