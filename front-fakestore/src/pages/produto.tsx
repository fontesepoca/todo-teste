import { useRouter } from "next/router";

const Produto = () => {
  const router = useRouter();
  const { id } = router.query;

  return <p>{id || "Nenhum"}</p>;
};

export default Produto;
