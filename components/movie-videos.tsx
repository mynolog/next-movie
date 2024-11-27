import type { Video } from "../types/Movie";
import { API_URL } from "../app/(home)/page";

async function getVideos(id: string): Promise<Video[]> {
  console.log(`fetching vidoes: ${Date.now()}`);
  try {
    const res = await fetch(`${API_URL}/${id}/videos`);
    const data: Video[] = await res.json();
    return data;
  } catch (e) {
    console.error(e);
  }
}

export default async function MovieVideos({ id }: { id: string }) {
  const videos = await getVideos(id);
  return <h6>{JSON.stringify(videos)}</h6>;
}
