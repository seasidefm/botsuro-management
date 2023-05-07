export default function Home() {
  return (
    <>
      <section className={`w-full md:w-3/4 md:m-auto`}>
        <h3 className={`text-3xl tracking-wider font-bold`}>
          Missing Song Queue
        </h3>
        <table className={`table-auto w-full mt-5 rounded-xl overflow-hidden`}>
          <thead className={"bg-slate-800"}>
            <tr>
              <th className={"p-3"}>Artist + Song</th>
              <th className={"p-3"}>Date Added</th>
              <th className={"p-3"}>Upload Status</th>
              <th className={"p-3"}>Upload Date</th>
              <th className={"p-3"}>Actions</th>
            </tr>
          </thead>
          <tbody className={`bg-gray-600`}>
            <tr>
              <td className={`p-3`}>Tatsuro Something</td>
              <td className={`p-3`}>Tatsuro Something</td>
              <td className={`p-3`}>Tatsuro Something</td>
              <td className={`p-3`}>Tatsuro Something</td>
              <td className={`p-3 flex justify-center`}>
                <button
                  className={`bg-blue-600 hover:bg-blue-700 p-2 px-4 rounded-md`}
                >
                  Mark Uploaded
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </>
  );
}
