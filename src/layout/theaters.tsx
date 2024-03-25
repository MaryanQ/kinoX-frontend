import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Theaters = () => {
  const [userLocation, setUserLocation] = useState("Vælg biograf");
  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setUserLocation(event.target.value);
    navigate(event.target.value); // Navigate to selected location
  };

  return (
    <div>
      <select value={userLocation} onChange={handleChange}>
        <optgroup label="vælg biograf">
          <option value="/">ANM Cinemaxx Deluxe København</option>
          <option value="/HomeAarhus">ANM Cinemaxx Deluxe Aarhus</option>
        </optgroup>
      </select>
    </div>
  );
};

export default Theaters;
