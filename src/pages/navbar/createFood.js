import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";

const CreateFood = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    imageUrl: "",
    description: "",
    ingredients: "",
  });

  const onSubmit = async (event) => {
    event.preventDefault();

    const ingredientsArray = formData.ingredients.split(",").map((item) => item.trim());

    try {
      const resp = await axios.post(
        "https://api-bootcamp.do.dibimbing.id/api/v1/create-food",
        {
          name: formData.name,
          imageUrl: formData.imageUrl,
          description: formData.description,
          ingredients: ingredientsArray,
        },
        {
          headers: {
            apiKey: "w05KkI9AWhKxzvPFtXotUva-",
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pZnRhaGZhcmhhbkBnbWFpbC5jb20iLCJ1c2VySWQiOiJjYTIzZDdjYy02Njk1LTQzNGItODE2Yy03ZTlhNWMwNGMxNjQiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NjE4NzUzMjF9.wV2OECzC25qNujtyb9YHyzYIbYEV-wud3TQsYv7oB4Q",
          },
        }
      );

      if (resp.status === 200) {
        router.push("/");
      } else {
        console.error("Error creating food:", resp.data);
        alert("There was an error creating the food. Please try again.");
      }
    } catch (error) {
      console.error("Error creating food:", error);
      alert("There was an error creating the food. Please try again.");
    }
  };

  return (
    <form onSubmit={onSubmit} className="flex flex-col items-center">
      <h1>Buat Makanan</h1>
      <input
        onChange={(event) =>
          setFormData((prev) => ({ ...prev, name: event.target.value }))
        }
        className="block mt-2 text-black"
        placeholder="Masukan nama makanan"
      />
      <input
        onChange={(event) =>
          setFormData((prev) => ({ ...prev, imageUrl: event.target.value }))
        }
        className="block mt-2 text-black"
        placeholder="Masukan image Url"
      />
      <input
        onChange={(event) =>
          setFormData((prev) => ({ ...prev, description: event.target.value }))
        }
        className="block mt-2 text-black"
        placeholder="Masukan deskripsi"
      />
      <input
        onChange={(event) =>
          setFormData((prev) => ({ ...prev, ingredients: event.target.value }))
        }
        className="block mt-2 text-black"
        placeholder="Masukan ingredients (comma separated)"
      />
      <button type="submit" className="px-4 py-1 mt-2 bg-blue-700 rounded-full">
        Buat Makanan
      </button>
    </form>
  );
};

export default CreateFood;

