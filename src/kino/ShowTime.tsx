import { useEffect, useState } from "react";
import { getShowtimes, Showtime } from "../services/apiFacade";

export const ShowTime = () => {
  const [showtimes, setShowtimes] = useState<Showtime[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchShowtimes = async () => {
      try {
        const showtimesData = await getShowtimes();
        setShowtimes(showtimesData);
        setLoading(false);
      } catch (error: any) {
        setError(error.message ?? "Unknown error occurred");
        setLoading(false);
      }
    };

    fetchShowtimes();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Showtimes</h2>
      <ul>
        {showtimes.map((showtime) => (
          <li key={showtime.id}>
            {showtime.startTime} - {showtime.endTime}
          </li>
        ))}
      </ul>
    </div>
  );
};
