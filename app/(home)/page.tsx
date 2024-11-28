import { Metadata } from "next";

import type { Movie } from "../../types/Movie";
import MovieCard from "../../components/movie/card/movie-card";
import styles from "./style.module.css";

export const metadata: Metadata = {
  title: "Home",
};

const API_URL = process.env.NEXT_PUBLIC_API_URL;

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
    <div className={styles.container}>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          id={movie.id}
          title={movie.title}
          poster_path={movie.poster_path}
        />
      ))}
    </div>
  );
}
