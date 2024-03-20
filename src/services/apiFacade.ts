import { API_URL } from "../settings";
import { makeOptions, handleHttpErrors } from "./fetchUtilis";

const Movies_URL = API_URL + "/movies";
const Hall_URL = `${API_URL}/hall`;
const Cinema_URL = `${API_URL}/cinema`;

interface Movie {
  id: number;
  title: string;
  year: string;
  rated: string;
  released: string;
  runtime: string;
  genre: string;
  director: string;
  writer: string;
  actors: string;
  plot: string;
  language: string;
  country: string;
  awards: string;
  poster: string;
  metascore: string;
  imdb_rating: string;
  imdb_votes: string;
  type: string;
  dvd: string;
  box_office: string;
  production: string;
  website: string;
  response: string;
}

interface Hall {
  id: number;
  name: string;
  numberOfSeats: number;
  numberOfRows: number;
  numberOfColumns: number;
  hasCowboySeats: boolean;
  hasSofaSeats: boolean;
  cowboySeatPrice: number;
  regularSeatPrice: number;
  sofaSeatPrice: number;
  canBeSplit: boolean;
  numberOfRegularSeats: number;
  numberOfVIPSeats: number;
  vipSeatPrice: number;
  has3DTechnology: boolean;
  hasIMAXTechnology: boolean;
}

interface Cinema {
  id: number;
  name: string;
  address: string;
  contact_Information: string;
  number_Of_Halls: number;
}

export async function getMovies(): Promise<Movie[]> {
  try {
    const response = await fetch(Movies_URL);
    if (!response.ok) {
      throw new Error("Failed to fetch movies");
    }
    const movies: Movie[] = await response.json();
    return movies;
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw error; // Rethrow the error to be caught by the caller
  }
}

export async function getMovie(id: number | undefined): Promise<Movie | null> {
  if (!id) {
    console.error("Movie ID is undefined.");
    return null;
  }

  try {
    const response = await fetch(`${Movies_URL}/${id}`);
    if (!response.ok) {
      throw new Error("Failed to fetch movie");
    }
    const movie: Movie = await response.json();
    return movie;
  } catch (error) {
    console.error("Error fetching movie by ID:", error);
    return null;
  }
}

async function addMovie(newMovie: Movie): Promise<Movie> {
  const method = newMovie.id ? "PUT" : "POST";
  const options = makeOptions(method, newMovie);
  const URL = newMovie.id ? `${Movies_URL}/${newMovie.id}` : Movies_URL;
  return fetch(URL, options).then(handleHttpErrors);
}

async function deleteMovie(id: string): Promise<void> {
  const options = makeOptions("DELETE", null);
  return fetch(`${Movies_URL}/${id}`, options).then(handleHttpErrors);
}

async function getHalls(): Promise<Hall[]> {
  return fetch(Hall_URL).then(handleHttpErrors);
}

async function getHall(id: number): Promise<Hall> {
  return fetch(`${Hall_URL}/${id}`).then(handleHttpErrors);
}

async function addHall(newHall: Hall): Promise<Hall> {
  const method = newHall.id ? "PUT" : "POST";
  const options = makeOptions(method, newHall);
  const URL = newHall.id ? `${Hall_URL}/${newHall.id}` : Hall_URL;
  return fetch(URL, options).then(handleHttpErrors);
}

async function deleteHall(id: number): Promise<void> {
  const options = makeOptions("DELETE", null);
  return fetch(`${Hall_URL}/${id}`, options).then(handleHttpErrors);
}

export async function getCinemas(): Promise<Cinema[]> {
  return fetch(Cinema_URL).then(handleHttpErrors);
}

async function getCinema(id: number): Promise<Cinema> {
  return fetch(`${Cinema_URL}/${id}`).then(handleHttpErrors);
}

async function addCinema(newCinema: Cinema): Promise<Cinema> {
  const method = newCinema.id ? "PUT" : "POST";
  const options = makeOptions(method, newCinema);
  const URL = newCinema.id ? `${Cinema_URL}/${newCinema.id}` : Cinema_URL;
  return fetch(URL, options).then(handleHttpErrors);
}

async function deleteCinema(id: number): Promise<void> {
  const options = makeOptions("DELETE", null);
  return fetch(`${Cinema_URL}/${id}`, options).then(handleHttpErrors);
}

export async function getMovieByimdbID(id: string): Promise<Movie | null> {
  try {
    const movies = await getMovies();
    return movies.find((movie) => String(movie.id) === id) || null; // Convert movie.id to string for comparison
  } catch (error) {
    console.error("Error fetching movie by id:", error);
    return null;
  }
}

export default {
  getMovies,
  getMovie,
  addMovie,
  deleteMovie,
  getHalls,
  getHall,
  addHall,
  deleteHall,
  getCinemas,
  getCinema,
  addCinema,
  deleteCinema,
};
export type { Movie, Hall, Cinema };
