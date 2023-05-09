import { MissingSongTable } from "./Table";
import { DBInteractor } from "@/lib/server";

export const revalidate = 600; // revalidate every 5 minutes

const getInitialSongs = async function () {
  const db = new DBInteractor();

  return await db.getMissingSongQueue();
};

export default async function MissingSongQueue() {
  const missingSongs = await getInitialSongs();
  return (
    <section className={`w-full mt-20 md:w-3/4 md:mx-auto`}>
      <h3 className={`text-3xl tracking-wider font-bold`}>
        Missing Song Queue
      </h3>
      <p className={`mt-5`}>
        These songs are added using the{" "}
        <code className={`bg-slate-500 p-1 rounded-md`}>?add</code> command
      </p>
      {missingSongs.data ? (
        <MissingSongTable missingSongs={missingSongs.data} />
      ) : (
        <p>Error?</p>
      )}
    </section>
  );
}
