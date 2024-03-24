import { API_URL } from "../settings";
import { makeOptions, handleHttpErrors } from "./fetchUtilis";

const Movies_URL = API_URL + "/movies";
const Hall_URL = `${API_URL}/hall`;
const Cinema_URL = `${API_URL}/cinema`;
const Showtimes_URL = `${API_URL}/showtimes`;
const Bookings_URL = `${API_URL}/bookings`;

interface Movie {
  id: number;
  title: string;
  year: string;
  genre: string;
  director: string;
  plot: string;
  poster_url: string;
}

interface Hall {
  id: number;
  name: string;
  numberOfSeats: number;
  number_of_rows: number;
  number_of_columns: number;
  has_cowboy_seats: boolean;
  has_sofa_seats: boolean;
  cowboy_seat_price: number;
  regular_seat_price: number;
  sofa_seat_price: number;
  can_be_Split: boolean;
}

interface Booking {
  id: number;
  customerName: string;
  seatId: string;
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

interface Showtime {
  id: number;
  hallId: number;
  startTime: string;
  endTime: string;
  day: string;
  movieId: number;
  availableSeats: number[];
  bookedSeats: number[];
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

export async function getShowtimes(): Promise<Showtime[]> {
  try {
    const res = await fetch(Showtimes_URL);
    if (!res.ok) {
      throw new Error("Fetch request failed");
    }

    const showtimesData: Showtime[] = await res.json();
    console.log("Showtimes fetched successfully:", showtimesData);
    return showtimesData;
  } catch (error) {
    console.error("Error fetching showtimes:", error);
    throw error;
  }
}

export async function addShowtime(newShowtime: Showtime): Promise<void> {
  try {
    const res = await fetch(Showtimes_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newShowtime),
    });
    if (!res.ok) {
      throw new Error("Add showtime request failed");
    }
    console.log("Showtime added successfully");
  } catch (error) {
    console.error("Error adding showtime:", error);
    throw error;
  }
}

export async function deleteShowtime(id: number): Promise<void> {
  try {
    const res = await fetch(`${Showtimes_URL}/${id}`, {
      method: "DELETE",
    });
    if (!res.ok) {
      throw new Error("Delete showtime request failed");
    }
    console.log("Showtime deleted successfully");
  } catch (error) {
    console.error(`Error deleting showtime with ID ${id}:`, error);
    throw error;
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
  getHalls,
  getHall,
  addHall,
  deleteHall,
  getCinemas,
  getCinema,
  addCinema,
  deleteCinema,
  getShowtimes,
  addShowtime,
  deleteShowtime,
};
export type { Movie, Booking, Hall, Cinema, Showtime };
