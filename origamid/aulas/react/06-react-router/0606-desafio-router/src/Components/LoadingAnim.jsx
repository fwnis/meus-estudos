import React from "react";
import { styled, keyframes } from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80vh;
`;

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Loading = styled.div`
  border: 8px solid #f3f3f3;
  border-top: 8px solid #d7d7d7;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: ${spin} 1s linear infinite;
  margin: 1rem;
`;

const LoadingAnim = () => {
  return (
    <Container>
      <Loading></Loading>
    </Container>
  );
};

export default LoadingAnim;
