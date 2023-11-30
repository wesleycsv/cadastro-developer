import React from "react";
import { useNavigate } from "react-router-dom";
import H1 from "../../components/Title";
import Button from "../../components/Button";
import axios from "axios";

import {
  BgLeft,
  Header,
  Container,
  Separador,
  Label,
  Input,
  Inputs,
  DivButton,
  Credito,
} from "./style";

const Home = () => {
  const [users, setUsers] = React.useState([]);
  const inputName = React.useRef();
  const inputEmail = React.useRef();

  const navigate = useNavigate();

  const addNewUser = async () => {
    if (!inputName.current.value || !inputEmail.current.value) {
      return false;
    }

    let { data: newUsers } = await axios.post("http://localhost:3001/users", {
      name: inputName.current.value,
      email: inputEmail.current.value,
    });

    setUsers([...users, newUsers]);
    navigate("/users");
  };

  return (
    <Header>
      <BgLeft></BgLeft>
      <Container>
        <H1>
          <i className="bi bi-hdd"></i> Cadastro de Developer
        </H1>
        <Inputs>
          <Separador>
            <Label>
              <i className="bi bi-person"></i> Name:
            </Label>
            <Input ref={inputName} placeholder="Seu Name" />
          </Separador>
          <Separador>
            <Label>
              <i className="bi bi-envelope"></i> E-mail:
            </Label>
            <Input ref={inputEmail} placeholder="Seu E-mail" />
          </Separador>
        </Inputs>
        <DivButton>
          <Button to="/users" onClick={addNewUser}>
            Cadastrar <i className="bi bi-arrow-right-short"></i>
          </Button>
        </DivButton>
      </Container>
      <Credito>
        Desenvolvedor Web: <b>Wesley Cunha</b>
      </Credito>
    </Header>
  );
};

export default Home;
