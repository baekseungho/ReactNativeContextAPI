import React, { useContext, useState } from "react";
import styled from "styled-components/native";
import UserContext from "../context/User";

const TextStyle = styled.TextInput`
  border: 1px solid black;
  width: 250px;
  padding: 10px 15px;
  margin: 10px;
  font-size: 25px;
`;

const Input = () => {
  const [name, setName] = useState("");
  const { dispatch } = useContext(UserContext);
  return (
    <TextStyle
      value={name}
      onChangeText={(text) => setName(text)}
      onSubmitEditing={() => {
        dispatch(name);
        setName("");
      }}
      placeholder="이름입력"
      autoCorrect={false}
      autoCapialize="none"
    />
  );
};

export default Input;
