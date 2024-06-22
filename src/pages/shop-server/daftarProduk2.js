import axios from "axios";
import { useEffect, useState } from "react";

const DaftarProduk = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            try {
                const res = await axios.get("https://api-bootcamp.do.dibimbing.id/api/v1/foods", {
                    headers: {
                        apiKey: "w05KkI9AWhKxzvPFtXotUva-",
                    },
                });
                setLoading(false);
                setData(res.data);
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
        <div>
            <h1>{JSON.stringify(data)}</h1>
        </div>
    );
};

export default DaftarProduk;
