import React from "react";
import User from "./components/User";
import { UserProvider } from "./context/User";
import styled from "styled-components";
import { StatusBar } from "expo-status-bar";
import Input from "./components/Input";

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
  justify-content: center;
  align-items: center;
`;

const App = () => {
  return (
    <UserProvider>
      <Container>
        <StatusBar barStyle={"light-content"} />
        <User />
        <Input />
      </Container>
    </UserProvider>
  );
};

export default App;
