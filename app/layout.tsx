import { Suspense } from "react";
import { Inter } from "next/font/google";
import MissingSongsLoading from "./@missing/loading";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Botsuro Management",
  description: "The management app for Botsuro2",
};

export default function RootLayout(props: {
  children: React.ReactNode;
  missing: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.2.1/css/fontawesome.min.css"
          integrity="sha384-QYIZto+st3yW+o8+5OHfT6S482Zsvz2WfOzpFSXMF9zqeLcFV0/wlZpMtyFcZALm"
          crossOrigin="anonymous"
        ></link>
      </head>
      <body className={inter.className + " min-h-screen"}>
        <div className={`flex flex-col h-screen`}>
          <header>
            <nav className={`flex space-between p-4 px-6`}>
              <h2 className={`font-bold text-2xl`}>Botsuro Management</h2>
            </nav>
          </header>

          <main className="flex flex-col flex-1 items-center justify-between p-6">
            {/* {props.children} */}
            <Suspense fallback={<MissingSongsLoading />}>
              {props.missing}
            </Suspense>
          </main>

          <footer className={`text-center mt-auto h-28`}>
            <p>Copyright 2023 SeasideFM</p>
            <a
              className={`text-purple-600`}
              href={"http://twitch.tv/Duke_Ferdinand"}
            >
              Coded by DukeFerdinand
            </a>
          </footer>
        </div>
      </body>
    </html>
  );
}
