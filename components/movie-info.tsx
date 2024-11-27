import type { Movie } from "../types/Movie";
import { API_URL } from "../app/(home)/page";

async function getMovie(id: string): Promise<Movie> {
  console.log(`fetching movie: ${Date.now()}`);
  try {
    const res = await fetch(`${API_URL}/${id}`);
    const data: Movie = await res.json();
    return data;
  } catch (e) {
    console.error(e);
  }
}

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);
  return <h6>{JSON.stringify(movie)}</h6>;
}
