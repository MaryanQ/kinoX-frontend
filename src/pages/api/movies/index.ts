import { RequestHandler } from "express";
import { Movie } from "../../../constants/models/Movies";
import { movies } from "../../../constants/movies";

interface NextApiRequest {
  method: string;
}

interface NextApiResponse<T> {
  status: (code: number) => NextApiResponse<T>;
  json: (data: T) => void;
}

const handler: RequestHandler<NextApiRequest, NextApiResponse<Movie[]>> = (
  req,
  res
) => {
  if (req.method === "GET") {
    res.status(200).json(movies);
  }
};

export default handler;
