import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import H1 from "../../components/Title";
import Button from "../../components/Button";
import axios from "axios";
import {
  BgLeft,
  Header,
  Container,
  DivButton,
  Ul,
  User,
  Credito,
} from "./style";

const Users = () => {
  const [users, setUsers] = React.useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetUsersApi() {
      let { data: newUsers } = await axios.get("http://localhost:3001/users");
      setUsers(newUsers);
    }

    fetUsersApi();
  }, [users]);

  const dellUser = async (id) => {
    await axios.delete(`http://localhost:3001/users/${id}`);

    const newUser = users.filter((user) => user.id !== id);
    setUsers(newUser);
  };

  let backPage = () => {
    navigate("/");
  };

  return (
    <Header>
      <BgLeft></BgLeft>
      <Container>
        <H1>
          <i className="bi bi-hdd"></i> Lista de Developer
        </H1>
        <Ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p>
              <p>{user.email}</p>
              <i
                className="bi bi-trash"
                onClick={() => {
                  dellUser(user.id);
                }}
              ></i>
            </User>
          ))}
        </Ul>
        <DivButton>
          <Button onClick={backPage} isback={true}>
            <i className="bi bi-arrow-left-short"></i> Voltar
          </Button>
        </DivButton>
      </Container>

      <Credito>
        Desenvolvedor Web: <b>Wesley Cunha</b>
      </Credito>
    </Header>
  );
};

export default Users;
