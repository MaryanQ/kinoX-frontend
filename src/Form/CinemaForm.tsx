import React, { useEffect, useState } from "react";
import {
  getCinemas,
  addCinema,
  deleteCinema,
  Cinema,
} from "../services/apiFacade";
import { useLocation } from "react-router-dom";

const EMPTY_CINEMA: Cinema = {
  id: 0,
  name: "",
  address: "",
  contact_information: "",
  number_of_halls: 0,
};

export default function CinemaForm() {
  const [formData, setFormData] = useState<Cinema>(EMPTY_CINEMA);
  const cinemaToEdit = useLocation().state || null;

  useEffect(() => {
    // Fetch cinemas when the component mounts
    fetchCinemas();
  }, []);

  useEffect(() => {
    // If a cinema is passed to edit, set the form data accordingly
    if (cinemaToEdit) {
      setFormData(cinemaToEdit);
    }
  }, [cinemaToEdit]);

  const fetchCinemas = async () => {
    try {
      await getCinemas(); // We only need to fetch cinemas to update the state, so we don't store the result in a variable
    } catch (error) {
      console.error("Error fetching cinemas:", error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleDelete = async () => {
    try {
      if (formData.id) {
        await deleteCinema(formData.id);
        setFormData(EMPTY_CINEMA);
        fetchCinemas();
      }
    } catch (error) {
      console.error("Error deleting cinema:", error);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (formData.id) {
        // If there's an ID, it's an existing cinema, so update it
        await addCinema(formData);
      } else {
        // Otherwise, it's a new cinema, so add it
        const newCinema = await addCinema(formData);
        setFormData(EMPTY_CINEMA);
        console.log("New cinema added:", newCinema);
      }
      fetchCinemas(); // Refresh cinemas after adding/updating
    } catch (error) {
      console.error("Error adding/updating cinema:", error);
    }
  };

  return (
    <>
      <h2>Cinema Add/Edit/Delete</h2>
      <form id="cinemaForm" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="contact_information">Contact Information:</label>
          <input
            type="text"
            id="contact_information"
            name="contact_information"
            value={formData.contact_information}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="number_of_halls">Number of Halls:</label>
          <input
            type="number"
            id="number_of_halls"
            name="number_of_halls"
            value={formData.number_of_halls}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
        {formData.id && (
          <button type="button" onClick={handleDelete}>
            Delete
          </button>
        )}
      </form>
      <p>{JSON.stringify(formData)}</p>
    </>
  );
}
