import React, { useEffect, useState } from "react";
import { addMovie, deleteMovie, Movie } from "../services/apiFacade";
import { getHalls, Hall } from "../services/apiFacade";
import { useLocation } from "react-router-dom";
import "../styles/MovieForm.css";
const EMPTY_MOVIE = {
  id: 0,
  title: "",
  year: "",
  genre: "",
  director: "",
  plot: "",
  poster_url: "",
  hall: [],
};

const MovieForm = () => {
  const [halls, setHalls] = useState<Hall[]>([]); // State for halls
  const movieToEdit: Movie | null = useLocation().state || null;
  const [formData, setFormData] = useState<Movie>(movieToEdit || EMPTY_MOVIE);

  useEffect(() => {
    getHalls().then((res: Hall[]) => setHalls(res)); // Fetch halls
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleDelete = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (formData.id) {
      await deleteMovie(String(formData.id));
      setFormData({ ...EMPTY_MOVIE });
    }
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const newMovie = await addMovie(formData);
    alert("New movie added");
    console.info("New/Edited Movie", newMovie);
  };

  return (
    <>
      <h2>Movies Add/Edit/Delete</h2>
      <form id="movieForm">
        <div className="form-group">
          <label htmlFor="id">ID:</label>
          <input
            type="text"
            id="id"
            name="id"
            disabled
            value={formData.id || ""}
          />
        </div>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="year">Year:</label>
          <input
            type="text"
            id="year"
            name="year"
            value={formData.year.toString()}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="hall">Hall:</label>
          <select
            id="hall"
            name="hall"
            value={formData.hall.length > 0 ? formData.hall[0].id : ""}
            onChange={handleChange}
            required
          >
            <option value="">Select a hall</option>
            {halls.map((hall: Hall) => (
              <option key={hall.id} value={hall.id}>
                {" "}
                {/* Set value to hall.id */}
                {hall.name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="director">Director:</label>
          <input
            type="text"
            id="director"
            name="director"
            value={formData.director}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="plot">Plot:</label>
          <input
            type="text"
            id="plot"
            name="plot"
            value={formData.plot}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="poster_url">Poster URL:</label>
          <input
            type="text"
            id="poster_url"
            name="poster_url"
            value={formData.poster_url}
            onChange={handleChange}
          />
        </div>
      </form>
      <button type="submit" onClick={handleSubmit} className="movie-form-btn">
        Submit
      </button>
      <button
        className="movie-form-btn"
        onClick={() => {
          setFormData({ ...EMPTY_MOVIE });
        }}
      >
        Cancel
      </button>
      {formData.id && (
        <>
          <button className="movie-form-btn" onClick={handleDelete}>
            Delete
          </button>
        </>
      )}
    </>
  );
};

export default MovieForm;
