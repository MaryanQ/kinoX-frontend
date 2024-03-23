/*import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getCinemas } from "../services/apiFacade";

export const Cinemas = () => {
 // const [cinemas, setCinemas] = useState<Array<any>>();

  useEffect(() => {
    const fetchCinemas = async () => {
      try {
        const cinemasData = await getCinemas();
        setCinemas(cinemasData);
      } catch (error) {
        console.error("Error fetching cinemas:", error);
      }
    };

    fetchCinemas();
  }, []);

  return (
    <>
      <h2>Cinemas</h2>
      <p>Explore our list of cinemas.</p>

      <ul>
        {cinemas?.map((cinema) => (
          <li key={cinema.id}>
            <Link to={`/cinemas/${cinema.id}`}>{cinema.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};
*/
