import Link from "next/link";
import DaftarProduk from "./shop/daftarProduk";
// import { useRouter } from "next/router";

export default function Home() {
  // const router = useRouter();
  // const handleClickBayar = () => {
  //   router.push ("/shop/daftarProduk")
  // };

  return (
    <>
      <div className="flex items-center justify-between px-0 py-5 mb-0 bg-slate-400">
        <h1 className="ml-10 text-4xl font-bold">Warung Berkah</h1>
        <button className="px-4 py-1 mt-2 mr-10 text-white bg-blue-700 rounded-full">
          <Link href={"/navbar/createFood"}>Create Food</Link>
        </button>
      </div>

      <DaftarProduk />
    </>
  );
}
