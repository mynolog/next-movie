"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import type { Movie } from "../../../types/Movie";
import styles from "./movie-card.module.css";

type MovieCardProps = Pick<Movie, "title" | "id" | "poster_path">;

export default function MovieCard({ title, id, poster_path }: MovieCardProps) {
  const router = useRouter();

  const onClick = () => {
    router.push(`/movies/${id}`);
  };
  return (
    <div className={styles.card} key={id}>
      <img src={poster_path} alt={title} onClick={onClick} />
      <Link href={`/movies/${id}`}>{title}</Link>
    </div>
  );
}
