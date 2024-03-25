import { useState, useEffect } from "react";

const Theaters = () => {
  const [userLocation, setUserLocation] = useState("Vælg biograf");

  useEffect(() => {
    getUserLocation();
  }, []);

  const getUserLocation = () => {
    // Check if geolocation is supported by the browser
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { longitude } = position.coords;
          // You can use latitude and longitude to determine the user's location
          // For simplicity, let's assume the user is in Copenhagen if longitude is greater than 0
          if (longitude > 0) {
            setUserLocation("ANM Cinemaxx Deluxe København");
          } else {
            setUserLocation("ANM Cinemaxx Deluxe Aarhus");
          }
        },
        (error) => {
          console.log("Error getting user location:", error);
        }
      );
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  };
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setUserLocation(event.target.value);
  };

  return (
    <div>
      <select value={userLocation} onChange={handleChange}>
        <optgroup label="Din valg">
          <option value={userLocation}>{userLocation}</option>
        </optgroup>
        <optgroup label="vælg biograf">
          <option value="ANM Cinemaxx Deluxe København">
            ANM Cinemaxx Deluxe København
          </option>
          <option value="ANM Cinemaxx Deluxe Aarhus">
            ANM Cinemaxx Deluxe Aarhus
          </option>
          {/* Add cinema form as an option */}
          <option disabled>--- Tilføj Biograf ---</option>
          <option value="cinema-form">
            Biografens navn:{" "}
            <input type="text" placeholder="Indtast biografens navn" />
          </option>
        </optgroup>
      </select>
    </div>
  );
};

export default Theaters;
