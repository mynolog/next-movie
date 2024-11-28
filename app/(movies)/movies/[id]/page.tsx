import { Suspense } from "react";
import MovieInfo, {
  getMovie,
} from "../../../../components/movie/info/movie-info";
import MovieVideos from "../../../../components/movie/videos/movie-videos";

type MovieDetailProps = {
  params: {
    id: string;
  };
};

export async function generateMetadata({ params: { id } }: MovieDetailProps) {
  const movie = await getMovie(id);
  return {
    title: movie.title,
  };
}

export default async function MovieDetail({
  params: { id },
}: MovieDetailProps) {
  return (
    <div>
      <Suspense fallback={<h1>Loading Movie Info</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading Movie Videos</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
