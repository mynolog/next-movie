import { Metadata } from "next";
import Link from "next/link";

import type { Movie } from "../../types/Movie";

export const metadata: Metadata = {
  title: "Home",
};

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovies(): Promise<Movie[]> {
  try {
    const res = await fetch(API_URL);
    const data: Movie[] = await res.json();
    return data;
  } catch (e) {
    console.error(e);
  }
}

export default async function Home() {
  const movies = await getMovies();
  return (
    <div>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
    </div>
  );
}
