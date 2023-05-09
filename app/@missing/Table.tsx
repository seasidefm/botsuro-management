"use client";

import type { StoredSong } from "@prisma/client";

interface MissingSongQueueProps {
  missingSongs: StoredSong[];
}

export const MissingSongTable = (props: MissingSongQueueProps) => {
  const { missingSongs } = props;
  return (
    <table className={`table-auto w-full mt-16 rounded-xl overflow-hidden`}>
      <thead className={"bg-slate-800"}>
        <tr>
          <th className={"p-3"}>Artist + Song</th>
          <th className={"p-3 text-left"}>Date Added</th>
          <th className={"p-3"}>Upload Status</th>
          <th className={"p-3"}>Actions</th>
        </tr>
      </thead>
      <tbody className={`bg-gray-600`}>
        {missingSongs.map((song) => {
          const date = new Date(song.createdAt);
          return (
            <tr key={song.id}>
              <td className={`p-3 font-bold text-center`}>{song.storedSong}</td>
              <td className={`p-3 text-left`}>
                {date.toLocaleDateString()} at {date.toLocaleTimeString()}
              </td>
              <td className={`p-3 text-center`}>
                {song.isUploaded ? "Uploaded" : "Not Uploaded"}
              </td>
              <td className={`p-3 flex justify-center`}>
                <button
                  className={`bg-blue-600 hover:bg-blue-700 p-2 px-4 rounded-md`}
                >
                  Mark Uploaded
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
