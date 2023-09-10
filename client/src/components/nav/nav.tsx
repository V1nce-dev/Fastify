"use client";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  font-family: fantasy;
`;

const Title = styled.h1`
  font-size: 25px;
  font-weight: bold;
  margin-right: 20px;
`;

const Menu = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 25px;
  width: 60px;
  border: none;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.3);
  font-weight: bold;
`;

const Register = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 25px;
  width: 90px;
  border: none;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.3);
  font-weight: bold;

`;

const NavBar: React.FC = () => {
    return (
        <Nav>
            <TitleContainer>
                <Title>Trivia</Title>
                <Menu>Menu</Menu>
            </TitleContainer>
            <Register>Register</Register>
        </Nav>
    );
};

export default NavBar;
