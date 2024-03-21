import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getHalls } from "../services/apiFacade";
import { Hall } from "../services/apiFacade"; // Import Hall interface

export const Halls = () => {
  const [halls, setHalls] = useState<Hall[]>([]);

  useEffect(() => {
    const fetchHalls = async () => {
      try {
        const hallsData = await getHalls();
        setHalls(hallsData);
      } catch (error) {
        console.error("Error fetching halls:", error);
      }
    };

    fetchHalls();
  }, []);

  return (
    <>
      <h2>Halls</h2>
      <p>Explore our list of halls.</p>

      <ul>
        {halls.map((hall) => (
          <li key={hall.id}>
            <Link
              to={`/hall/${hall.id}`}
            >{`${hall.name} - Number of Seats: ${hall.numberOfSeats}`}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Halls;
