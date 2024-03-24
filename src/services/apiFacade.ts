import { API_URL } from "../settings";
import { makeOptions, handleHttpErrors } from "./fetchUtilis";

const Movies_URL = API_URL + "/movies";
const Hall_URL = `${API_URL}/halls`;
const Cinema_URL = `${API_URL}/cinema`;
const MovieScreening_URL = `${API_URL}/movie_screenings`;
const Bookings_URL = `${API_URL}/bookings`;
const Seats_URL = `${API_URL}/seats`;

interface Movie {
  id: number;
  title: string;
  year: string;
  genre: string;
  director: string;
  plot: string;
  poster_url: string;
  hall: Hall[];
}

interface Hall {
  id: number;
  name: string;
  capacity: number;
}

interface Booking {
  id: number;
  customerName: string;
  seatId: number;
  movieId: number;
  price: number;
  bookingTime: string;
}

interface Cinema {
  id: number;
  name: string;
  address: string;
  contact_Information: string;
  number_Of_Halls: number;
}

interface MovieScreening {
  id: number;
  movieTitle: string;
  startTime: Date;
  endTime: Date;
  ticketPrice: number;
  availableSeats: number;
  bookedSeats: number;
  language: string;
  seats: Seat[];
}

interface Seat {
  id: number;
  type: string;
  capacity: number;
  price: number;
  movieScreening: MovieScreening;
}

let movies: Movie[] = [];

//movies
export async function getMovies(): Promise<Movie[]> {
  if (movies.length > 0) return [...movies];

  try {
    const res = await fetch(Movies_URL);
    if (!res.ok) {
      throw new Error("Fetch request failed");
    }

    const moviesData: Movie[] = await res.json();
    console.log("Movies fetched successfully:", moviesData);
    movies = moviesData;
    return movies;
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw error;
  }
}

export async function getMovie(id: number): Promise<Movie> {
  try {
    const res = await fetch(`${Movies_URL}/${id}`);
    if (!res.ok) {
      throw new Error("Fetch request failed");
    }
    const movieData: Movie = await res.json();
    return movieData;
  } catch (error) {
    console.error(`Error fetching movie with ID ${id}:`, error);
    throw error;
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

//seat
export async function getMovieScreening(id: number): Promise<MovieScreening> {
  try {
    const response = await fetch(`${MovieScreening_URL}/${id}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch movie screening with ID ${id}`);
    }
    const data: MovieScreening = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching movie screening with ID ${id}:`, error);
    throw error;
  }
}
export async function getMovieScreenings(): Promise<MovieScreening[]> {
  try {
    const response = await fetch(MovieScreening_URL);
    if (!response.ok) {
      throw new Error("Failed to fetch movie screenings");
    }
    const data: MovieScreening[] = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching movie screenings:", error);
    throw error;
  }
}

export async function addMovieScreening(
  newMovieScreening: MovieScreening
): Promise<MovieScreening> {
  try {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newMovieScreening),
    };
    const response = await fetch(MovieScreening_URL, options);
    if (!response.ok) {
      throw new Error("Failed to add movie screening");
    }
    const data: MovieScreening = await response.json();
    return data;
  } catch (error) {
    console.error("Error adding movie screening:", error);
    throw error;
  }
}

export async function deleteMovieScreening(id: number): Promise<void> {
  try {
    const options = {
      method: "DELETE",
    };
    const response = await fetch(`${MovieScreening_URL}/${id}`, options);
    if (!response.ok) {
      throw new Error("Failed to delete movie screening");
    }
  } catch (error) {
    console.error(`Error deleting movie screening with ID ${id}:`, error);
    throw error;
  }
}

//bookings
export async function getBookings(): Promise<Booking[]> {
  try {
    const res = await fetch(Bookings_URL);
    if (!res.ok) {
      throw new Error("Fetch request failed");
    }

    const bookingsData: Booking[] = await res.json();
    console.log("Bookings fetched successfully:", bookingsData);
    return bookingsData;
  } catch (error) {
    console.error("Error fetching bookings:", error);
    throw error;
  }
}

export async function getBooking(id: number): Promise<Booking> {
  try {
    const res = await fetch(`${Bookings_URL}/${id}`);
    if (!res.ok) {
      throw new Error("Fetch request failed");
    }
    const bookingData: Booking = await res.json();
    return bookingData;
  } catch (error) {
    console.error(`Error fetching booking with ID ${id}:`, error);
    throw error;
  }
}

export async function addBooking(newBooking: Booking): Promise<Booking> {
  const options = makeOptions("POST", newBooking);
  return fetch(Bookings_URL, options).then(handleHttpErrors);
}

export async function deleteBooking(id: number): Promise<void> {
  const options = makeOptions("DELETE", null);
  return fetch(`${Bookings_URL}/${id}`, options).then(handleHttpErrors);
}

//seat
export async function getSeats(): Promise<Seat[]> {
  try {
    const res = await fetch(Seats_URL);
    if (!res.ok) {
      throw new Error("Fetch request failed");
    }
    const seatsData: Seat[] = await res.json();
    console.log("Seats fetched successfully:", seatsData);
    return seatsData;
  } catch (error) {
    console.error("Error fetching seats:", error);
    throw error;
  }
}

export async function getSeat(id: number): Promise<Seat> {
  try {
    const res = await fetch(`${Seats_URL}/${id}`);
    if (!res.ok) {
      throw new Error("Fetch request failed");
    }
    const seatData: Seat = await res.json();
    return seatData;
  } catch (error) {
    console.error(`Error fetching seat with ID ${id}:`, error);
    throw error;
  }
}

async function addSeat(newSeat: Seat): Promise<Seat> {
  const method = newSeat.id ? "PUT" : "POST";
  const options = makeOptions(method, newSeat);
  const URL = newSeat.id ? `${Seats_URL}/${newSeat.id}` : Seats_URL;
  return fetch(URL, options).then(handleHttpErrors);
}

async function deleteSeat(id: number): Promise<void> {
  const options = makeOptions("DELETE", null);
  return fetch(`${Seats_URL}/${id}`, options).then(handleHttpErrors);
}

//halls
export async function getHalls(): Promise<Hall[]> {
  try {
    const res = await fetch(Hall_URL);
    if (!res.ok) {
      throw new Error("Failed to fetch halls");
    }
    const hallsData: Hall[] = await res.json();
    return hallsData;
  } catch (error) {
    console.error("Error fetching halls:", error);
    throw error;
  }
}

export async function getHall(id: number): Promise<Hall> {
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

export async function getMovieById(id: number): Promise<Movie | null> {
  try {
    const response = await fetch(`${Movies_URL}/${id}`); // Use id parameter in the URL
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

export default {
  getMovies,
  getMovie,
  addMovie,
  deleteMovie,
  getBooking,
  getBookings,
  addBooking,
  deleteBooking,
  getMovieScreening,
  getMovieScreenings,
  addMovieScreening,
  deleteMovieScreening,
  getSeat,
  getSeats,
  addSeat,
  deleteSeat,
  getHalls,
  getHall,
  addHall,
  deleteHall,
  getCinemas,
  getCinema,
  addCinema,
  deleteCinema,
};
export type { Movie, Booking, Hall, Cinema, Seat, MovieScreening };
