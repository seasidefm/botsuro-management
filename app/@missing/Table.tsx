"use client";

import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import {
  faUpRightFromSquare,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { StoredSong } from "@prisma/client";
import Link from "next/link";

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
                <Link
                  href="https://console.acrcloud.com/avr?region=us-west-2#/file-buckets/City%20Pop?id=20056&metadata_template=title,artist,album,year"
                  target="_blank"
                >
                  <button
                    className={`bg-blue-500 hover:bg-blue-600 p-2 px-3 rounded-md`}
                  >
                    <FontAwesomeIcon icon={faUpRightFromSquare} />
                  </button>
                </Link>

                <button
                  className={`bg-green-600 hover:bg-green-700 p-2 px-3 rounded-md ml-2`}
                >
                  <FontAwesomeIcon icon={faCheck} />
                </button>
                <button className={`bg-red-600 p-2 px-3 rounded-md ml-2`}>
                  <FontAwesomeIcon icon={faTrashCan} />
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
