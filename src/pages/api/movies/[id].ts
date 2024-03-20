import type { RequestHandler } from "express";
import { Movie } from "../../../constants/models/Movies";
import { movies } from "../../../constants/movies";

interface NextApiRequest {
  query: {
    id?: string;
  };
  method: string;
  body: {
    seatDetails: any; // Adjust the type according to your data structure
  };
}

interface NextApiResponse<T> {
  status: (code: number) => NextApiResponse<T>;
  json: (data: T) => void;
}

const handler: RequestHandler<
  NextApiRequest,
  NextApiResponse<Movie | undefined>
> = (req, res) => {
  const { id } = req.query;

  if (req.method === "GET") {
    if (typeof id === "string") {
      const movie = movies.find((movie) => movie.id === parseInt(id, 10));
      res.status(200).json(movie);
    }
  } else if (req.method === "PUT") {
    if (typeof id === "string") {
      const movieIndex = movies.findIndex(
        (movie) => movie.id === parseInt(id, 10)
      );
      if (movieIndex !== -1) {
        movies[movieIndex].seats = req.body.seatDetails;
        res.status(200).json(movies[movieIndex]);
      } else {
        res.status(404).json({ error: "Movie not found" });
      }
    }
  }
};

export default handler;
