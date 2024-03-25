import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getHalls } from "../services/apiFacade";
import { Hall } from "../services/apiFacade";
import BigHall from "../layout/BigHall";

import NavbarAll from "../layout/NavbarAll";

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

  // Function to calculate total price based on selected seats

  useEffect(() => {}, [halls]);

  return (
    <>
      <NavbarAll />

      {/* Pass totalPrice as prop */}
      <BigHall />
      <ul>
        {halls.map((hall) => (
          <li key={hall.id}>
            <Link to={`/hall/${hall.id}`}>
              {`${hall.id} - Number of Seats: ${hall.capacity}`}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Halls;
