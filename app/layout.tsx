import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Botsuro Management",
  description: "The management app for Botsuro2",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className + " min-h-screen"}>
        <div className={`flex flex-col`}>
          <header>
            <nav className={`flex space-between p-4 px-6`}>
              <h2 className={`font-bold text-2xl`}>Botsuro Management</h2>
            </nav>
          </header>

          <main className="flex flex-col flex-1 items-center justify-between p-6">
            {children}
          </main>

          <footer className={`text-center`}>
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
