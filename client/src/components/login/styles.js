import styled from "styled-components";

export const Section = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ebefff;
  margin: 0;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3.15rem;
`;

export const Title = styled.p`
  font-size: 1rem;
  text-align: center;
  font-family: "Inter";
  line-height: 20px;
  font-weight: 700;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.2rem;

  input {
    width: 22rem;
    border-radius: 50px;
    border: 1px solid #656ed3;
    padding: 0.3rem;

    @media (max-width: 1200px) {
      width: 20rem;
    }

    @media (max-width: 920px) {
      width: 18rem;
      display: flex;
      justify-content: center;
    }
    @media (max-width: 350px) {
      width: 12rem;
      display: flex;
      justify-content: center;
    }
  }

  button {
    width: 22rem;
    border: none;
    border-radius: 50px;
    background-color: #656ed3;
    padding: 0.65rem;
    color: #afb3ff;
    font-family: "Inter";
    font-size: 1rem;
    line-height: 20px;
    font-weight: 500;
    cursor: pointer;

    @media (max-width: 1200px) {
      width: 20rem;
    }

    @media (max-width: 920px) {
      width: 18rem;
      display: flex;
      justify-content: center;
    }

    @media (max-width: 350px) {
      width: 12rem;
      display: flex;
      justify-content: center;
    }
  }

  label {
    align-self: flex-start;
    text-align: start;
    font-size: 1rem;
    font-family: "Inter";
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-content: center;
  align-items: center;
  gap: 0.65rem;
`;

export const P = styled.p`
  font-size: 1rem;
  font-family: "Inter";
  text-align: center;

  @media (max-width: 1200px) {
    font-size: 0.8rem;
  }
`;

export const LinkColor = styled.span`
  font-weight: bold;
  cursor: pointer;
`;

export const Content2 = styled.div`
  margin: 0;
  width: 35%;
  height: 100vh;
  background: #afb3ff;

  @media (max-width: 1200px) {
    width: 30%;
  }

  @media (max-width: 1120px) {
    width: 27%;
  }

  @media (max-width: 950px) {
    width: 26%;
  }

  @media (max-width: 920px) {
    display: none;
  }
`;

export const Image = styled.img`
  width: 25rem;
  position: relative;
  top: 2.5rem;
  right: 10rem;

  @media (max-width: 1200px) {
    width: 21rem;
    top: 3rem;
  }

  @media (max-width: 1120px) {
    width: 16rem;
    top: 6rem;
    right: 8rem;
  }

  @media (max-width: 950px) {
    width: 15rem;
    right: 7rem;
  }

  @media (max-width: 920px) {
    display: none;
  }
`;

export const Image2 = styled.img`
  width: 20%;
  position: absolute;
  top: 100;
  bottom: 0;

  @media (max-width: 900px) {
    width: 25%;
  }

  @media (max-width: 600px) {
    width: 30%;
  }
`;
