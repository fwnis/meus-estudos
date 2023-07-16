import React from "react";
import { keyframes, styled } from "styled-components";
import { Link } from "react-router-dom";
import Head from "./Head";
import LoadingAnim from "./LoadingAnim";

const animeUp = keyframes`
to {
  opacity: 1;
  transform: initial;
}
`;

const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
  margin-top: 2rem;
  opacity: 0;
  transform: translateY(-40px);
  animation: ${animeUp} 0.3s forwards;
  & > a {
    text-decoration: none;
    color: inherit;
  }
`;

const Img = styled.img`
  width: 100%;
  height: auto;
  border-radius: 5px;
`;

const Title = styled.h2`
  margin: .25rem 0 .25rem 0;
`;

const Price = styled.span`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1rem;
`

const Produtos = () => {
  const [produtos, setProdutos] = React.useState([]);
  const [loading, setLoading] = React.useState(null);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    async function fetchProdutos(url) {
      try {
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setProdutos(json);
      } catch (error) {
        setError("Ocorreu um erro");
      } finally {
        setLoading(false);
      }
    }
    fetchProdutos("https://ranekapi.origamid.dev/json/api/produto");
  }, []);

  if (loading) return <LoadingAnim></LoadingAnim>;
  if (error) return <p>{error}</p>;
  if (produtos === null) return null;
  return (
    <>
      <Head title="Produtos" description="Página de produtos" />
      {!loading && produtos && (
        <Container>
          {produtos.map((produto) => (
            <Link to={"produto/" + produto.id} key={produto.id}>
              <Img src={produto.fotos[0].src} alt="" />
              <Title>{produto.nome}</Title>
              <Price>R$ {produto.preco}</Price>
            </Link>
          ))}
        </Container>
      )}
    </>
  );
};

export default Produtos;
