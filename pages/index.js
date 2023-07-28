import { GridRotate } from "@/components/GridRotate";
import { Navbar } from "@/components/Navbar";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ changeMatriz }) {
  return (

    <main
      className={`flex-col items-center justify-center p-24 max-w-screen-md ${inter.className} container mx-auto`}
    >
      <Navbar />
      <GridRotate
        setInitMatriz={changeMatriz}
      />
    </main>
  );
}
