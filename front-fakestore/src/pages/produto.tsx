import { useRouter } from "next/router";
import Layout from "fakestore/components/layout";

const Produto = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Layout>
      <p>{id || "Nenhum"}</p>
    </Layout>
  );
};

export default Produto;
