import type { StoredSong } from "@prisma/client";
import { Home } from "./Home";

const getInitialSongs = async function (): Promise<
  { data: StoredSong[]; error: undefined } | { error: string; data: undefined }
> {
  try {
    return await fetch("http://localhost:3000/api/missing-songs", {
      cache: "no-store",
    }).then((res) => res.json());
  } catch (e) {
    console.error(e);
    return { error: (e as Error).message, data: undefined };
  }
};

export default async function Root({}) {
  const missingSongs = await getInitialSongs();

  return (
    <>
      <Home missingSongs={missingSongs.data || []} />
    </>
  );
}
