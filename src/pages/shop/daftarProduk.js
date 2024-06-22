import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import FoodCard from "../../component/foodCard"; // Pastikan path import sesuai dengan struktur direktori Anda

const DaftarProduk = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const router = useRouter();

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://api-bootcamp.do.dibimbing.id/api/v1/foods",
          {
            headers: {
              apiKey: "w05KkI9AWhKxzvPFtXotUva-",
            },
          }
        );
        setLoading(false);
        if (Array.isArray(res?.data?.data)) {
          setData(res.data.data);
        } else {
          console.error("Data fetched is not an array:", res.data);
        }
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto">
      <h1 className="mt-10 mb-4 text-2xl font-semibold text-center">Daftar Makanan</h1>
      <div className="grid grid-cols-3 gap-4">
        {data.map((food) => (
          <FoodCard
            key={food._id}
            food={food}
            onClick={() => router.push(`/food/${food.id}`)}
          />
        ))}
      </div>
    </div>
  );
};

export default DaftarProduk;




