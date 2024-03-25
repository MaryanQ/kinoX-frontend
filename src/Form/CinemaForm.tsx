import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import {
  getCinemas,
  addCinema,
  deleteCinema,
  Cinema,
} from "../services/apiFacade";

const EMPTY_CINEMA: Cinema = {
  id: 0,
  name: "",
  address: "",
  contact_information: "",
  number_of_halls: 0,
};

const CinemaForm = () => {
  const [formData, setFormData] = useState<Cinema>(EMPTY_CINEMA);
  const [redirectToHome, setRedirectToHome] = useState(false);

  useEffect(() => {
    fetchCinemas();
  }, []);

  const fetchCinemas = async () => {
    try {
      await getCinemas();
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
        await addCinema(formData);
      } else {
        const newCinema = await addCinema(formData);
        setFormData(EMPTY_CINEMA);
        console.log("New cinema added:", newCinema);
      }
      fetchCinemas();
      setRedirectToHome(true); // Set the flag to redirect to home
    } catch (error) {
      console.error("Error adding/updating cinema:", error);
    }
  };

  // If redirectToHome is true, render the Navigate component to redirect to the home page
  if (redirectToHome) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <h2>Cinema</h2>
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
          <label htmlFor="address">By:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
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
    </>
  );
};

export default CinemaForm;
