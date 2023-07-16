import React from "react";
import Head from "./Head";
import Produtos from "./Produtos";
import { useLocation, useParams } from "react-router-dom";
import { styled, keyframes } from "styled-components";
import LoadingAnim from "./LoadingAnim";

const animeLeft = keyframes`
to {
  opacity: 1;
  transform: initial;
}
`;

const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 2rem;
  margin-top: 2rem;
  opacity: 0;
  transform: translateX(-40px);
  animation: ${animeLeft} 0.3s forwards;
`;

const Img = styled.img`
  display: block;
  width: 100%;
  height: auto;
  border-radius: 5px;
  grid-row: 1 / 4;
  grid-column: 1;
  margin-bottom: 1rem;
`;

const Title = styled.h1`
  font-size: 1.75rem;
`;

const Price = styled.span`
  font-family: Arial, Helvetica, sans-serif;
  background-color: #87f957;
  color: #047200;
  padding: 0.5rem 1rem;
  border-radius: 5px;
`;

const Desc = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.25rem;
`;

const Produto = () => {
  const { id } = useParams();

  const [produto, setProduto] = React.useState([]);
  const [loading, setLoading] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [fotos, setFotos] = React.useState([]);

  React.useEffect(() => {
    async function fetchProduto(url) {
      try {
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setProduto(json);
        setFotos(json.fotos);
      } catch (erro) {
        setError("Um erro ocorreu");
      } finally {
        setLoading(false);
      }
    }
    fetchProduto(`https://ranekapi.origamid.dev/json/api/produto/${id}`);
  }, [id]);

  if (loading) return <LoadingAnim></LoadingAnim>;
  if (error) return <p>{error}</p>;
  if (produto === null) return null;
  return (
    <>
      <Head title={produto.nome} description={produto.descricao} />
      {!loading && produto && (
        <div>
          <Container>
            <div>
              {fotos.map((foto) => (
                <Img key={foto.src} src={foto.src} />
              ))}
            </div>
            <div>
              <Title>{produto.nome}</Title>
              <Price>R$ {produto.preco}</Price>
              <Desc>{produto.descricao}</Desc>
            </div>
          </Container>
        </div>
      )}
    </>
  );
};

export default Produto;
