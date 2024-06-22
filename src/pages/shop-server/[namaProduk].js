import axios from "axios";

export async function getServerSideProps(context) {
  const resp = await axios.get(
    `https://api-bootcamp.do.dibimbing.id/api/v1/foods/${context.params.namaProduk}`,
    {
      headers: {
        apiKey: "w05KkI9AWhKxzvPFtXotUva-",
      },
    }
  );
  return {
    props: { food: resp?.data?.data },
  };
}

const DetailProduk = ({ food }) => {
  return (
    <div>
      <h1>{food?.name}</h1>
      <img src={food?.imageUrl} alt={food?.imageUrl} />
      <p>{food?.description}</p>
    </div>
  );
};

export default DetailProduk;
