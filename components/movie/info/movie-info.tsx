import type { Movie } from "../../../types/Movie";
import styles from "./movie-info.module.css";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getMovie(id: string): Promise<Movie> {
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
  return (
    <div className={styles.container}>
      <img
        className={styles.poster}
        src={movie.poster_path}
        alt={movie.title}
      />
      <div className={styles.info}>
        <h1 className={styles.title}>{movie.title}</h1>
        <h3>⭐️ {movie.vote_average.toFixed(1)}</h3>
        <p>{movie.overview}</p>
      </div>
    </div>
  );
}
