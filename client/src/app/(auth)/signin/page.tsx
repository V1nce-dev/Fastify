"use client";
import axios from "axios";
import { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body{
        background: #1d1d1d;
        margin-left: 20rem;
        margin-right: 20rem;
        margin-top: 0;
        margin-bottom: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
    }
`;

const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Header = styled.h1`
  font-size: 30px;
  font-family: Quicksand;
  color: white;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
`

const Input = styled.input`
  box-sizing: border-box;
  border: none;
  border-radius: 5px;
  margin: 10px;
  padding: 12px;
  width: 20rem;
  font-size: medium;
  background: #2b2b2b;
  color: gray;
`;

const Submit = styled.button`
  box-sizing: border-box;
  margin: 10px;
  padding: 12px;
  border: none;
  border-radius: 5px;
  width: 20rem;
  background: white;
  font-size: 15px;
  font-family: Quicksand;
`;

const AccountMessage = styled.p`
    color: white;
    font-family: sans-serif;
`

const ErrorMessage = styled.p`
    color: red;
    font-family: sans-serif;
`

const SignInPage: React.FC = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<any>(null);

    const handeSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        try {
            await axios.post(
                "http://localhost:8080/api/register",
                {
                    username: username,
                    password: password,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            setUsername("");
            setPassword("");
        } catch (error: unknown) {
            if ((error as any).response?.data) {
                setError((error as any).response.data);
            }
        }
    };

    return (
        <div>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link
                href="https://fonts.googleapis.com/css2?family=Quicksand:wght@500&display=swap"
                rel="stylesheet"
            ></link>
            <GlobalStyle />
            <ContentContainer>
                <Header>Signup to Fastify</Header>
                <Form onSubmit={handeSubmit}>
                    <Input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Username" />
                    <Input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                    />
                    <Submit>Signup</Submit>
                </Form>
                <AccountMessage>Have and account, Login.</AccountMessage>
                <ErrorMessage>{error ? error.message : ""}</ErrorMessage>
            </ContentContainer>
        </div>
    );
};

export default SignInPage;
